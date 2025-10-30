require("colors");                 /// Importa o módulo colors para colorir textos no console

var http = require("http");        /// Importa o módulo HTTP do Node.js
var express = require("express");  /// Importa o framework Express

var app = express();               ////Cria a instância do Express
app.use(express.static("Portfolio")); ///// Serve arquivos estáticos da pasta 'public'

var server = http.createServer(app);  //// Cria o servidor HTTP usando o Express
server.listen(80);                  // Faz o servidor escutar na porta 3000

console.log("Hello Word!...".rainbow);  //// Mensagem colorida no console
