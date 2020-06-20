import hello from '@src/messages/hello';
import { Message } from 'discord.js';

type messageMap = {
    [key: string]: (msg: Message) => Promise<string>;
};

const messages: messageMap = {
    hello,
};
export default messages;
