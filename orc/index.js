// src/ocr/index.js
const ocrService = require('./ocrService');

const readScoreFromImage = async (imagePath) => {
    try {
        const result = await ocrService.readScore(imagePath);
        return result;
    } catch (error) {
        console.error('Erreur lors de la lecture du score à partir de l\'image:', error);
        throw error;
    }
};

module.exports = { readScoreFromImage };
