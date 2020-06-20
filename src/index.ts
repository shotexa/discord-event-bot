import { Client, Message } from 'discord.js';
import config from './config';
import messages from './messages';

const bot = new Client();

bot.on('message', async (msg: Message) => {
    console.info(`Got message from ${msg.author.username}: ${msg.content}`);
    const isMessageIntendetForBot = msg.content.startsWith(config.botMessagePrefix);

    if (isMessageIntendetForBot) {
        const messageContent = msg.content.split(config.botMessagePrefix).pop();
        const isHandlerAvailable = !!messageContent && messages[messageContent] !== undefined;
        if (isHandlerAvailable) {
            const handler = messages[msg.content];
            try {
                const response = await handler(msg);
                msg.reply(response);
            } catch (err) {
                console.error(`Error while responding to message - ${msg.content}`);
                msg.reply('Sorry there was a problem');
            }
        } else {
            msg.reply(`Unknown message: ${messageContent}`);
        }
    }
});

bot.on('ready', () => {
    console.info('The bot is ready');
});

bot.login(config.botToken);
