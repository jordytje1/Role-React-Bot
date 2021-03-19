const CONFIG = require('./config.example');

if (client.login(process.env.BOT_TOKEN) !== '') 
	throw new Error("Please remove the Discord bot token from 'botToken' in the config.js file.");
if (CONFIG.yourID !== '')
	throw new Error("Please remove the user ID from 'yourID' in the config.js file.");
