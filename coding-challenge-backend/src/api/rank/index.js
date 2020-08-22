import Router from "koa-router";
import * as rankCtrl from "./rank.ctrl";
import checkLoggedIn from "../../lib/checkLoggedIn";

const rank = new Router();

rank.post("/", checkLoggedIn,rankCtrl.receive);

export default rank;
