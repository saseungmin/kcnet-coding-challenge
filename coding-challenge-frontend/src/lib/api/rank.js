import client from './client';

export const rankReceive = ({applyId}) =>
    client.post('/api/rank', {applyId});

export const receiveUser = id => client.get(`/api/rank/${id}`);

export const cancelReceive = id => client.delete(`/api/rank/${id}`);

export const rankList = id => client.get(`/api/rank/list/${id}`);