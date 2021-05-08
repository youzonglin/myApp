const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.listen(port, (err, res) => {
  if (err) {
    console.log("服务启动失败")
  } else {
    console.log("服务启动成功，端口:" + port)
  }
})