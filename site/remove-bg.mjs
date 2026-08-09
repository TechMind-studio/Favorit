import sharp from 'sharp'

async function removeBg(input, output) {
  const img = sharp(input)
  const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const { width, height, channels } = info

  const pixels = new Uint8Array(data)

  for (let i = 0; i < pixels.length; i += channels) {
    const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2]
    // Threshold: if pixel is near-white, make transparent
    if (r > 230 && g > 230 && b > 230) {
      pixels[i + 3] = 0
    } else if (r > 200 && g > 200 && b > 200) {
      // Semi-transparent edge smoothing
      const brightness = Math.min(r, g, b)
      pixels[i + 3] = Math.round((255 - brightness) * 2.5)
    }
  }

  await sharp(Buffer.from(pixels), { raw: { width, height, channels } })
    .png()
    .toFile(output)

  console.log(`✓ ${output}`)
}

await removeBg('public/images/intro-car.jpg', 'public/images/intro-car.png')
await removeBg('public/images/intro-moto.jpg', 'public/images/intro-moto.png')
