// index.js
require('dotenv').config();
const whatsapp = require('./src/whatsapp');
const scheduler = require('./src/scheduler');

const startBot = async () => {
    await whatsapp.initialize();
    scheduler.start();
};

startBot();
