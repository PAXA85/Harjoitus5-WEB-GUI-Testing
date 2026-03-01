import { expect } from "chai";
import { rgbToHex } from "../../src/rgbToHex.js";

describe("rgbToHex (unit)", function () {

  it("converts valid rgb to HEX (lowercase output normalized)", function () {
    expect(rgbToHex(255, 0, 170)).to.equal("#FF00AA");
  });

  it("converts pure green correctly", function () {
    expect(rgbToHex(0, 255, 0)).to.equal("#00FF00");
  });

  it("pads single digit values correctly", function () {
    expect(rgbToHex(0, 0, 0)).to.equal("#000000");
    expect(rgbToHex(15, 8, 1)).to.equal("#0F0801");
  });

  it("throws on values out of range", function () {
    expect(() => rgbToHex(256, 0, 0)).to.throw();
    expect(() => rgbToHex(-1, 0, 0)).to.throw();
  });

  it("throws on non-numeric input", function () {
    expect(() => rgbToHex("a", 0, 0)).to.throw();
    expect(() => rgbToHex(null, 0, 0)).to.throw();
  });

});