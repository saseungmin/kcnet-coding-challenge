import Router from "koa-router";
import auth from './auth/index';
import applys from "./apply/index";

const api = new Router();

api.use('/apply',applys.routes());
api.use('/auth', auth.routes());

export default api;