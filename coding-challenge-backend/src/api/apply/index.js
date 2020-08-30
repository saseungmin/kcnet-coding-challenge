import Router from "koa-router";
import * as applyCtrl from "./apply.ctrl";

const applys = new Router();

applys.post("/", applyCtrl.write);
applys.get('/', applyCtrl.list);
applys.post('/img',applyCtrl.upload.single('img'),async(ctx) => {
    ctx.status = 200;
    ctx.body = {data:{link: `/img/${ctx.request.file.filename}`}};
},(error,ctx) => {
    ctx.status = 400;
    ctx.body = error.message;
})

const apply = new Router();
apply.get('/', applyCtrl.read);
apply.patch('/',applyCtrl.update);
apply.delete('/', applyCtrl.remove);
applys.use('/:id', applyCtrl.getApplyId, apply.routes());

export default applys;
