import { Client, Message } from 'discord.js';
import config from './config';
import messages from './messages';

const bot = new Client();

bot.on('message', async (msg: Message) => {
    console.info(`Got message from ${msg.author}: ${msg.content}`);
    if (messages[msg.content]) {
        const handler = messages[msg.content];
        try {
            const response = await handler(msg);
            msg.reply(response);
        } catch (err) {
            console.error(`Error while responding to message - ${msg.content}`);
        }
    }
});

bot.login(config.botToken);
