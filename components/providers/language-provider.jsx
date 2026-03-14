"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const translations = {
  es: {
    locale: "es-MX",
    metaTitle:
      "PRIORITY Freight Intelligence | Inteligencia logística para el comercio global",
    metaDescription:
      "PRIORITY combina experiencia logística, inteligencia de datos y tecnología moderna para optimizar el movimiento global de carga por aire, mar y tierra.",
    brandSubtitle: "Inteligencia Logística",
    languageLabel: "Idioma",
    nav: {
      home: "Inicio",
      whatWeDo: "Qué hacemos",
      modes: "Modos de transporte",
      technology: "Tecnología",
      presentation: "Presentacion de servicios",
      contact: "Contacto",
      quote: "Solicitar cotización",
      toggle: "Abrir navegación",
    },
    hero: {
      eyebrow: "Plataforma de inteligencia logística",
      title: "Inteligencia logística para el comercio global",
      description:
        "PRIORITY combina experiencia logística, inteligencia de datos y tecnología moderna para optimizar el movimiento global de carga por aire, mar y tierra.",
      primaryCta: "Comenzar embarque",
      secondaryCta: "Solicitar cotización",
      tagline: "MÁS INTELIGENTE • MEJOR • MÁS RÁPIDO",
      signals: [
        {
          title: "Visibilidad global",
          copy: "Ve cada embarque como parte de una red logística conectada e impulsada por datos.",
        },
        {
          title: "Ruteo más inteligente",
          copy: "Equilibra servicio, costo y timing con inteligencia aplicada en cada movimiento.",
        },
        {
          title: "Precisión operativa",
          copy: "Coordina equipos, modos e hitos con una disciplina operativa moderna.",
        },
      ],
    },
    header: {
      networkLayer: "Capa de red",
      requestQuote: "Solicitar cotización",
    },
    whatWeDo: {
      eyebrow: "Qué hacemos",
      title: "Logística impulsada por inteligencia",
      description:
        "PRIORITY está hecho para importadores, exportadores y equipos operativos que buscan más que ejecución de embarques. Llevamos una mentalidad de producto al freight.",
      pillars: [
        {
          title: "Freight global",
          copy: "Transporte marítimo, aéreo y terrestre para cadenas de suministro internacionales que requieren velocidad, flexibilidad y confianza operativa.",
        },
        {
          title: "Inteligencia logística",
          copy: "Análisis impulsado por datos para optimizar costo, timing y ruteo en decisiones críticas de freight internacional.",
        },
        {
          title: "Excelencia operativa",
          copy: "Profesionales experimentados gestionando embarques complejos con el rigor, estructura y respuesta que esperan los equipos modernos.",
        },
      ],
    },
    modes: {
      eyebrow: "Modos de transporte",
      title: "Ejecución multimodal con una experiencia premium de producto.",
      description:
        "Cada modo vive dentro del mismo sistema operativo: visibilidad clara, mejor inteligencia de ruteo y ejecución disciplinada.",
      kicker: "Inteligencia por modo",
      items: [
        {
          title: "Freight marítimo",
          copy: "Control estratégico para carga contenerizada con visibilidad a lo largo de las principales rutas globales.",
        },
        {
          title: "Freight aéreo",
          copy: "Ruteo prioritario para movimientos sensibles al tiempo donde la velocidad y la respuesta operativa son clave.",
        },
        {
          title: "Transporte terrestre",
          copy: "Coordinación inland confiable que conecta puertos, aeropuertos, almacenes y puntos finales de entrega.",
        },
      ],
    },
    why: {
      eyebrow: "Por qué PRIORITY",
      title: "No somos un freight forwarder tradicional",
      description:
        "PRIORITY se posiciona como una plataforma de inteligencia logística. La diferencia está en cómo se toman, muestran y mejoran las decisiones con el tiempo.",
      panelTitle: "Punto de vista de plataforma",
      panelLines: [
        "Una capa operativa moderna para el freight global.",
        "Experiencia humana fortalecida por sistemas digitales.",
        "Pensado para equipos que quieren control, no ruido.",
      ],
      features: [
        {
          title: "Inteligencia logística",
          copy: "Convierte las operaciones de freight en una corriente de insights, no solo en actualizaciones transaccionales.",
        },
        {
          title: "Visibilidad global",
          copy: "Da seguimiento a estatus, cambios de hitos e incidencias en rutas internacionales desde una sola vista.",
        },
        {
          title: "Ruteo optimizado",
          copy: "Toma decisiones de modo y ruta con más contexto sobre servicio, timing y costo.",
        },
        {
          title: "Operaciones impulsadas por tecnología",
          copy: "Apoya a equipos expertos de freight con workflows, automatización y sistemas operativos.",
        },
      ],
    },
    benefits: {
      eyebrow: "Beneficios",
      title: "Una experiencia de freight más limpia para equipos operativos modernos.",
      description:
        "El resultado es simple: más claridad, más confianza y mejor desempeño operativo en logística internacional.",
      items: [
        {
          title: "Mejor visibilidad",
          copy: "Haz visible el movimiento de embarques, cambios de hitos y contexto operativo sin depender de actualizaciones fragmentadas.",
        },
        {
          title: "Costos optimizados",
          copy: "Mejora la economía logística eligiendo mejores combinaciones de modo, ruta y timing.",
        },
        {
          title: "Tránsito más rápido",
          copy: "Reduce demoras evitables con mejor coordinación y ciclos de respuesta operativa más ágiles.",
        },
        {
          title: "Soporte dedicado",
          copy: "Combina operaciones guiadas por tecnología con especialistas que entienden embarques complejos.",
        },
      ],
    },
    technology: {
      eyebrow: "Tecnología",
      title: "La tecnología se encuentra con la logística",
      description:
        "La experiencia de producto está diseñada para sentirse como una plataforma SaaS, sin perder de vista la realidad operativa del freight global.",
      blocks: [
        {
          title: "Inteligencia de datos",
          body: "Convierte señales tarifarias, restricciones de ruteo y contexto operativo en decisiones mejor informadas.",
        },
        {
          title: "Sistemas operativos",
          body: "Da estructura a la ejecución con workflows compartidos que sostienen consistencia entre equipos y embarques.",
        },
        {
          title: "Plataformas de visibilidad",
          body: "Crea una experiencia logística más transparente con conciencia de hitos y supervisión orientada a incidencias.",
        },
      ],
    },
    cta: {
      eyebrow: "Llamado a la acción",
      title: "Mueve carga de forma más inteligente",
      description:
        "PRIORITY está hecho para empresas que quieren más que forwarding. Es para equipos que esperan tecnología, inteligencia y una ejecución operativa premium.",
      connectLine:
        "Habla con ventas u operaciones por telefono, correo o WhatsApp segun el tipo de apoyo que necesites.",
      sales: "Ventas",
      office: "Oficina",
      phoneLabel: "Telefono",
      emailLabel: "Correo",
      whatsapp: "WhatsApp",
      presentation: "Presentacion de servicios",
      secondary: "Volver arriba",
    },
    footer: {
      description:
        "Una plataforma moderna de inteligencia logística para equipos de freight global que esperan más visibilidad, más control y mejores decisiones.",
      whatWeDo: "Qué hacemos",
      modes: "Modos de transporte",
      technology: "Tecnología",
      presentation: "Presentacion",
      contact: "Contacto",
    },
  },
  en: {
    locale: "en",
    metaTitle:
      "PRIORITY Freight Intelligence | Freight intelligence for global trade",
    metaDescription:
      "PRIORITY combines logistics expertise, data intelligence and modern technology to optimize global freight movement across air, ocean and land.",
    brandSubtitle: "Freight Intelligence",
    languageLabel: "Language",
    nav: {
      home: "Home",
      whatWeDo: "What We Do",
      modes: "Transport Modes",
      technology: "Technology",
      presentation: "Services Presentation",
      contact: "Contact",
      quote: "Request Quote",
      toggle: "Toggle navigation",
    },
    hero: {
      eyebrow: "Logistics Intelligence Platform",
      title: "Freight Intelligence for Global Trade",
      description:
        "PRIORITY combines logistics expertise, data intelligence and modern technology to optimize global freight movement across air, ocean and land.",
      primaryCta: "Start Shipping",
      secondaryCta: "Request Quote",
      tagline: "SMARTER • BETTER • FASTER",
      signals: [
        {
          title: "Global Visibility",
          copy: "See every shipment as part of a connected, data-aware logistics network.",
        },
        {
          title: "Smarter Routing",
          copy: "Balance service, cost and timing with intelligence layered into every move.",
        },
        {
          title: "Operational Precision",
          copy: "Coordinate teams, modes and milestones with modern workflow discipline.",
        },
      ],
    },
    header: {
      networkLayer: "Network Layer",
      requestQuote: "Request Quote",
    },
    whatWeDo: {
      eyebrow: "What We Do",
      title: "Logistics Powered by Intelligence",
      description:
        "PRIORITY is built for importers, exporters and operations teams that want more than shipment execution. We bring a product mindset to freight.",
      pillars: [
        {
          title: "Global Freight",
          copy: "Ocean, air and land transportation for international supply chains that need speed, flexibility and execution confidence.",
        },
        {
          title: "Logistics Intelligence",
          copy: "Data driven analysis to optimize cost, timing, and routing across high-value international freight decisions.",
        },
        {
          title: "Operational Excellence",
          copy: "Experienced professionals managing complex shipments with the rigor, structure and responsiveness modern teams expect.",
        },
      ],
    },
    modes: {
      eyebrow: "Transport Modes",
      title: "Multimodal freight execution with a premium product feel.",
      description:
        "Every mode lives inside the same operating system: clear visibility, better routing intelligence, and disciplined execution.",
      kicker: "Mode Intelligence",
      items: [
        {
          title: "Ocean Freight",
          copy: "Strategic control for containerized freight with visibility across major global trade lanes.",
        },
        {
          title: "Air Freight",
          copy: "Priority routing for time-sensitive moves where speed and responsive execution matter most.",
        },
        {
          title: "Ground Transportation",
          copy: "Reliable inland coordination that connects ports, airports, warehouses and final delivery points.",
        },
      ],
    },
    why: {
      eyebrow: "Why PRIORITY",
      title: "Not Your Traditional Freight Forwarder",
      description:
        "PRIORITY is positioned as a logistics intelligence platform. The difference is in how decisions are made, surfaced and improved over time.",
      panelTitle: "Platform Point of View",
      panelLines: [
        "A modern operating layer for global freight.",
        "Human expertise strengthened by digital systems.",
        "Built for teams that want control, not noise.",
      ],
      features: [
        {
          title: "Logistics Intelligence",
          copy: "Transform freight operations into a stream of insights, not just transactional updates.",
        },
        {
          title: "Global Visibility",
          copy: "Track status, milestone shifts and exceptions across international lanes in one view.",
        },
        {
          title: "Optimized Routing",
          copy: "Make mode and route decisions with more context around service, timing and cost.",
        },
        {
          title: "Technology Driven Operations",
          copy: "Support experienced freight teams with workflows, automation and operational systems.",
        },
      ],
    },
    benefits: {
      eyebrow: "Benefits",
      title: "A cleaner freight experience for modern operations teams.",
      description:
        "The outcome is simple: more clarity, more confidence and better operating performance across international logistics.",
      items: [
        {
          title: "Better Visibility",
          copy: "Surface shipment movement, milestone changes and operational context without relying on fragmented updates.",
        },
        {
          title: "Optimized Costs",
          copy: "Improve freight economics by choosing better combinations of mode, route and timing.",
        },
        {
          title: "Faster Transit",
          copy: "Reduce avoidable delays with tighter coordination and faster operational response loops.",
        },
        {
          title: "Dedicated Support",
          copy: "Pair technology-driven operations with experienced specialists who understand complex shipments.",
        },
      ],
    },
    technology: {
      eyebrow: "Technology",
      title: "Technology Meets Logistics",
      description:
        "The product experience is designed to feel like a SaaS platform, while still respecting the realities of global freight operations.",
      blocks: [
        {
          title: "Data Intelligence",
          body: "Turn rate signals, routing constraints and shipment context into more informed decisions.",
        },
        {
          title: "Operational Systems",
          body: "Bring structure to execution with shared workflows that support consistency across teams and shipments.",
        },
        {
          title: "Visibility Platforms",
          body: "Create a more transparent logistics experience with milestone awareness and exception-oriented oversight.",
        },
      ],
    },
    cta: {
      eyebrow: "Call To Action",
      title: "Move Freight Smarter",
      description:
        "PRIORITY is built for businesses that want more than forwarding. It is for teams that expect technology, intelligence and premium operational execution.",
      connectLine:
        "Reach our sales or operations team by phone, email, or WhatsApp depending on the support you need.",
      sales: "Sales",
      office: "Office",
      phoneLabel: "Phone",
      emailLabel: "Email",
      whatsapp: "WhatsApp",
      presentation: "Services Presentation",
      secondary: "Back to Top",
    },
    footer: {
      description:
        "A modern logistics intelligence platform for global freight teams that expect more visibility, more control, and better decisions.",
      whatWeDo: "What We Do",
      modes: "Transport Modes",
      technology: "Technology",
      presentation: "Presentation",
      contact: "Contact",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("priority-language");
      if (stored && translations[stored]) {
        setLanguage(stored);
      }
    } catch {
      // Ignore persistence errors and keep default language.
    }
  }, []);

  useEffect(() => {
    const copy = translations[language];
    document.documentElement.lang = copy.locale;
    document.title = copy.metaTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", copy.metaDescription);
    }

    try {
      window.localStorage.setItem("priority-language", language);
    } catch {
      // Ignore persistence errors and keep UI responsive.
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
