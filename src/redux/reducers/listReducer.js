/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  data: [],
};

export const listReducer = createReducer(initialState, {
  [types.STORE_DATA](state, action) {
    return {
      ...state,
      data: action.data,
    };
  },
});
