require("colors");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // serve todos os arquivos
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// banco de usuários (temporário)
let usuarios = [];

// rota padrão -> página de projetos
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// páginas HTML fixas
app.get("/cadastrar", (req, res) => {
  res.sendFile(path.join(__dirname, "cadastro.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "Login.html"));
});

// POST cadastro
app.post("/cadastrar", (req, res) => {
  const { usuario, senha } = req.body;
  usuarios.push({ usuario, senha });
  console.log("Usuário cadastrado:", usuario);
  res.render("resposta", { mensagem: "Cadastro realizado com sucesso!", cor: "green" });
});

// POST login
app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;
  const user = usuarios.find(u => u.usuario === usuario && u.senha === senha);

  if (user) {
    res.render("resposta", { mensagem: `Bem-vindo(a), ${usuario}!`, cor: "green" });
  } else {
    res.render("resposta", { mensagem: "Usuário ou senha incorretos.", cor: "red" });
  }
});

const server = http.createServer(app);
server.listen(80, () => {
  console.log("Servidor rodando na porta 80!".cyan);
});
////////////////////////////////////////////////////////////////////////
const fs = require("fs");
const DB_PATH = path.join(__dirname, "db.json");

// Funções de banco de dados
function lerBanco() {
  const data = fs.readFileSync(DB_PATH, "utf8");
  return JSON.parse(data);
}

function salvarBanco(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// Rota principal -> página de projetos
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "projects.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "blog.html"));
});

// Rota para exibir o formulário de novo post
app.get("/cadastrar_post", (req, res) => {
  res.sendFile(path.join(__dirname, "cadastrar_post.html"));
});

// Rota para salvar um novo post
app.post("/salvar_post", (req, res) => {
  const { titulo, resumo, conteudo } = req.body;
  const db = lerBanco();
  db.posts.push({ titulo, resumo, conteudo });
  salvarBanco(db);

  console.log("Novo post salvo:", titulo);
  res.redirect("/blog");
});
