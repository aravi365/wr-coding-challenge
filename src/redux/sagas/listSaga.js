import {put, call, select, fork, takeEvery} from 'redux-saga/effects';

// Our worker Saga that registers the user
export default function* loginSaga(action) {
  const state = yield select(state => state);

  try {
    // let response = yield call(
    //   loginUser,
    //   token,
    //   action.userName,
    //   action.password,
    // );

    if (response) {
      //do something
    } else {
      // do something
    }
  } catch (err) {
    //show error
  }
}
