import Foundation
import CoreGraphics
import ImageIO
import UniformTypeIdentifiers

struct Job {
  let input: String
  let output: String
}

let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let jobs = [
  Job(input: "assets/FAV ICON.png", output: "assets/favicon-transparent.png"),
  Job(input: "assets/Logo APP.png", output: "assets/logo-app-transparent.png"),
  Job(input: "assets/LOGO.png", output: "assets/logo-horizontal-transparent.png"),
  Job(input: "assets/LOGO AZUL.png", output: "assets/logo-horizontal-dark-transparent.png"),
  Job(input: "assets/LOGO AZUL V.png", output: "assets/logo-vertical-dark-transparent.png"),
]

let toleranceSquared = 52 * 52

func clamp(_ value: Int, min lower: Int, max upper: Int) -> Int {
  Swift.max(lower, Swift.min(upper, value))
}

func backgroundSample(from pixels: [UInt8], width: Int, height: Int) -> (Int, Int, Int) {
  let points = [
    (0, 0),
    (width - 1, 0),
    (0, height - 1),
    (width - 1, height - 1),
  ]

  var totalR = 0
  var totalG = 0
  var totalB = 0

  for (x, y) in points {
    let index = (y * width + x) * 4
    totalR += Int(pixels[index])
    totalG += Int(pixels[index + 1])
    totalB += Int(pixels[index + 2])
  }

  return (totalR / points.count, totalG / points.count, totalB / points.count)
}

func matchesBackground(
  _ pixels: [UInt8],
  index: Int,
  background: (Int, Int, Int)
) -> Bool {
  let deltaR = Int(pixels[index]) - background.0
  let deltaG = Int(pixels[index + 1]) - background.1
  let deltaB = Int(pixels[index + 2]) - background.2

  return (deltaR * deltaR) + (deltaG * deltaG) + (deltaB * deltaB) <= toleranceSquared
}

func loadPixels(from url: URL) throws -> (pixels: [UInt8], width: Int, height: Int) {
  guard
    let source = CGImageSourceCreateWithURL(url as CFURL, nil),
    let image = CGImageSourceCreateImageAtIndex(source, 0, nil)
  else {
    throw NSError(domain: "transparent-logo", code: 1, userInfo: [
      NSLocalizedDescriptionKey: "No se pudo cargar \(url.path).",
    ])
  }

  let width = image.width
  let height = image.height
  let bytesPerRow = width * 4
  let colorSpace = CGColorSpaceCreateDeviceRGB()
  let bitmapInfo =
    CGBitmapInfo.byteOrder32Big.rawValue |
    CGImageAlphaInfo.premultipliedLast.rawValue
  var pixels = [UInt8](repeating: 0, count: width * height * 4)

  let rendered = pixels.withUnsafeMutableBytes { rawBuffer in
    guard
      let context = CGContext(
        data: rawBuffer.baseAddress,
        width: width,
        height: height,
        bitsPerComponent: 8,
        bytesPerRow: bytesPerRow,
        space: colorSpace,
        bitmapInfo: bitmapInfo
      )
    else {
      return false
    }

    context.draw(image, in: CGRect(x: 0, y: 0, width: width, height: height))
    return true
  }

  guard rendered else {
    throw NSError(domain: "transparent-logo", code: 2, userInfo: [
      NSLocalizedDescriptionKey: "No se pudo renderizar \(url.lastPathComponent).",
    ])
  }

  return (pixels, width, height)
}

func trimTransparentPixels(_ pixels: [UInt8], width: Int, height: Int) -> (pixels: [UInt8], width: Int, height: Int) {
  var minX = width
  var minY = height
  var maxX = -1
  var maxY = -1

  for y in 0..<height {
    for x in 0..<width {
      let index = (y * width + x) * 4
      if pixels[index + 3] > 0 {
        minX = Swift.min(minX, x)
        minY = Swift.min(minY, y)
        maxX = Swift.max(maxX, x)
        maxY = Swift.max(maxY, y)
      }
    }
  }

  guard maxX >= minX, maxY >= minY else {
    return (pixels, width, height)
  }

  let padding = Swift.max(4, Int(Double(Swift.min(width, height)) * 0.02))
  let left = clamp(minX - padding, min: 0, max: width - 1)
  let top = clamp(minY - padding, min: 0, max: height - 1)
  let right = clamp(maxX + padding, min: 0, max: width - 1)
  let bottom = clamp(maxY + padding, min: 0, max: height - 1)
  let croppedWidth = right - left + 1
  let croppedHeight = bottom - top + 1
  var croppedPixels = [UInt8](repeating: 0, count: croppedWidth * croppedHeight * 4)

  for y in 0..<croppedHeight {
    for x in 0..<croppedWidth {
      let sourceIndex = ((top + y) * width + (left + x)) * 4
      let targetIndex = (y * croppedWidth + x) * 4
      croppedPixels[targetIndex] = pixels[sourceIndex]
      croppedPixels[targetIndex + 1] = pixels[sourceIndex + 1]
      croppedPixels[targetIndex + 2] = pixels[sourceIndex + 2]
      croppedPixels[targetIndex + 3] = pixels[sourceIndex + 3]
    }
  }

  return (croppedPixels, croppedWidth, croppedHeight)
}

