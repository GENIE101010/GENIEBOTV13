// src/whatsapp/commands.js
const ocrService = require('../ocr/ocrService');
const scraper = require('../coupeFacile/scraper');
const { sendMessage } = require('../utils/utils');

const handleCommand = async (message) => {
    if (message.body.startsWith('!score')) {
        const imagePath = message.body.split(' ')[1]; // Exemple d'extraction d'image
        const result = await ocrService.readScore(imagePath);
        await sendMessage(message.from, `Score enregistré : ${result.player1} ${result.score} ${result.player2}`);
    } else if (message.body === '!matchs') {
        const screenshot = await scraper.captureMatches();
        await sendMessage(message.from, 'Voici les matchs du jour :', screenshot);
    } else if (message.body === '!classement') {
        const rankingScreenshot = await scraper.captureRanking();
        await sendMessage(message.from, 'Voici le classement :', rankingScreenshot);
    } else if (message.body === '!prochains') {
        const nextMatchesScreenshot = await scraper.captureNextMatches();
        await sendMessage(message.from, 'Voici les prochains matchs :', nextMatchesScreenshot);
    } else if (message.body === '!rappel') {
        // Logique pour rappeler les joueurs inactifs
    } else if (message.body === '!résumé') {
        // Logique pour envoyer un résumé complet
    }
    // Ajouter d'autres commandes ici
};

module.exports = { handleCommand };
          
