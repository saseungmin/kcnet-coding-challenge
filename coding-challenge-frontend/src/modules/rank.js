import createRequestSaga, { createRequestActionTypes } from 'src/lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import * as rankAPI from '../lib/api/rank';
import { takeLatest } from 'redux-saga/effects';

const [RANK_RECEIVE, RANK_RECEIVE_SUCCESS, RANK_RECEIVE_FAILURE] = createRequestActionTypes(
  'rank/RANK_RECEIVE',
);

const UNLOAD_RANK = 'rank/UNLOAD_RANK';

export const rankReceive = createAction(RANK_RECEIVE, ({applyId}) => ({applyId}));
export const unloadRank = createAction(UNLOAD_RANK);

const rankReceiveSaga = createRequestSaga(RANK_RECEIVE, rankAPI.rankReceive);

export function* rankSaga() {
  yield takeLatest(RANK_RECEIVE, rankReceiveSaga);
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
  },
  initialState,
);

export default rank;
