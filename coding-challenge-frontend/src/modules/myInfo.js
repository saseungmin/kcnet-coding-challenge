import createRequestSaga, { createRequestActionTypes } from 'src/lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import * as myInfoAPI from '../lib/api/myInfo';
import { takeLatest } from 'redux-saga/effects';

const [
  MYINFO_APPLY_LIST,
  MYINFO_APPLY_LIST_SUCCESS,
  MYINFO_APPLY_LIST_FAILURE,
] = createRequestActionTypes('myInfo/MYINFO_APPLY_LIST');

const UNLOAD_MYINFO = 'myInfo/UNLOAD_MYINFO';

export const myInfoApplyList = createAction(MYINFO_APPLY_LIST);
export const unloadMyInfo = createAction(UNLOAD_MYINFO);

const myInfoApplyListSaga = createRequestSaga(MYINFO_APPLY_LIST, myInfoAPI.myApplyList);

export function* myInfoSaga() {
  yield takeLatest(MYINFO_APPLY_LIST, myInfoApplyListSaga);
}

const initialState = {
  myInfoList: null,
  error: null,
};

const myInfo = handleActions(
  {
    [MYINFO_APPLY_LIST_SUCCESS]: (state, { payload: myInfoList }) => ({
      ...state,
      myInfoList,
    }),
    [MYINFO_APPLY_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_MYINFO]: () => initialState,
  },
  initialState,
);

export default myInfo;
