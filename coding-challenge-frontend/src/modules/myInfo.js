import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';

import * as myInfoAPI from '../lib/api/myInfo';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';

const CHANGE_USER = 'myInfo/CHANGE_USER';
const CHANGE_PASSWORD = 'myInfo/CHANGE_PASSWORD';
const UNLOAD_MYINFO = 'myInfo/UNLOAD_MYINFO';
const SET_ORIGINAL_USER = 'myInfo/SET_ORIGINAL_USER';
const CHANGE_PASSWORD_FORM = 'myInfo/CHANGE_PASSWORD_FORM';

const [UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE] = createRequestActionTypes(
  'myInfo/UPDATE_USER',
);
const [PASSWORD_CHECK, PASSWORD_CHECK_SUCCESS, PASSWORD_CHECK_FAILURE] = createRequestActionTypes(
  'myInfo/PASSWORD_CHECK',
);
const [
  MYINFO_APPLY_LIST,
  MYINFO_APPLY_LIST_SUCCESS,
  MYINFO_APPLY_LIST_FAILURE,
] = createRequestActionTypes('myInfo/MYINFO_APPLY_LIST');
const [
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
] = createRequestActionTypes('myInfo/UPDATE_PASSWORD');

export const updateUser = createAction(UPDATE_USER, (user) => user);
export const changeUser = createAction(CHANGE_USER, ({ key, value }) => ({
  key,
  value,
}));
export const changePasswordForm = createAction(CHANGE_PASSWORD_FORM, (password) => password);
export const changePassword = createAction(CHANGE_PASSWORD, (password) => password);
export const setOriginalUser = createAction(SET_ORIGINAL_USER, (user) => user);
export const myInfoApplyList = createAction(MYINFO_APPLY_LIST, ({ page }) => ({ page }));
export const unloadMyInfo = createAction(UNLOAD_MYINFO);
export const passwordCheck = createAction(PASSWORD_CHECK, ({ userid, password }) => ({
  userid,
  password,
}));
export const updatePassword = createAction(UPDATE_PASSWORD, ({ userid, password }) => ({
  userid,
  password,
}));

const myInfoApplyListSaga = createRequestSaga(MYINFO_APPLY_LIST, myInfoAPI.myApplyList);
const updateUserSaga = createRequestSaga(UPDATE_USER, myInfoAPI.updateUser);
const passwordCheckSaga = createRequestSaga(PASSWORD_CHECK, myInfoAPI.passwordCheck);
const updatePasswordSaga = createRequestSaga(UPDATE_PASSWORD, myInfoAPI.updatePassword);

export function* myInfoSaga() {
  yield takeLatest(MYINFO_APPLY_LIST, myInfoApplyListSaga);
  yield takeLatest(UPDATE_USER, updateUserSaga);
  yield takeLatest(PASSWORD_CHECK, passwordCheckSaga);
  yield takeLatest(UPDATE_PASSWORD, updatePasswordSaga);
}

const initialState = {
  myInfoList: null,
  originalUser: null,
  error: null,
  userError: null,
  auth: null,
  authError: null,
  password: null,
  passwordForm: {
    password: '',
    passwordConfirm: '',
  },
  passwordAuth: null,
  passwordAuthError: null,
  receiveLastPage: 1,
};

const myInfo = handleActions(
  {
    [UPDATE_PASSWORD_SUCCESS]: (state, { payload: passwordAuth }) => ({
      ...state,
      auth: null,
      passwordForm: {
        password: '',
        passwordConfirm: '',
      },
      passwordAuthError: null,
      passwordAuth,
    }),
    [UPDATE_PASSWORD_FAILURE]: (state, { payload: passwordAuthError }) => ({
      ...state,
      auth: null,
      passwordForm: {
        password: '',
        passwordConfirm: '',
      },
      passwordAuth: null,
      passwordAuthError,
    }),
    [MYINFO_APPLY_LIST_SUCCESS]: (state, { payload: myInfoList, meta: response }) => ({
      ...state,
      myInfoList,
      receiveLastPage: parseInt(response.headers['my-info-receive-last-page'], 10),
    }),
    [MYINFO_APPLY_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [PASSWORD_CHECK_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [PASSWORD_CHECK_FAILURE]: (state, { payload: authError }) => ({
      ...state,
      auth: null,
      authError,
    }),
    [CHANGE_PASSWORD]: (state, { payload: password }) => ({
      ...state,
      password,
    }),
    [CHANGE_USER]: (state, { payload: { key, value } }) => produce(state, (draft) => {
      const draftState = draft;
      draftState.originalUser[key] = value;
    }),
    [CHANGE_PASSWORD_FORM]: (state, { payload: { key, value } }) => produce(state, (draft) => {
      const draftState = draft;
      draftState.passwordForm[key] = value;
    }),
    [SET_ORIGINAL_USER]: (state, { payload: user }) => ({
      ...state,
      originalUser: user,
    }),
    [UPDATE_USER_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      originalUser: user,
    }),
    [UPDATE_USER_FAILURE]: (state, { payload: userError }) => ({
      ...state,
      userError,
    }),
    [UNLOAD_MYINFO]: () => initialState,
  },
  initialState,
);

export default myInfo;
