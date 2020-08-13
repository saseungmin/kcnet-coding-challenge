import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from 'src/lib/createRequestSaga';
import * as applyAPI from '../lib/api/apply';
import { takeLatest } from 'redux-saga/effects';

const CHANGE_FIELD = 'write/CHANGE_FIELD';
const INITIALIZE = 'write/INITIALIZE';

const [
  WRITE_APPLY,
  WRITE_APPLY_SUCCESS,
  WRITE_APPLY_FAILURE,
] = createRequestActionTypes('write/WRITE');

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initialize = createAction(INITIALIZE);

export const writeApply = createAction(
  WRITE_APPLY,
  ({
    applystartday,
    applyendday,
    teststartday,
    testendday,
    title,
    content,
    langs,
  }) => ({
    applystartday,
    applyendday,
    teststartday,
    testendday,
    title,
    content,
    langs,
  }),
);

const writeApplySaga = createRequestSaga(WRITE_APPLY, applyAPI.writeApply);
export function* writeSaga() {
  yield takeLatest(WRITE_APPLY, writeApplySaga);
}

const initialState = {
  applystartday: '',
  applyendday: '',
  teststartday: '',
  testendday: '',
  title: '',
  content: '',
  langs: [],
  apply: null,
  applyError: null,
};

const write = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_APPLY]: (state) => ({
      ...state,
      apply: null,
      applyError: null,
    }),
    [WRITE_APPLY_SUCCESS]: (state, { payload: apply }) => ({
      ...state,
      apply,
    }),
    [WRITE_APPLY_FAILURE]: (state, { payload: applyError }) => ({
      ...state,
      applyError,
    }),
    [INITIALIZE]: (state) => initialState,
  },
  initialState,
);

export default write;
