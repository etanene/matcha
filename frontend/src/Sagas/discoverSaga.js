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

function* like(action) {
  const { payload } = action;

  try {
    const res = yield call(apiService.postJson, 'api/discover/like', payload);
    console.log('res like', res);
  } catch (e) {
    // wiil notify
    console.log(e);
    if (e.status === 401) {
      yield put(authAction.logout());
    }
  }
}

function* watchLike() {
  yield takeEvery(discoverAction.DISCOVER_LIKE, like);
}

function* discoverSaga() {
  yield all([
    watchGetUsers(),
    watchLike(),
  ]);
}

export default discoverSaga;
