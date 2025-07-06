// src/whatsapp/index.js
const { Client } = require('whatsapp-web.js');
const commands = require('./commands');

const client = new Client();

client.on('qr', (qr) => {
    console.log('QR Code reçu :', qr);
});

client.on('ready', () => {
    console.log('Client prêt !');
});

client.on('message', async (message) => {
    await commands.handleCommand(message);
});

const initialize = async () => {
    await client.initialize();
};

module.exports = { initialize };
  
