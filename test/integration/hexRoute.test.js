// hexRoute.test.js
import request from "supertest";
import { expect } from "chai";
import { app } from "../../src/app.js";

describe("hex-to-rgb route (integration)", function () {

  it("GET /hex-to-rgb with valid hex returns HTML containing RGB", async function () {
    const res = await request(app).get("/hex-to-rgb?hex=ff00aa");

    expect(res.status).to.equal(200);
    expect(res.text).to.include("HEX to RGB Result");
    expect(res.text).to.include("#FF00AA");
    expect(res.text).to.include("255, 0, 170");
  });

  it("GET /hex-to-rgb with invalid hex returns 400", async function () {
    const res = await request(app).get("/hex-to-rgb?hex=not-a-hex");

    expect(res.status).to.equal(400);
    expect(res.text).to.include("Invalid HEX value");
  });

});