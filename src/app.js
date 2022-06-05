const express = require("express");

const app = express();

const server = app.listen("3000", "127.0.0.1", () => {
  let { address, port } = server.address();
  console.log("服务器地址:http://" + address + ":" + port);
});
