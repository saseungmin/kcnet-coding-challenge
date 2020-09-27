import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as rankAPI from '../lib/api/rank';

const [RANK_RECEIVE, RANK_RECEIVE_SUCCESS, RANK_RECEIVE_FAILURE] = createRequestActionTypes(
  'rank/RANK_RECEIVE',
);

const [
  GET_RECEIVE_USER,
  GET_RECEIVE_USER_SUCCESS,
  GET_RECEIVE_USER_FAILURE,
] = createRequestActionTypes('rank/GET_RECEIVE_USER');

const [RANK_LIST, RANK_LIST_SUCCESS, RANK_LIST_FAILURE] = createRequestActionTypes(
  'rank/RANK_LIST',
);

const UNLOAD_RANK = 'rank/UNLOAD_RANK';

export const rankReceive = createAction(RANK_RECEIVE, ({ applyId }) => ({ applyId }));
export const unloadRank = createAction(UNLOAD_RANK);
export const getReceiveUser = createAction(GET_RECEIVE_USER, (id) => id);
export const getRankList = createAction(RANK_LIST, (id) => id);

const rankReceiveSaga = createRequestSaga(RANK_RECEIVE, rankAPI.rankReceive);
const receiveUserSaga = createRequestSaga(GET_RECEIVE_USER, rankAPI.receiveUser);
const rankListSaga = createRequestSaga(RANK_LIST, rankAPI.rankList);

export function* rankSaga() {
  yield takeLatest(RANK_RECEIVE, rankReceiveSaga);
  yield takeLatest(GET_RECEIVE_USER, receiveUserSaga);
  yield takeLatest(RANK_LIST, rankListSaga);
}

const initialState = {
  rankList: null,
  rankError: null,
  receiveUser: null,
  receiveError: null,
};

const rank = handleActions(
  {
    [UNLOAD_RANK]: () => initialState,
    [RANK_RECEIVE_SUCCESS]: (state, { payload: receiveUser }) => ({
      ...state,
      receiveUser,
      receiveError: null,
    }),
    [RANK_RECEIVE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      receiveError: error,
    }),
    [GET_RECEIVE_USER_SUCCESS]: (state, { payload: receiveUser }) => ({
      ...state,
      receiveUser: receiveUser === '' ? null : receiveUser,
      receiveError: null,
    }),
    [GET_RECEIVE_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      receiveError: error,
    }),
    [RANK_LIST_SUCCESS]: (state, { payload: rankList }) => ({
      ...state,
      rankList,
    }),
    [RANK_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      rankError: error,
    }),
  },
  initialState,
);

export default rank;
