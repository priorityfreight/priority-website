const fs = require("fs/promises");
const path = require("path");
const { spawn } = require("child_process");

process.env.PLAYWRIGHT_BROWSERS_PATH = path.join(process.cwd(), ".playwright-browsers");

const { chromium, devices } = require("playwright");

const projectRoot = process.cwd();
const port = process.env.VISUAL_AUDIT_PORT || "3005";
const host = "127.0.0.1";
const baseURL = `http://${host}:${port}`;
const chromiumExecutablePath = path.join(
  projectRoot,
  ".playwright-browsers",
  "chromium-1217",
  "chrome-mac-arm64",
  "Google Chrome for Testing.app",
  "Contents",
  "MacOS",
  "Google Chrome for Testing"
);
const routes = [
  {
    slug: "home",
    path: "/",
    sections: [
      { name: "header", selector: "header" },
      { name: "hero", selector: "#home" },
      { name: "positioning", selector: "#positioning" },
      { name: "services", selector: "#services" },
      { name: "methodology", selector: "#methodology" },
      { name: "impact", selector: "#impact" },
      { name: "contact", selector: "#contact" },
      { name: "footer", selector: "footer" },
    ],
  },
];

const viewports = [
  {
    name: "desktop",
    width: 1440,
    height: 2200,
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
  },
  {
    name: "mobile",
    ...devices["iPhone 14"],
  },
];

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function waitForServer(url, timeoutMs = 90000) {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {}

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  throw new Error(`The local server did not start within ${timeoutMs / 1000}s.`);
}

async function runCommand(command, args, env, label) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: projectRoot,
      env,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let output = "";

    child.stdout.on("data", (chunk) => {
      output += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      output += chunk.toString();
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolve(output);
        return;
      }

      reject(
        new Error(
          `${label} failed with exit code ${code}.\n\n${output}`
        )
      );
    });
  });
}

async function writeReport(reportPath, runId, manifest) {
  const lines = [
    "# Visual Audit Run",
    "",
    `- Run ID: \`${runId}\``,
    `- Base URL: \`${baseURL}\``,
    `- Generated at: \`${new Date().toISOString()}\``,
    "",
    "## Included Evidence",
    "",
  ];

  for (const route of manifest.routes) {
    lines.push(`### ${route.slug}`);
    lines.push("");

    for (const viewport of route.viewports) {
      lines.push(`- ${viewport.name}:`);
      lines.push(`  Full page: \`${viewport.fullPage}\``);

      for (const shot of viewport.sections) {
        lines.push(`  Section ${shot.name}: \`${shot.path}\``);
      }

      if (viewport.mobileMenu) {
        lines.push(`  Mobile menu: \`${viewport.mobileMenu}\``);
      }
    }

    lines.push("");
  }

  lines.push("## Review Checklist");
  lines.push("");
  lines.push("- Revisar spacing vertical entre bloques en mobile.");
  lines.push("- Confirmar que header, hero y CTA no tengan solapamientos.");
  lines.push("- Verificar legibilidad de textos sobre imágenes.");
  lines.push("- Detectar tarjetas con alturas excesivas o cortes visuales.");
  lines.push("- Revisar consistencia de bordes, radios, paddings y alineaciones.");
  lines.push("");

  await fs.writeFile(reportPath, lines.join("\n"), "utf8");
}

async function writeBlockedReport(reportPath, runId, error) {
  const lines = [
    "# Visual Audit Run",
    "",
    `- Run ID: \`${runId}\``,
    `- Base URL: \`${baseURL}\``,
    `- Generated at: \`${new Date().toISOString()}\``,
    `- Status: \`blocked in current environment\``,
    "",
    "## What Was Prepared",
    "",
    "- Production build completed successfully.",
    "- Local server started successfully.",
    "- Playwright and Chromium were installed inside the repository.",
    "- The screenshot stage was blocked by this environment while launching Chromium headless.",
    "",
    "## Blocker",
    "",
    "```text",
    String(error?.message || error),
    "```",
    "",
    "## Next Step",
    "",
    "- Run `npm run audit:visual` from a local desktop session where headless Chromium is allowed to launch.",
    "- The script will write screenshots and a manifest into `audits/visual/<timestamp>/`.",
    "",
  ];

  await fs.writeFile(reportPath, lines.join("\n"), "utf8");
}

