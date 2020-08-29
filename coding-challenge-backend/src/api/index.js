import Router from "koa-router";
import auth from './auth/index';
import applys from "./apply/index";
import rank from "./rank/index";
import myinfo from './myinfo/index';

const api = new Router();

api.use('/rank', rank.routes());
api.use('/apply',applys.routes());
api.use('/auth', auth.routes());
api.use('/myinfo', myinfo.routes());

export default api;