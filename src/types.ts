import { Message } from 'discord.js';

export type messageHandlers = {
    [key: string]: (msg: Message) => Promise<string>;
};
