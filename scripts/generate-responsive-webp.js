const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

// Configure sizes and source directory
const sizes = [480, 768, 1200, 1800];
const srcDir = path.resolve(__dirname, '../src/assets');
const outDir = path.resolve(__dirname, '../public/imgs');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;
  const name = path.basename(file, ext);
  const input = path.join(srcDir, file);

  for (const w of sizes) {
    const outName = `${name}-${w}.webp`;
    const outPath = path.join(outDir, outName);
    try {
      await sharp(input).resize({ width: w }).webp({ quality: 80 }).toFile(outPath);
      console.log('created', outPath);
    } catch (err) {
      console.error('error processing', input, err);
    }
  }
}

async function main() {
  const files = fs.readdirSync(srcDir);
  for (const f of files) {
    await processImage(f);
  }
  console.log('done');
}

main().catch(console.error);
