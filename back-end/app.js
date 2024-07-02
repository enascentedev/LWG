require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const rotaLivro = require("./rotas/livro");
const rotaUsuario = require("./rotas/usuarios");
const rotaArtigos = require("./rotas/artigos");
const asyncErrors = require("express-async-errors");

const corsMiddleware = require("./middlewares/corsMiddleware");

const app = express();
app.use(express.json());

// Aplica o middleware CORS
corsMiddleware(app);

app.use("/livros", rotaLivro);
app.use("/usuarios", rotaUsuario);
app.use("/artigos", rotaArtigos);

const errorMiddleware = require("./middlewares/errorMiddleware");
app.use(errorMiddleware);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Ocorreu um erro interno." });
});

//DB conexão
const conn = require("./db/conn");
conn();

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
