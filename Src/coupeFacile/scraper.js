// src/coupeFacile/scraper.js
const puppeteer = require('puppeteer');

const captureMatches = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://copafacil.com/-j5prd'); // URL de Coupe Facile
    const element = await page.$('SELECTEUR_DES_MATCHS'); // Remplacer par le sélecteur réel
    await element.screenshot({ path: 'matches.png' });
    await browser.close();
    return 'matches.png'; // Retourner le chemin de l'image
};

const captureRanking = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://copafacil.com/-j5prd'); // URL de Coupe Facile
    const element = await page.$('SELECTEUR_DU_CLASSEMENT'); // Remplacer par le sélecteur réel
    await element.screenshot({ path: 'ranking.png' });
    await browser.close();
    return 'ranking.png'; // Retourner le chemin de l'image
};

const captureNextMatches = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://copafacil.com/-j5prd'); // URL de Coupe Facile
    const element = await page.$('SELECTEUR_DES_PROCHAINS_MATCHS'); // Remplacer par le sélecteur réel
    await element.screenshot({ path: 'next_matches.png' });
    await browser.close();
    return 'next_matches.png'; // Retourner le chemin de l'image
};

module.exports = { captureMatches, captureRanking, captureNextMatches };
