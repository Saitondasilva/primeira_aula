var http = require('http');
http.createServer(function (req, res)
{
    res.end("ola ");
}).listen(8082);
console.log("o Servidor rodando !");