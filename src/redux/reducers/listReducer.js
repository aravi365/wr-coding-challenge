/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import {findElems} from '../../helpers/findElem';

const initialState = {
  dataBackup: [],
  searchData: [],
};

export const listReducer = createReducer(initialState, {
  [types.STORE_DATA](state, action) {
    return {
      ...state,
      dataBackup: action.data,
      searchData: action.data,
    };
  },
  [types.SEARCH_LIST](state, action) {
    return {
      ...state,
      searchData:
        action.query === ''
          ? state.dataBackup
          : state.dataBackup.filter(item => findElems(item, action.query)),
    };
  },
});
