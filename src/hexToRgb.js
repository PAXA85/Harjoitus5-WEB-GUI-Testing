
export function hexToRgb(hex) {
  if (typeof hex !== "string") {
    throw new Error("InvalidHex");
  }

  const raw = hex.trim().replace(/^#/, "");

  if (/^[0-9a-fA-F]{3}$/.test(raw)) {
    const r = raw[0] + raw[0];
    const g = raw[1] + raw[1];
    const b = raw[2] + raw[2];
    return {
      r: parseInt(r, 16),
      g: parseInt(g, 16),
      b: parseInt(b, 16),
    };
  }

  if (/^[0-9a-fA-F]{6}$/.test(raw)) {
    return {
      r: parseInt(raw.slice(0, 2), 16),
      g: parseInt(raw.slice(2, 4), 16),
      b: parseInt(raw.slice(4, 6), 16),
    };
  }

  throw new Error("InvalidHex");
}
