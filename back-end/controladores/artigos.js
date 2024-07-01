const {
	getTodosArtigos,
	getArtigoPorId,
	getDevocionais,
} = require("../servicos/artigos");

// Controlador para buscar todos os artigos
async function getTodosArtigosController(req, res) {
	try {
			const artigos = await getTodosArtigos();
			res.json(artigos);
	} catch (error) {
			res.status(500).json({ message: error.message });
	}
}

// Controlador para buscar um artigo por ID
async function getArtigoPorIdController(req, res) {
	const { id } = req.params;
	try {
			const artigo = await getArtigoPorId(id);
			res.json(artigo);
	} catch (error) {
			res.status(500).json({ message: error.message });
	}
}

// Controlador para buscar os devocionais (web scraping)
async function scrapeAndReturnDevocionaisController(req, res) {
	try {
			const devocionais = await getDevocionais();
			res.json(devocionais);
	} catch (error) {
			res.status(500).json({ message: error.message });
	}
}

module.exports = {
	getTodosArtigosController,
	getArtigoPorIdController,
	scrapeAndReturnDevocionaisController,
};
