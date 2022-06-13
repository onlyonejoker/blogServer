const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/blog");

const Schema = mongoose.Schema;

const 多啦A梦Schema = new Schema({ name: String, role: String }); //创建模型
const 多啦A梦Model = mongoose.model("多啦A梦", 多啦A梦Schema); //创建模型实例

const 多啦A梦 = new 多啦A梦Model({ name: "多啦A梦", role: "也比大熊" });

多啦A梦.save().then(() => console.log("123"));

//配置跨域;
app.all("*", (req, res, next) => {
  //设置允许跨域的域名，*代表允许任意域名跨域
  //第一次配置成功后，如果取消配置，客户端依然有可能不会跨域，这是缓存引起的，浏览器ctrl+F5清除缓存就跨域了
  res.header("Access-Control-Allow-Origin", ["http://localhost:8080"]);
  //允许的header类型
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization,Content-Type,Origin, X-Requested-With"
  );
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == "options") {
    res.send(200); //让options尝试请求快速结束
  } else {
    next();
  }
});

//注册路由
const api = require("./src/router/index");
for (const key in api) {
  app.use(api[key]);
}

app.use(express.static(path.join(__dirname, "./dist"))); //必须要有这玩意，才能加载静态资源
const server = app.listen("3000", () => {
  let { address, port } = server.address();
  console.log("服务器地址:http://localhost" + ":" + port);
});
