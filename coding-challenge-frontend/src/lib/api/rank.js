import client from './client';

export const rankReceive = ({applyId}) =>
    client.post('/api/rank', {applyId});