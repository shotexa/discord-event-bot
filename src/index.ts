import { Client, Message } from 'discord.js';
import config from './config';
import messages from './messages';
import { extractMessageCommand, isMessageForBot } from './utils';

const bot = new Client();

bot.on('message', async (msg: Message) => {
    console.info(`Got message from ${msg.author.username}: ${msg.content}`);
    const isMessageIntendetForBot = isMessageForBot(msg.content);

    if (isMessageIntendetForBot) {
        const msgCommand = extractMessageCommand(msg.content);
        const isHandlerAvailable = !!msgCommand && messages[msgCommand] !== undefined;
        if (isHandlerAvailable) {
            const handler = messages[msgCommand];
            try {
                const response = await handler(msg);
                msg.reply(response);
            } catch (err) {
                console.error(`Error while responding to message - ${msg.content}`);
                console.error(err);
                msg.reply('Sorry there was a problem');
            }
        } else {
            msg.reply(`Unknown message: ${msgCommand}`);
        }
    }
});

bot.on('ready', () => {
    console.info('The bot is ready');
});

bot.login(config.botToken);
