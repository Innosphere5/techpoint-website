import fs from 'fs';
import path from 'path';

const certsDir = 'c:/Users/sohel/OneDrive/Desktop/techpoint-web/app/public/certificates';
const files = fs.readdirSync(certsDir);

const filesLower = new Map();
files.forEach(f => filesLower.set(f.toLowerCase(), f));

// We'll read certificateData.js
const dataFile = 'c:/Users/sohel/OneDrive/Desktop/techpoint-web/app/certificate-verify/certificateData.js';
let content = fs.readFileSync(dataFile, 'utf8');

const regex = /pdfPath:\s*["']\/certificates\/([^"']+)["']/g;
let match;
const missing = [];
const corrected = [];

let newContent = content;

while ((match = regex.exec(content)) !== null) {
  const originalName = match[1];
  const decodedName = decodeURIComponent(originalName); // just in case
  
  if (!files.includes(originalName)) {
    // try case-insensitive
    const lower = originalName.toLowerCase();
    if (filesLower.has(lower)) {
      const correctName = filesLower.get(lower);
      newContent = newContent.replace(`/certificates/${originalName}`, `/certificates/${correctName}`);
      corrected.push(`${originalName} -> ${correctName}`);
    } else {
      // try replacing spaces, etc.
      let found = false;
      for (const f of files) {
        if (f.toLowerCase().replace(/\s+/g, '') === lower.replace(/\s+/g, '')) {
          newContent = newContent.replace(`/certificates/${originalName}`, `/certificates/${f}`);
          corrected.push(`${originalName} -> ${f}`);
          found = true;
          break;
        }
      }
      if (!found) {
        missing.push(originalName);
      }
    }
  }
}

fs.writeFileSync('c:/Users/sohel/OneDrive/Desktop/techpoint-web/app/certificate-verify/certificateData.js', newContent);

console.log("Missing:", missing);
console.log("Corrected:", corrected);
