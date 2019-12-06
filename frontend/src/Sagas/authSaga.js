import {
  take,
  // put,
  // fork,
  // cancel,
} from 'redux-saga/effects';

import { authAction } from '../Actions';

// function* auth(username, password) {
//   try {
//     const token = yield call()
//   } catch (e) {
//     yield put({ type: authAction.LOGIN_ERROR });
//   }
// }

function* authSaga() {
  while (true) {
    const { username, password } = yield take(authAction.LOGIN_REGUEST);
    console.log('authSaga', username, password);
    // const task = yield fork(auth, username, password);
    // console.log(task);
    const action = yield take([authAction.LOGIN_LOGOUT, authAction.LOGIN_ERROR]);
    console.log(action);
    if (action.type === 'LOGOUT') {
      // yield cancel(task);
    }
  }
}

export default authSaga;
