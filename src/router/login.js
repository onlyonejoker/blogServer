const express = require("express");
const login = express.Router();

login.get("/login", (err, reslove) => {
  reslove.send({ status: "200", message: "ok" });
});
module.exports = login;
