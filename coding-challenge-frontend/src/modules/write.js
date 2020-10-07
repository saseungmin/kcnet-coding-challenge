import { createAction, handleActions } from 'redux-actions';

import { takeLatest } from 'redux-saga/effects';

import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as applyAPI from '../lib/api/apply';

const CHANGE_FIELD = 'apply/CHANGE_FIELD';
const INITIALIZE = 'apply/INITIALIZE';
const SET_ORIGINAL_APPLY = 'apply/SET_ORIGINAL_APPLY';
const [WRITE_APPLY, WRITE_APPLY_SUCCESS, WRITE_APPLY_FAILURE] = createRequestActionTypes(
  'apply/WRITE_APPLY',
);
const [UPDATE_APPLY, UPDATE_APPLY_SUCCESS, UPDATE_APPLY_FAILURE] = createRequestActionTypes(
  'apply/UPDATE_APPLY',
);

export const setOriginalApply = createAction(SET_ORIGINAL_APPLY, (apply) => apply);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initialize = createAction(INITIALIZE);

export const writeApply = createAction(
  WRITE_APPLY,
  ({
    applystartday, applyendday, teststartday, testendday, title, content, langs,
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

export const updateApply = createAction(
  UPDATE_APPLY,
  ({
    id, applystartday, applyendday, teststartday, testendday, title, content, langs,
  }) => ({
    id,
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
const updateApplySaga = createRequestSaga(UPDATE_APPLY, applyAPI.updateApply);

export function* writeSaga() {
  yield takeLatest(WRITE_APPLY, writeApplySaga);
  yield takeLatest(UPDATE_APPLY, updateApplySaga);
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
  originalApplyId: null,
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
    [SET_ORIGINAL_APPLY]: (state, { payload: apply }) => ({
      ...state,
      applystartday: apply.applystartday,
      applyendday: apply.applyendday,
      teststartday: apply.teststartday,
      testendday: apply.testendday,
      title: apply.title,
      content: apply.content,
      langs: apply.langs,
      originalApplyId: apply._id,
    }),
    [UPDATE_APPLY_SUCCESS]: (state, { payload: apply }) => ({
      ...state,
      apply,
    }),
    [UPDATE_APPLY_FAILURE]: (state, { payload: applyError }) => ({
      ...state,
      applyError,
    }),
    [INITIALIZE]: () => initialState,
  },
  initialState,
);

export default write;
