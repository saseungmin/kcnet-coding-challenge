import Router from "koa-router";
import auth from './auth/index';
import applys from "./apply/index";
import rank from "./rank/index";

const api = new Router();

api.use('/rank', rank.routes());
api.use('/apply',applys.routes());
api.use('/auth', auth.routes());

export default api;