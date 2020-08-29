import client from "./client";

export const myApplyList = () => client.get('/api/myinfo/list');
