const {
	getDevocionais,
	readDevocionaisFromFile,
} = require("../servicos/artigos");

// Controlador para buscar os devocionais (web scraping)
async function scrapeAndReturnDevocionaisController(req, res) {
	try {
			const devocionais = await getDevocionais();
			res.json(devocionais);
	} catch (error) {
			res.status(500).json({ message: error.message });
	}
}

// Controlador para retornar os devocionais do arquivo JSON
async function getDevocionaisFromFileController(req, res) {
	try {
			const devocionais = await readDevocionaisFromFile();
			res.json(devocionais);
	} catch (error) {
			res.status(500).json({ message: error.message });
	}
}

module.exports = {
	scrapeAndReturnDevocionaisController,
	getDevocionaisFromFileController,
};
