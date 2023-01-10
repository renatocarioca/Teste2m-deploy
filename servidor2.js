const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('olá Servidor 2')
})

app.listen(process.env.PORT || 3000)