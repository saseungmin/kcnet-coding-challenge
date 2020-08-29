import Router from "koa-router";
import checkLoggedIn from "../../lib/checkLoggedIn";
import * as myInfoCtrl from "./myInfo.ctrl";



const myInfo = new Router();
myInfo.get('/list', checkLoggedIn, myInfoCtrl.myApplyList);

export default myInfo;
