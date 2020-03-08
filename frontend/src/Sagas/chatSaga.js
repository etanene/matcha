import {
  all,
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';

import { chatAction, authAction } from '../Actions';

import { apiService } from '../Services';

function* getUsers(action) {
  const { payload } = action;
  try {
    const users = yield call(apiService.getJson, `/api/chat/getMatchUsers?login=${payload.login}`);
    yield put(chatAction.saveUsers(users));
  } catch (e) {
    // will notify
    console.log(e);
    if (e.status === 401) {
      yield put(authAction.logout());
    }
  }
}

function* watchGetUsers() {
  yield takeEvery(chatAction.CHAT_GET_USERS, getUsers);
}

function* chatSaga() {
  yield all([
    watchGetUsers(),
  ]);
}

export default chatSaga;
