import { expect } from "chai";
import { hexToRgb } from "../../src/hexToRgb.js";

describe("hexToRgb (unit)", function () {
  it("converts 6-digit hex with #", function () {
    expect(hexToRgb("#ff00aa")).to.deep.equal({ r: 255, g: 0, b: 170 });
  });

  it("converts 6-digit hex without #", function () {
    expect(hexToRgb("00FF00")).to.deep.equal({ r: 0, g: 255, b: 0 });
  });

  it("supports 3-digit shorthand", function () {
    expect(hexToRgb("#0f8")).to.deep.equal({ r: 0, g: 255, b: 136 });
  });

  it("trims whitespace", function () {
    expect(hexToRgb("  #000000  ")).to.deep.equal({ r: 0, g: 0, b: 0 });
  });

  it("throws on invalid input", function () {
    expect(() => hexToRgb("GGGGGG")).to.throw("InvalidHex");
    expect(() => hexToRgb("#12")).to.throw("InvalidHex");
    expect(() => hexToRgb(null)).to.throw("InvalidHex");
  });
});