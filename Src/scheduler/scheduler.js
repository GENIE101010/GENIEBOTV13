// src/scheduler/scheduler.js
const cron = require('node-cron');
const scraper = require('../coupeFacile/scraper');

const start = () => {
    cron.schedule('0 * * * *', async () => {
        // Logique pour vérifier les matchs non joués et pinguer les joueurs
        const matchesScreenshot = await scraper.captureMatches();
        // Logique pour envoyer le screenshot aux joueurs
    });
};

module.exports = { start };
