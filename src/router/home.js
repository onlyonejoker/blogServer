const express = require("express");
const fs = require("fs");
const path = require("path");
const home = express.Router();

home.get("/", (err, reslove) => {
  let home = fs.readFileSync(
    path.resolve(__dirname, "../../dist/index.html"),
    "utf-8"
  );
  reslove.send(home);
});
module.exports = home;
