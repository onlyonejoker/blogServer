const express = require("express");
const express = require("../../../../5、前端编码/");
const fs = require("fs");
const router = express.Router();
router.get("/", "utf-8", () => {
  fs.readFile("", (err, res) => {});
});
