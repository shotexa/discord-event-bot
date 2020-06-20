import { Client, Message } from 'discord.js';
import config from '@src/config';
import messages from '@src/messages';

const bot = new Client();

bot.on('message', async (msg: Message) => {
    console.info(`Got message from ${msg.author}: ${msg.content}`);
    if (messages[msg.content]) {
        const handler = messages[msg.content];
        const response = await handler(msg);
        msg.reply(response);
    }
});

bot.login(config.botToken);
