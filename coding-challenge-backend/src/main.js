import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import serve from 'koa-static';
import mount from 'koa-mount';
import api from './api/index';
import jwtMiddleware from './lib/jwtMiddleware';

require('dotenv').config();

const { PORT, MONGO_URI } = process.env;

mongoose
// useFindAndModify => Deprecation Warnings
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error(error);
  });

mongoose.set('useCreateIndex', true);

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);
app.use(mount('/img', serve('uploads')));

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`${port}에서 실행중..`);
});
