require("dotenv").config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api  from "./api/index";

const { PORT, MONGO_URI } = process.env;


mongoose
.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false }) // useFindAndModify => Deprecation Warnings
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error(error);
});

const app = new Koa();
const router = new Router();

router.use("/api", api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`${port}에서 실행중..`);
});
