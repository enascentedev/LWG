const express = require("express");
const {
    scrapeAndReturnDevocionaisController,
    getDevocionaisFromFileController,
} = require("../controladores/artigos");

const router = express.Router();

// Rota para iniciar o web scraping e retornar os devocionais
router.post("/", scrapeAndReturnDevocionaisController);

// Rota para retornar os devocionais do arquivo JSON
router.get("/devocionais", getDevocionaisFromFileController);

module.exports = router;
