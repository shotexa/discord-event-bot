import { Message } from 'discord.js';
import hello from './hello';

type messageMap = {
    [key: string]: (msg: Message) => Promise<string>;
};

const messages: messageMap = {
    hello,
};
export default messages;
