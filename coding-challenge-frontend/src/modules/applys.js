import createRequestSaga, { createRequestActionTypes } from 'src/lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import * as applyAPI from '../lib/api/apply';
import { takeLatest } from 'redux-saga/effects';

const [LIST_APPLYS, LIST_APPLYS_SUCCESS, LIST_APPLYS_FAILURE] = createRequestActionTypes(
  'applys/LIST_APPLYS',
);

export const listApplys = createAction(LIST_APPLYS, ({ page, lang }) => ({ page, lang }));

const listApplysSaga = createRequestSaga(LIST_APPLYS, applyAPI.listApplys);
export function* applysSaga() {
  yield takeLatest(LIST_APPLYS, listApplysSaga);
}

const initialState = {
  applys: null,
  error: null,
  lastPage: 1,
};

const applys = handleActions(
  {
    [LIST_APPLYS_SUCCESS]: (state, { payload: applys, meta: response }) => ({
      ...state,
      applys,
      lastPage: parseInt(response.headers['last-page'], 10),
    }),
    [LIST_APPLYS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default applys;
