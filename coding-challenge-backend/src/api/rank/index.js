import Router from "koa-router";
import * as rankCtrl from "./rank.ctrl";
import checkLoggedIn from "../../lib/checkLoggedIn";

const rank = new Router();
rank.post("/", checkLoggedIn, rankCtrl.receive);

const receive = new Router();
receive.get("/", rankCtrl.getReceiveUser);
receive.delete("/", rankCtrl.cancelReceive);
rank.use("/:id", checkLoggedIn, receive.routes());

export default rank;
