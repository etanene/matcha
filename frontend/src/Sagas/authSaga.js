import {
  take,
  put,
  fork,
  // cancel,
  call,
} from 'redux-saga/effects';

import { authAction } from '../Actions';
import { apiService, userService } from '../Services';

function* auth(username, password) {
  try {
    console.log('fork', username, password);
    const token = yield call(apiService.postJson, '/api/auth/login', { username, password });
    console.log('token', token);
    yield call(userService.setUser, { username, token });
    yield put({ type: authAction.LOGIN_SUCCESS, username });
  } catch (e) {
    yield put({ type: authAction.LOGIN_ERROR });
  }
}

function* authSaga() {
  while (true) {
    const { username, password } = yield take(authAction.LOGIN_REGUEST);
    console.log('authSaga', username, password);
    const task = yield fork(auth, username, password);
    console.log('task', task);
    // const action = yield take([authAction.LOGIN_LOGOUT, authAction.LOGIN_ERROR]);
    // console.log('action', action);
    // if (action.type === 'LOGOUT') {
    //   // yield cancel(task);
    // }
  }
}

export default authSaga;
