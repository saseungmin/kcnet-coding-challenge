import client from './client';
import qs from 'qs';

export const writeApply = ({
  applystartday,
  applyendday,
  teststartday,
  testendday,
  title,
  content,
  langs,
}) =>
  client.post('/api/apply', {
    applystartday,
    applyendday,
    teststartday,
    testendday,
    title,
    content,
    langs,
  });

export const readApply = (id) => client.get(`/api/apply/${id}`);

export const listApplys = ({ page, lang }) => {
  const queryString = qs.stringify({
    page,
    lang,
  });
  return client.get(`/api/apply?${queryString}`);
};

export const updateApply = ({
  id,
  applystartday,
  applyendday,
  teststartday,
  testendday,
  title,
  content,
  langs,
}) =>
  client.patch(`/api/apply/${id}`, {
    applystartday,
    applyendday,
    teststartday,
    testendday,
    title,
    content,
    langs,
  });

export const removeApply = (id) => client.delete(`/api/apply/${id}`);