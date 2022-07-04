const webSocket = require("ws");
module.exports = function () {
  const ws = new webSocket.Server({ port: "8088" });
  ws.on("connection", (client) => {
    console.log("客户端连接成功。。。");
    //4-3、监听接收消息事件
    client.on("message", (msg) => {
      console.log("接收到来着客户端的信息：" + msg);
      //模拟客户端往服务端发送数据
      client.send("hello websocket！i am app.js");
    });
  });
};
