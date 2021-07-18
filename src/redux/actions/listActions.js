import * as types from './types';
export function fetchData(data) {
  return {
    type: types.LOGIN_REQUEST,
    data,
  };
}
