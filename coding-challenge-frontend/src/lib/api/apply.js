import client from './client';

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

