require("colors");                 /// Importa o módulo colors para colorir textos no console

var http = require("http");        /// Importa o módulo HTTP do Node.js
var express = require("express");  /// Importa o framework Express

var app = express();               ////Cria a instância do Express
app.use(express.static("Portfolio")); ///// Serve arquivos estáticos da pasta 'public'

var server = http.createServer(app);  //// Cria o servidor HTTP usando o Express
server.listen(80);                  // Faz o servidor escutar na porta 3000

console.log("Hello Word!...".rainbow);  //// Mensagem colorida no console
/////////////////////////////////////////////////////////////////////////////////////
const express = require("express");
const path = require("path");
const app = express();
const PORT = 80;

// Configuração
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Rota padrão → Projects.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rota do cadastro
app.get("/cadastra", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Cadastro.html"));
});

// Rota do login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Login.html"));
});

// Recebe o POST do login
app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;
  let status = "Login falhou";

  if (usuario === "admin" && senha === "1234") {
    status = "Login bem-sucedido";
  }

  res.render("resposta", { usuario, status });
});

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

