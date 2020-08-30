require("dotenv").config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api  from "./api/index";
import jwtMiddleware from './lib/jwtMiddleware';
import serve from 'koa-static';
import mount from 'koa-mount';

const { PORT, MONGO_URI } = process.env;

mongoose
.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false }) // useFindAndModify => Deprecation Warnings
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error(error);
});

mongoose.set('useCreateIndex', true);

mongoose.connection.on('disconnected', () => {
  console.error('mongodb 연결이 끊겼습니다.');
})

const app = new Koa();
const router = new Router();

router.use("/api", api.routes());

console.log(__dirname);
app.use(bodyParser());
app.use(jwtMiddleware);
app.use(mount('/img',serve(`${__dirname}/uploads`)));

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`${port}에서 실행중..`);
});
