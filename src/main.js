const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.resolve(__dirname,"../dist/mysql")))

app.get('/',(req,res) => {
  res.sendFile(path.resolve(__dirname,"../dist/mysql/index.html"))//给客户端响应 'Home Page.' 字符串
})

app.listen(8000, err => {
  if(err) return console.log(err);
  console.log("server start port 8000~");
})