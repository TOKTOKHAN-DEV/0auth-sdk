"use strict";
// import chai from "chai";
// import Auth from "../dist/index";
var expect = require("chai").expect;
var Auth = require("../dist/index.js");

describe("setOption Test", () => {
  it("default option", () => {
    const result = Auth.getOption();
    expect(result.brand).to.equal("");
  });
  it("initialize option", () => {
    Auth.initialize({ brand: "test" });
    const result = Auth.getOption();
    expect(result.brand).to.equal("test");
  });
});
