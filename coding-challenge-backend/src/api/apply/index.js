import Router from "koa-router";
import * as applyCtrl from "./apply.ctrl";

const applys = new Router();

applys.post("/", applyCtrl.write);
applys.get('/', applyCtrl.list);

const apply = new Router();
apply.get('/', applyCtrl.read);
apply.patch('/',applyCtrl.update);
apply.delete('/', applyCtrl.remove);
applys.use('/:id', applyCtrl.checkObjectId, apply.routes());

export default applys;
