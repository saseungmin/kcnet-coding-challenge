import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import applys, { applysSaga } from './applys';


const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  applys
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), applysSaga()]);
}

export default rootReducer;
