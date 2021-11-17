"use strict";
// import chai from "chai";
// import Auth from "../dist/index";
var expect = require("chai").expect;
var Auth = require("../dist/index.js");

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

describe("setOption Test", () => {
  it("default option", () => {
    const result = Auth.getOptions();
    expect(result.brand).to.equal("");
  });
  it("initialize option", () => {
    Auth.initialize({ brand: "test" });
    const result = Auth.getOptions();
    expect(result.brand).to.equal("test");
  });
});
