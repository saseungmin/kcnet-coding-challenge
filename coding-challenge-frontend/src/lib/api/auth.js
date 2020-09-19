import client from './client';

export const login = ({ userid, password }) => client.post('/api/auth/login', { userid, password });

export const register = ({ userid, password, username, apikey }) =>
  client.post('/api/auth/register', {
    userid,
    password,
    username,
    apikey,
  });

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');
