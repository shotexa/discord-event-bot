import config from './config';
import { splitEvery } from 'ramda';

export const extractMessageCommand = (message: string): string => message.split(' ')[1];
export const extractMessageArgs = (message: string) => {
    const args = message.split(' ').slice(2);
    return splitEvery(2, args).reduce((acc, v) => {
        acc[v[0].slice(1)] = v[1];
        return acc;
    }, {} as { [key: string]: string });
};
export const isMessageForBot = (message: string) => message.startsWith(config.botMessagePrefix);
