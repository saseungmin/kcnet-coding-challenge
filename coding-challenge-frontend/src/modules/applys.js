import createRequestSaga, { createRequestActionTypes } from 'src/lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import * as applyAPI from '../lib/api/apply';
import { takeLatest } from 'redux-saga/effects';

const [LIST_APPLYS, LIST_APPLYS_SUCCESS, LIST_APPLYS_FAILURE] = createRequestActionTypes(
  'applys/LIST_APPLYS',
);

export const listApplys = createAction(LIST_APPLYS, ({ page, langs }) => ({ page, langs }));

const listApplysSaga = createRequestSaga(LIST_APPLYS, applyAPI.listApplys);
export function* applysSaga() {
  yield takeLatest(LIST_APPLYS, listApplysSaga);
}

const initialState = {
  applys: null,
  error: null,
};

const applys = handleActions(
  {
    [LIST_APPLYS_SUCCESS]: (state, { payload: applys }) => ({
      ...state,
      applys,
    }),
    [LIST_APPLYS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default applys;