async function screenshotSection(page, outputDir, section) {
  const locator = page.locator(section.selector).first();
  await locator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);
  const outputPath = path.join(outputDir, `${section.name}.png`);
  await locator.screenshot({ path: outputPath });

  return outputPath;
}

async function captureRoute(browser, runDir, route) {
  const routeDir = path.join(runDir, route.slug);
  await ensureDir(routeDir);
  const routeManifest = {
    slug: route.slug,
    viewports: [],
  };

  for (const viewport of viewports) {
    const viewportDir = path.join(routeDir, viewport.name);
    await ensureDir(viewportDir);
    const context = await browser.newContext({
      ...viewport,
      baseURL,
    });
    const page = await context.newPage();
    await page.emulateMedia({ reducedMotion: "reduce" });

    await page.goto(route.path, { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const fullPagePath = path.join(viewportDir, "full-page.png");
    await page.screenshot({ path: fullPagePath, fullPage: true });

    const sectionShots = [];
    for (const section of route.sections) {
      sectionShots.push({
        name: section.name,
        path: await screenshotSection(page, viewportDir, section),
      });
    }

    let mobileMenuPath = null;
    if (viewport.name === "mobile" && route.path === "/") {
      await page.goto(route.path, { waitUntil: "networkidle" });
      const toggle = page.locator("header button[aria-label]").first();
      if (await toggle.isVisible()) {
        await toggle.click();
        await page.waitForTimeout(350);
        mobileMenuPath = path.join(viewportDir, "mobile-menu.png");
        await page.screenshot({ path: mobileMenuPath, fullPage: false });
      }
    }

    routeManifest.viewports.push({
      name: viewport.name,
      fullPage: fullPagePath,
      sections: sectionShots,
      mobileMenu: mobileMenuPath,
    });

    await context.close();
  }

  return routeManifest;
}

async function main() {
  const runId = timestamp();
  const runDir = path.join(projectRoot, "audits", "visual", runId);
  await ensureDir(runDir);
  const sharedEnv = {
    ...process.env,
    npm_config_cache: path.join(projectRoot, ".npm-cache"),
    PLAYWRIGHT_BROWSERS_PATH: path.join(projectRoot, ".playwright-browsers"),
  };

  await runCommand("npm", ["run", "build"], sharedEnv, "Visual audit build");

  const server = spawn(
    "npm",
    ["run", "start", "--", "--hostname", host, "--port", port],
    {
      cwd: projectRoot,
      env: sharedEnv,
      stdio: ["ignore", "pipe", "pipe"],
    }
  );

  let serverOutput = "";
  server.stdout.on("data", (chunk) => {
    serverOutput += chunk.toString();
  });
  server.stderr.on("data", (chunk) => {
    serverOutput += chunk.toString();
  });

  const stopServer = () => {
    if (!server.killed) {
      server.kill("SIGTERM");
    }
  };

  process.on("SIGINT", () => {
    stopServer();
    process.exit(1);
  });

  try {
    await waitForServer(baseURL, 120000);

    process.env.PLAYWRIGHT_BROWSERS_PATH = path.join(projectRoot, ".playwright-browsers");
    let browser;

    try {
      browser = await chromium.launch({
        headless: true,
        executablePath: chromiumExecutablePath,
      });
    } catch (error) {
      const reportPath = path.join(runDir, "REPORT.md");
      const manifestPath = path.join(runDir, "manifest.json");
      await writeBlockedReport(reportPath, runId, error);
      await fs.writeFile(
        manifestPath,
        JSON.stringify(
          {
            status: "blocked",
            runId,
            baseURL,
            error: String(error?.message || error),
          },
          null,
          2
        ),
        "utf8"
      );
      console.log(`Visual audit prepared, but browser launch was blocked: ${runDir}`);
      console.log(`Report: ${reportPath}`);
      return;
    }

    const manifest = { routes: [] };

    for (const route of routes) {
      manifest.routes.push(await captureRoute(browser, runDir, route));
    }

    await browser.close();

    const reportPath = path.join(runDir, "REPORT.md");
    const manifestPath = path.join(runDir, "manifest.json");
    await writeReport(reportPath, runId, manifest);
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8");

    console.log(`Visual audit completed: ${runDir}`);
    console.log(`Report: ${reportPath}`);
  } catch (error) {
    console.error("Visual audit failed.");
    console.error(error);
    if (serverOutput) {
      console.error("\nServer output:\n");
      console.error(serverOutput);
    }
    process.exitCode = 1;
  } finally {
    stopServer();
  }
}

main();
