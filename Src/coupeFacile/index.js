// src/coupeFacile/index.js
const scraper = require('./scraper');

const captureAllData = async () => {
    try {
        const matches = await scraper.captureMatches();
        const ranking = await scraper.captureRanking();
        const nextMatches = await scraper.captureNextMatches();
        
        return {
            matches,
            ranking,
            nextMatches
        };
    } catch (error) {
        console.error('Erreur lors de la capture des données de Coupe Facile:', error);
        throw error;
    }
};

module.exports = { captureAllData };
