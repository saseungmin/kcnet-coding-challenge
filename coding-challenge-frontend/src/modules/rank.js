import createRequestSaga, { createRequestActionTypes } from 'src/lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import * as rankAPI from '../lib/api/rank';
import { takeLatest } from 'redux-saga/effects';

const [RANK_RECEIVE, RANK_RECEIVE_SUCCESS, RANK_RECEIVE_FAILURE] = createRequestActionTypes(
  'rank/RANK_RECEIVE',
);

const [GET_RECEIVE_USER, GET_RECEIVE_USER_SUCCESS, GET_RECEIVE_USER_FAILURE] = createRequestActionTypes(
  'rank/GET_RECEIVE_USER',
);
const UNLOAD_RANK = 'rank/UNLOAD_RANK';

export const rankReceive = createAction(RANK_RECEIVE, ({ applyId }) => ({ applyId }));
export const unloadRank = createAction(UNLOAD_RANK);
export const getReceiveUser = createAction(GET_RECEIVE_USER, (id) => id);

const rankReceiveSaga = createRequestSaga(RANK_RECEIVE, rankAPI.rankReceive);
const receiveUserSaga = createRequestSaga(GET_RECEIVE_USER, rankAPI.receiveUser);

export function* rankSaga() {
  yield takeLatest(RANK_RECEIVE, rankReceiveSaga);
  yield takeLatest(GET_RECEIVE_USER, receiveUserSaga);
}

const initialState = {
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
    [GET_RECEIVE_USER_SUCCESS]: (state, {payload: receiveUser}) => ({
      ...state,
      receiveUser: receiveUser === "" ? null : receiveUser,
      receiveError: null,
    }),
    [GET_RECEIVE_USER_FAILURE]: (state, {payload: error}) => ({
      ...state,
      receiveError: error,
    })
  },
  initialState,
);

export default rank;
