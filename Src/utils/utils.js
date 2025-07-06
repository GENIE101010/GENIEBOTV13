// src/utils/utils.js
const { Client } = require('whatsapp-web.js');

const sendMessage = async (to, message, imagePath = null) => {
    const client = new Client();
    await client.initialize();
    if (imagePath) {
        await client.sendMessage(to, { media: imagePath });
    } else {
        await client.sendMessage(to, message);
    }
};

module.exports = { sendMessage };
