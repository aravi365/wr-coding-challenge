import * as types from './types';
export function fetchData() {
  return {
    type: types.FETCH_DATA,
  };
}
export function searchList(query) {
  return {
    type: types.SEARCH_LIST,
    query,
  };
}
export function storeData(data) {
  return {
    type: types.STORE_DATA,
    data,
  };
}
