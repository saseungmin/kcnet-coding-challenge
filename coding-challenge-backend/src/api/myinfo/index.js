import Router from "koa-router";
import checkLoggedIn from "../../lib/checkLoggedIn";
import jwtMiddleware from "../../lib/jwtMiddleware";
import * as myInfoCtrl from "./myInfo.ctrl";

const myInfo = new Router();
myInfo.get("/list", checkLoggedIn, myInfoCtrl.myApplyList);

myInfo.patch('/:id', checkLoggedIn , myInfoCtrl.updateUser);
export default myInfo;
