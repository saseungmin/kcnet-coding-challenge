import qs from 'qs';
import client from './client';

export const myApplyList = ({ page }) => {
  const queryString = qs.stringify({
    page,
  });
  return client.get(`/api/myinfo/list?${queryString}`);
};

export const updateUser = ({
  _id, userid, username, apikey,
}) => client.patch(`/api/myinfo/${_id}`, { userid, username, apikey });

export const passwordCheck = ({ userid, password }) => client.post('/api/myinfo', { userid, password });
