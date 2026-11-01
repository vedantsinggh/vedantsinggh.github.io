const fs = require('fs');

// Simple PNG decoder to find bounding box of non-white pixels
function getPngDimensions(buffer) {
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}

const file = '/home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/work_slide_1536x960.png';
const buf = fs.readFileSync(file);
console.log('PNG size:', getPngDimensions(buf));
