// rgbRoute.test.js
import request from "supertest";
import { expect } from "chai";
import { app } from "../../src/app.js";

describe("rgb-to-hex route (integration)", function () {

  it("GET /rgb-to-hex with valid rgb returns HTML containing HEX", async function () {
    const res = await request(app).get("/rgb-to-hex?r=255&g=0&b=170");

    expect(res.status).to.equal(200);
    expect(res.text).to.include("RGB to HEX Result");
    expect(res.text).to.include("#FF00AA");
    expect(res.text).to.include("255, 0, 170");
  });

  it("GET /rgb-to-hex with invalid rgb returns 400", async function () {
    const res = await request(app).get("/rgb-to-hex?r=999&g=0&b=0");

    expect(res.status).to.equal(400);
    expect(res.text).to.include("Invalid RGB values");
  });

});