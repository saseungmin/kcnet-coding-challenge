import createRequestSaga, { createRequestActionTypes } from 'src/lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import * as myInfoAPI from '../lib/api/myInfo';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';

const [
  MYINFO_APPLY_LIST,
  MYINFO_APPLY_LIST_SUCCESS,
  MYINFO_APPLY_LIST_FAILURE,
] = createRequestActionTypes('myInfo/MYINFO_APPLY_LIST');
const CHANGE_USER = 'myInfo/CHANGE_USER';
const UNLOAD_MYINFO = 'myInfo/UNLOAD_MYINFO';

export const changeUser = createAction(CHANGE_USER, ({ key, value }) => ({
  key,
  value,
}));
export const myInfoApplyList = createAction(MYINFO_APPLY_LIST, ({ page }) => ({ page }));
export const unloadMyInfo = createAction(UNLOAD_MYINFO);

const myInfoApplyListSaga = createRequestSaga(MYINFO_APPLY_LIST, myInfoAPI.myApplyList);

export function* myInfoSaga() {
  yield takeLatest(MYINFO_APPLY_LIST, myInfoApplyListSaga);
}

const initialState = {
  myInfoList: null,
  user:{
    username: '',
    apikey: '',
  },
  error: null,
  receiveLastPage: 1,
};

const myInfo = handleActions(
  {
    [MYINFO_APPLY_LIST_SUCCESS]: (state, { payload: myInfoList, meta: response }) => ({
      ...state,
      myInfoList,
      receiveLastPage: parseInt(response.headers['my-info-receive-last-page'], 10),
    }),
    [MYINFO_APPLY_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [CHANGE_USER]: (state, { payload: { key, value } }) =>
    produce(state, (draft) => {
      draft['user'][key] = value;
    }),
    [UNLOAD_MYINFO]: () => initialState,
  },
  initialState,
);

export default myInfo;
