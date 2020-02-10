import {
  take,
  put,
  fork,
  cancel,
  call,
} from 'redux-saga/effects';

import { authAction } from '../Actions';
import { apiService, userService } from '../Services';

function* auth(username, password) {
  try {
    const { token } = yield call(apiService.postJson, '/api/auth/login', { username, password });
    yield call(userService.setUser, { username, token });
    yield put({ type: authAction.LOGIN_SUCCESS, payload: { username, token } });
  } catch (e) {
    yield put({ type: authAction.LOGIN_ERROR, payload: e.message });
  }
}

function* authSaga() {
  while (true) {
    const user = yield call(userService.getUser);
    let task = null;

    if (!user) {
      const { username, password } = yield take(authAction.LOGIN_REGUEST);
      task = yield fork(auth, username, password);
    }
    const action = yield take([authAction.LOGIN_LOGOUT, authAction.LOGIN_ERROR]);
    if (action.type === 'LOGOUT') {
      yield cancel(task);
    }
    yield call(apiService.getJson, '/api/auth/logout');
    yield call(userService.delUser);
  }
}

export default authSaga;
