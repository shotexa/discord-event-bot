import { Message } from 'discord.js';
import { extractMessageArgs } from '../utils';

export default async (msg: Message) => {
    const args = extractMessageArgs(msg.content);
    console.log(`Got args for create command, ${JSON.stringify(args, null, 2)}`);
    // create event in db;
    return 'event created';
};
