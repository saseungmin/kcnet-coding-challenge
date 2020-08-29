import client from "./client";
import qs from 'qs';

export const myApplyList = ({ page }) => {
    const queryString = qs.stringify({
        page,
      });
      return client.get(`/api/myinfo/list?${queryString}`);
};
    
