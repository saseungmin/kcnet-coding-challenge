import Router from "koa-router";
import * as applyCtrl from "./apply.ctrl";

const applys = new Router();

applys.post("/", applyCtrl.write);
applys.get('/', applyCtrl.list);
applys.get('/:id', applyCtrl.read);

export default applys;
