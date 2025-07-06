// src/coupeFacile/scraper.js
const puppeteer = require('puppeteer');

const captureMatches = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://copafacil.com/-j5prd'); // URL de Coupe Facile
    const element = await page.$('.match-list'); // Sélecteur générique pour la liste des matchs
    await element.screenshot({ path: 'matches.png' });
    await browser.close();
    return 'matches.png'; // Retourner le chemin de l'image
};

const captureRanking = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://copafacil.com/-j5prd'); // URL de Coupe Facile
    const element = await page.$('.ranking-table'); // Sélecteur générique pour le classement
    await element.screenshot({ path: 'ranking.png' });
    await browser.close();
    return 'ranking.png'; // Retourner le chemin de l'image
};

const captureNextMatches = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://copafacil.com/-j5prd'); // URL de Coupe Facile
    const element = await page.$('.next-matches'); // Sélecteur générique pour les prochains matchs
    await element.screenshot({ path: 'next_matches.png' });
    await browser.close();
    return 'next_matches.png'; // Retourner le chemin de l'image
};

module.exports = { captureMatches, captureRanking, captureNextMatches };
