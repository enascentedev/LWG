const express = require("express");
const {
	getTodosArtigosController,
	getArtigoPorIdController,
	scrapeAndReturnDevocionaisController,
} = require("../controladores/artigos");

const router = express.Router();

// Rota para buscar todos os artigos
router.get("/", getTodosArtigosController);

// Rota para buscar um artigo por ID
router.get("/:id", getArtigoPorIdController);

// Rota para iniciar o web scraping e retornar os devocionais
router.post("/", scrapeAndReturnDevocionaisController);

module.exports = router;
