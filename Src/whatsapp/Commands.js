// src/whatsapp/commands.js
const ocrService = require('../ocr/ocrService');
const coupeFacile = require('../coupeFacile'); // Importer le module coupeFacile
const { sendMessage } = require('../utils/utils');

const handleCommand = async (message) => {
    if (message.body.startsWith('!score')) {
        const imagePath = message.body.split(' ')[1]; // Exemple d'extraction d'image
        const result = await ocrService.readScore(imagePath);
        await sendMessage(message.from, `Score enregistré : ${result.player1} ${result.score} ${result.player2}`);
    } else if (message.body === '!matchs') {
        const screenshot = await coupeFacile.captureMatches();
        await sendMessage(message.from, 'Voici les matchs du jour :', screenshot);
    } else if (message.body === '!classement') {
        const rankingScreenshot = await coupeFacile.captureRanking();
        await sendMessage(message.from, 'Voici le classement :', rankingScreenshot);
    } else if (message.body === '!prochains') {
        const nextMatchesScreenshot = await coupeFacile.captureNextMatches();
        await sendMessage(message.from, 'Voici les prochains matchs :', nextMatchesScreenshot);
    } else if (message.body === '!help') {
        const helpMessage = `
        Voici les commandes disponibles :
        - !score <image> : Enregistre le score à partir d'une image.
        - !matchs : Envoie les matchs du jour.
        - !classement : Envoie le classement actuel.
        - !prochains : Envoie les prochains matchs.
        - !rappel : Rappelle les joueurs inactifs.
        - !résumé : Envoie un résumé complet.
        `;
        await sendMessage(message.from, helpMessage);
    }
    // Ajouter d'autres commandes ici
};

module.exports = { handleCommand };
