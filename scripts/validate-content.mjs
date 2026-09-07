import assert from "node:assert/strict";
import fs from "node:fs";

const requiredFiles = [
  "public/intro-alone.jpeg",
  "public/detectt-posenet-setup.png",
  "public/HealthMate.png",
  "public/InvoiceHub.png",
  "public/angrybirdsspace.png",
  "public/Breakout_C.png",
  "public/AirconBot.png",
  "public/screenshot-declutterer-before-after.png",
  "public/mandateflow-provenance.jpg",
];

for (const file of requiredFiles) {
  assert.equal(fs.existsSync(file), true, `Missing content asset: ${file}`);
}

const source = fs.readFileSync("lib/data.ts", "utf8");
const requiredLabels = [
  "An agent’s permission is not enough; its evidence matters.",
  "The slow path was not where I first thought it was.",
  "Screenshot Declutterer",
  "DetectT",
  "Fitback made a retailer’s size chart feel personal.",
  "Making existing systems safer to change.",
  "HealthMate",
  "InvoiceHub",
  "3D Angry Bird Space",
  "Atari Breakout",
  "Aircon Balance Bot",
  "guruprasath3200@gmail.com",
  "https://www.linkedin.com/in/guruprasath3200/",
  "https://github.com/Collaboration95",
  "https://github.com/Collaboration95/DetectT",
];

for (const label of requiredLabels) {
  assert.equal(source.includes(label), true, `Missing content label: ${label}`);
}

console.log(`Content validation passed (${requiredFiles.length} assets, ${requiredLabels.length} labels).`);
