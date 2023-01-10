var fs = require('fs');
var express = require('express');
var app = express();
// inserido pelo Renato
const port =  process.env.PORT || 3000;

var server = app.listen(port, function () {
  var porta = server.address().port;
  console.log("Servidor executando na xxxxporta %s", porta);
});

app.get('/', function (req, res) {
  fs.readFile('ola.html', function(erro, dado) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(dado);
    res.end();
  });
});