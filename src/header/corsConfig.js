module.exports = function (app) {
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
};
