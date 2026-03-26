const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicResults = path.join('c:', 'Users', 'ckhou', 'Desktop', 'Aesthetic Clinic Prototype', 'v0-med-spa-website-design', 'public', 'results');

async function crop(filename, nameBefore, nameAfter) {
  const inputPath = path.join(publicResults, filename);
  const metadata = await sharp(inputPath).metadata();
  const halfWidth = Math.floor(metadata.width / 2);

  // Left half (Before)
  await sharp(inputPath)
    .extract({ left: 0, top: 0, width: halfWidth, height: metadata.height })
    .toFile(path.join(publicResults, nameBefore));

  // Right half (After)
  await sharp(inputPath)
    .extract({ left: halfWidth, top: 0, width: metadata.width - halfWidth, height: metadata.height })
    .toFile(path.join(publicResults, nameAfter));
    
  console.log(`Cropped ${filename} into ${nameBefore} and ${nameAfter}`);
}

async function run() {
  await crop('fillers-pair.png', 'fillers-before.png', 'fillers-after.png');
  await crop('jawline-pair.png', 'jawline-before.png', 'jawline-after.png');
}

run().catch(console.error);
