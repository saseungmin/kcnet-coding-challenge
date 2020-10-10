import Router from 'koa-router';
import checkLoggedIn from '../../lib/checkLoggedIn';
import * as myInfoCtrl from './myInfo.ctrl';

const myInfo = new Router();
myInfo.get('/list', checkLoggedIn, myInfoCtrl.myApplyList);
myInfo.post('/', checkLoggedIn, myInfoCtrl.passwordCheck);
myInfo.patch('/:id', checkLoggedIn, myInfoCtrl.updateUser);
myInfo.patch('/', checkLoggedIn, myInfoCtrl.updatePassword);
export default myInfo;
