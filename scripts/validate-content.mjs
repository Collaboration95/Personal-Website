import assert from "node:assert/strict";
import fs from "node:fs";

const requiredFiles = [
  "public/FinalResume.pdf",
  "public/intro-alone.jpeg",
  "public/HealthMate.png",
  "public/InvoiceHub.png",
  "public/angrybirdsspace.png",
  "public/Breakout_C.png",
  "public/AirconBot.png",
];

for (const file of requiredFiles) {
  assert.equal(fs.existsSync(file), true, `Missing content asset: ${file}`);
}

const source = fs.readFileSync("lib/data.ts", "utf8");
const requiredLabels = [
  "HealthMate",
  "InvoiceHub",
  "3D Angry Bird Space",
  "Atari Breakout",
  "Aircon Balance Bot",
  "guruprasath3200@gmail.com",
  "https://www.linkedin.com/in/guruprasath3200/",
  "https://github.com/Collaboration95",
];

for (const label of requiredLabels) {
  assert.equal(source.includes(label), true, `Missing content label: ${label}`);
}

console.log(`Content validation passed (${requiredFiles.length} assets, ${requiredLabels.length} labels).`);