func savePNG(_ pixels: [UInt8], width: Int, height: Int, to url: URL) throws {
  let colorSpace = CGColorSpaceCreateDeviceRGB()
  let bitmapInfo =
    CGBitmapInfo.byteOrder32Big.union(CGBitmapInfo(rawValue: CGImageAlphaInfo.premultipliedLast.rawValue))
  let data = Data(pixels)

  guard
    let provider = CGDataProvider(data: data as CFData),
    let image = CGImage(
      width: width,
      height: height,
      bitsPerComponent: 8,
      bitsPerPixel: 32,
      bytesPerRow: width * 4,
      space: colorSpace,
      bitmapInfo: bitmapInfo,
      provider: provider,
      decode: nil,
      shouldInterpolate: true,
      intent: .defaultIntent
    ),
    let destination = CGImageDestinationCreateWithURL(url as CFURL, UTType.png.identifier as CFString, 1, nil)
  else {
    throw NSError(domain: "transparent-logo", code: 3, userInfo: [
      NSLocalizedDescriptionKey: "No se pudo guardar \(url.path).",
    ])
  }

  CGImageDestinationAddImage(destination, image, nil)
  if !CGImageDestinationFinalize(destination) {
    throw NSError(domain: "transparent-logo", code: 4, userInfo: [
      NSLocalizedDescriptionKey: "No se pudo finalizar \(url.path).",
    ])
  }
}

for job in jobs {
  let inputURL = root.appendingPathComponent(job.input)
  let outputURL = root.appendingPathComponent(job.output)
  let loaded = try loadPixels(from: inputURL)
  var pixels = loaded.pixels
  let width = loaded.width
  let height = loaded.height
  let background = backgroundSample(from: pixels, width: width, height: height)
  var visited = [Bool](repeating: false, count: width * height)
  var queue = [(x: Int, y: Int)]()
  queue.reserveCapacity(width * 2 + height * 2)

  func enqueueIfNeeded(x: Int, y: Int) {
    let flatIndex = y * width + x
    if visited[flatIndex] {
      return
    }

    let pixelIndex = flatIndex * 4
    if pixels[pixelIndex + 3] == 0 || !matchesBackground(pixels, index: pixelIndex, background: background) {
      return
    }

    visited[flatIndex] = true
    queue.append((x, y))
  }

  for x in 0..<width {
    enqueueIfNeeded(x: x, y: 0)
    enqueueIfNeeded(x: x, y: height - 1)
  }

  for y in 0..<height {
    enqueueIfNeeded(x: 0, y: y)
    enqueueIfNeeded(x: width - 1, y: y)
  }

  var index = 0
  while index < queue.count {
    let point = queue[index]
    index += 1
    let neighbors = [
      (point.x + 1, point.y),
      (point.x - 1, point.y),
      (point.x, point.y + 1),
      (point.x, point.y - 1),
    ]

    for (nextX, nextY) in neighbors where nextX >= 0 && nextY >= 0 && nextX < width && nextY < height {
      enqueueIfNeeded(x: nextX, y: nextY)
    }
  }

  for y in 0..<height {
    for x in 0..<width {
      let flatIndex = y * width + x
      if visited[flatIndex] {
        pixels[flatIndex * 4 + 3] = 0
      }
    }
  }

  let trimmed = trimTransparentPixels(pixels, width: width, height: height)
  try savePNG(trimmed.pixels, width: trimmed.width, height: trimmed.height, to: outputURL)
  print("Exported \(job.output)")
}
