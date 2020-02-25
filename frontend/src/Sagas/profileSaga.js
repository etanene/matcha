import {
  all,
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';

import { apiService } from '../Services';

import { profileAction, authAction } from '../Actions';

function* submitProfile(action) {
  yield put(profileAction.setLoading(true));
  try {
    const { payload } = action;
    yield call(apiService.postJson, '/api/profile/save', payload);
    yield put(profileAction.resetChangePhoto());
  } catch (e) {
    // will notify
    console.log(e);
    if (e.status === 401) {
      yield put(authAction.logout());
    }
  }
  yield put(profileAction.setLoading(false));
}

function* watchSubmitProfile() {
  yield takeEvery(profileAction.PROFILE_SUBMIT_REQUEST, submitProfile);
}

function* getProfile(action) {
  yield put(profileAction.setLoading(true));
  try {
    const { payload } = action;
    const profile = yield call(apiService.getJson, `/api/profile/get?login=${payload}`);
    yield put(profileAction.saveProfile(profile));
  } catch (e) {
    // will notify
    console.log(e);
    if (e.status === 401) {
      yield put(authAction.logout());
    }
  }
  yield put(profileAction.setLoading(false));
}

function* watchGetProfile() {
  yield takeEvery(profileAction.PROFILE_GET, getProfile);
}

function* profileSaga() {
  yield all([
    watchSubmitProfile(),
    watchGetProfile(),
  ]);
}

export default profileSaga;
