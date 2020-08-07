import client from './client';

export const login = ({ userid, password }) =>
  client.get('/users', { userid, password });

export const register = ({ userid, password, username, userstatus }) =>
  client.post('/users', { userid, password, username, userstatus });

export const check = () => client.get('/api/auth/check');