import {
  all,
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';

import { discoverAction, authAction } from '../Actions';

import { apiService } from '../Services';

function* getUsers() {
  yield put(discoverAction.setLoading(true));
  try {
    const users = yield call(apiService.getJson, '/api/discover/getRecommendUsers');
    console.log('users on front', users);
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
