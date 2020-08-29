import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import applys, { applysSaga } from './applys';
import apply, { applySaga } from './apply';
import rank, { rankSaga } from './rank';
import myInfo, { myInfoSaga } from './myInfo';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  applys,
  apply,
  rank,
  myInfo,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    applysSaga(),
    applySaga(),
    rankSaga(),
    myInfoSaga(),
  ]);
}

export default rootReducer;
