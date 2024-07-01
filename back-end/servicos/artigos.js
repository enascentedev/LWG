const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// URL da página Tempo de Refletir
const url = 'https://www.wgospel.com/tempoderefletir/';

// Função para capturar e extrair os links dos devocionais
async function fetchDevocionalLinks() {
	try {
		const response = await axios.get(url);
		const html = response.data;
		const $ = cheerio.load(html);
		const links = [];

		$('.post-title a').each((index, element) => {
			const link = $(element).attr('href');
			links.push(link);
		});

		return links;
	} catch (error) {
		console.error('Erro ao capturar os links dos devocionais:', error);
		return [];
	}
}

// Função para capturar o conteúdo da div post-wrapper-content a partir de <p><strong> até o final e remover tags HTML
async function fetchDevocionalContent(link) {
	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(link, { waitUntil: 'networkidle2' });

		const content = await page.evaluate(() => {
			const contentElement = document.querySelector('.post-wrapper-content');
			if (contentElement) {
				const startElement = contentElement.querySelector('p > strong');
				if (startElement) {
					let currentNode = startElement.parentElement;
					let contentHTML = '';
					while (currentNode) {
						contentHTML += currentNode.outerHTML;
						currentNode = currentNode.nextElementSibling;
					}
					return contentHTML;
				}
			}
			return null;
		});

		await browser.close();

		if (content) {
			const $ = cheerio.load(content);
			let textContent = $.text();

			// Expressão regular para remover o trecho indesejado
			const unwantedTextPattern = /-> Apresentação: Amilton Menezes[\s\S]*?Compartilhar/;
			textContent = textContent.replace(unwantedTextPattern, '').trim();

			return textContent;
		}

		return null;
	} catch (error) {
		console.error(`Erro ao capturar o conteúdo do devocional em ${link}:`, error);
		return null;
	}
}

async function getDevocionais() {
	try {
		const links = await fetchDevocionalLinks();
		const devocionais = [];

		for (const link of links) {
			const content = await fetchDevocionalContent(link);
			if (content) {
				devocionais.push({ link, content });
			}
		}

		// Salva os devocionais em um arquivo JSON
		const filePath = path.resolve(__dirname, 'devocionais.json');
		fs.writeFileSync(filePath, JSON.stringify(devocionais, null, 2));
		console.log(`Devocionais salvos em: ${filePath}`);

		return devocionais;
	} catch (error) {
		console.error('Erro ao obter os conteúdos dos devocionais:', error);
		throw new Error('Erro ao obter os conteúdos dos devocionais');
	}
}

// Função para buscar todos os artigos
async function getTodosArtigos() {
	// Implemente a lógica para buscar todos os artigos se necessário
}

// Função para buscar um artigo por ID
async function getArtigoPorId(id) {
	// Implemente a lógica para buscar um artigo por ID se necessário
}

module.exports = {
	getTodosArtigos,
	getArtigoPorId,
	getDevocionais,
};
