import client from './client';

export const login = ({ userid, password }) =>
  client.post('/api/auth/login', { userid, password });

export const register = ({ userid, password, username, userstatus }) =>
  client.post('/api/auth/register', { userid, password, username, userstatus });

export const check = () => client.get('/api/auth/check');