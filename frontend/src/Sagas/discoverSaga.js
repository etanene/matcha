import {
  all,
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';

import { discoverAction, authAction } from '../Actions';

import { apiService } from '../Services';

function* getUsers(action) {
  yield put(discoverAction.setLoading(true));
  const { payload } = action;
  try {
    const users = yield call(apiService.getJson, '/api/discover/getRecommendUsers', payload);
    console.log('users on front', users);
    yield put(discoverAction.saveUsers(users));
  } catch (e) {
    // will notify
    console.log(e);
    if (e.status === 401) {
      yield put(authAction.logout());
    }
  }
  yield put(discoverAction.setLoading(false));
}

function* watchGetUsers() {
  yield takeEvery(discoverAction.DISCOVER_GET_USERS, getUsers);
}

function* discoverSaga() {
  yield all([
    watchGetUsers(),
  ]);
}

export default discoverSaga;
