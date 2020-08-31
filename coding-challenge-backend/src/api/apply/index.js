import Router from "koa-router";
import * as applyCtrl from "./apply.ctrl";

// TODO: 이미지 삭제 기능 추가하기
const applys = new Router();

applys.post("/", applyCtrl.write);
applys.get('/', applyCtrl.list);
applys.post('/img',applyCtrl.upload.single('img'), applyCtrl.uploadImg);

const apply = new Router();
apply.get('/', applyCtrl.read);
apply.patch('/',applyCtrl.update);
apply.delete('/', applyCtrl.remove);
applys.use('/:id', applyCtrl.getApplyId, apply.routes());

export default applys;
