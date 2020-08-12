import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from 'src/lib/createRequestSaga';

const CHANGE_FIELD = 'write/CHANGE_FIELD';
const INITIALIZE = 'write/INITIALIZE';

const [WRITE, WRITE_SUCCESS, WRITE_FAILURE] = createRequestActionTypes(
  'apply/WRITE',
);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initialize = createAction(INITIALIZE);

const initialState = {
  applystartday: '',
  applyendday: '',
  teststartday: '',
  testendday: '',
  content: '',
  title: '',
  langs: [],
};

const write = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [INITIALIZE]: (state) => initialState,
  },
  initialState,
);

export default write;
