// src/ocr/ocrService.js
const Tesseract = require('tesseract.js');

const readScore = async (imagePath) => {
    const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');
    const extractedData = parseScore(text);
    return extractedData; // { player1, player2, score }
};

const parseScore = (text) => {
    const regex = /(\w+)\s*-\s*(\w+)\s*(\d+)\s*-\s*(\d+)/;
    const match = text.match(regex);
    if (match) {
        return {
            player1: match[1],
            player2: match[2],
            score: `${match[3]}-${match[4]}`
        };
    }
    throw new Error('Score non reconnu');
};

module.exports = { readScore };
