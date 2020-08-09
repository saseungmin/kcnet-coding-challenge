import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from 'src/lib/createRequestSaga';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE = 'auth/INITIALIZE';

const [WRITE, WRITE_SUCCESS, WRITE_FAILURE] = createRequestActionTypes(
  'apply/WRITE',
);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const initializeForm = createAction(INITIALIZE);

export const write = createAction(
  WRITE,
  ({
    applystartday,
    applyendday,
    teststartday,
    testendday,
    content,
    title,
    langs,
  }) => ({
    applystartday,
    applyendday,
    teststartday,
    testendday,
    content,
    title,
    langs,
  }),
);

const initialState = {
  applystartday: '',
  applyendday: '',
  teststartday: '',
  testendday: '',
  content: '',
  title: '',
  langs: [],
  write: null,
  writeError: null,
};

const write = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [INITIALIZE]: () => initialState,
    [WRITE]: (state) => ({
      ...state,
      write: null,
      writeError: null,
    }),
    [WRITE_SUCCESS]: (state, { payload: write }) => ({
      ...state,
      writeError: null,
      write,
    }),
    [WRITE_FAILURE]: (state, { payload: writeError }) => ({
      ...state,
      writeError,
    }),
  },
  initialState,
);

export default write;
