import client from "./client";

export const check = () => client.get('/api/myinfo/list');
