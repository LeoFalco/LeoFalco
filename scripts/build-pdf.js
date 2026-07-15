"use strict";

// Gera curriculo.pdf a partir de curriculo.html usando o Chromium empacotado
// pelo Puppeteer — nao depende de nenhum Chrome instalado na maquina.
// Respeita o CSS @media print embutido no HTML.

const { pathToFileURL } = require("url");
const { join } = require("path");
const puppeteer = require("puppeteer");

const ROOT = join(__dirname, "..");
const HTML = join(ROOT, "curriculo.html");
const PDF = join(ROOT, "curriculo.pdf");

async function main() {
  const browser = await puppeteer.launch({ headless: "new" });
  try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(HTML).href, { waitUntil: "networkidle0" });
    await page.pdf({
      path: PDF,
      format: "A4",
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    console.log(`curriculo.pdf gerado em ${PDF}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
