const express = require("express");
const path = require("path");
const app = express();
const webSocket = require("./src/ws/webSocket");
const cors = require("./src/header/corsConfig");
const api = require("./src/router/index");
const mongoose = require("mongoose");
//mongoose.connect("mongodb://127.0.0.1:27017/blog");
//配置跨域;
cors(app);
//注册路由
api(app);
//加载静态资源
app.use(express.static(path.join(__dirname, "./dist")));
//试试通讯
webSocket();
//启动服务器
const server = app.listen("3000", () => {
  let { address, port } = server.address();
  console.log("服务器地址:http://localhost" + ":" + port);
});
