import {put, call, select, fork, takeEvery} from 'redux-saga/effects';
import {getLists} from '../../api/getLists';
import * as listActions from '../actions/listActions';
// Our worker Saga
export default function* listSaga(action) {
  try {
    let response = yield call(getLists);
    console.log('response test', response);
    if (response) {
      yield put(listActions.storeData(response));
    } else {
      alert('No data to display');
    }
  } catch (err) {
    alert('Something went wrong');
    //show error
  }
}
