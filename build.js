#!/usr/bin/env node
/**
 * Scans assets/images/ and assets/documents/ and generates assets.json.
 * Run before deploy. The gallery reads this file and displays whatever is there.
 */

const fs = require("fs");
const path = require("path");

const IMAGE_EXT = [".svg", ".png", ".jpg", ".jpeg", ".webp"];
const IMAGES_DIR = path.join(__dirname, "assets", "images");
const DOCS_DIR = path.join(__dirname, "assets", "documents");

function scanDir(dir, extensions) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => extensions.some((ext) => f.toLowerCase().endsWith(ext)))
    .sort();
}

const images = scanDir(IMAGES_DIR, IMAGE_EXT).map((f) => ({
  src: `assets/images/${f}`,
  name: path.basename(f, path.extname(f)),
}));

const pdfs = scanDir(DOCS_DIR, [".pdf"]).map((f) => ({
  src: `assets/documents/${f}`,
  name: path.basename(f, ".pdf"),
}));

const assets = { images, pdfs };
fs.writeFileSync(path.join(__dirname, "assets.json"), JSON.stringify(assets, null, 2));
console.log(`Generated assets.json: ${images.length} images, ${pdfs.length} PDFs`);
