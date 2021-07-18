/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  userId: null,
};

export const listReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state, action) {
    return {
      ...state,
    };
  },
});
