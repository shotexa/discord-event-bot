import { Message } from 'discord.js';

export default async (msg: Message) => {
    return 'response for ' + msg.content;
};
