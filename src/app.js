import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { hexToRgb } from "./hexToRgb.js";
import { rgbToHex } from "./rgbToHex.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();

// Serve static frontend (public folder)
app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());

/* ==============================
   HEX → RGB
   Matches form action="/hex-to-rgb"
============================== */
app.get("/hex-to-rgb", (req, res) => {
  const input = req.query.hex;

  try {
    const rgb = hexToRgb(input);

    const normalized =
      "#" +
      input.trim().replace(/^#/, "").toUpperCase().padStart(6, "0");

    res.send(`
      <h2>HEX to RGB Result</h2>
      <p><strong>HEX:</strong> ${normalized}</p>
      <p><strong>RGB:</strong> ${rgb.r}, ${rgb.g}, ${rgb.b}</p>
      <div style="width:120px;height:120px;background:${normalized};border:1px solid black;"></div>
      <br><br>
      <a href="/">Go Back</a>
    `);
  } catch {
    res.status(400).send(`
      <h2>Error</h2>
      <p>Invalid HEX value. Must be 3 or 6 hex digits.</p>
      <a href="/">Go Back</a>
    `);
  }
});

/* ==============================
   RGB → HEX
   Matches form action="/rgb-to-hex"
============================== */
app.get("/rgb-to-hex", (req, res) => {
  try {
    // Convert query parameters to integers
    const r = parseInt(req.query.r, 10);
    const g = parseInt(req.query.g, 10);
    const b = parseInt(req.query.b, 10);

    const hex = rgbToHex(r, g, b);

    res.send(`
      <h2>RGB to HEX Result</h2>
      <p><strong>RGB:</strong> ${r}, ${g}, ${b}</p>
      <p><strong>HEX:</strong> ${hex}</p>
      <div style="width:120px;height:120px;background:${hex};border:1px solid black;"></div>
      <br><br>
      <a href="/">Go Back</a>
    `);
  } catch {
    res.status(400).send(`
      <h2>Error</h2>
      <p>Invalid RGB values. Each must be between 0 and 255.</p>
      <a href="/">Go Back</a>
    `);
  }
});