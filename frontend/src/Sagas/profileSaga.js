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
    console.log('payload', payload);
    yield call(apiService.postJson, '/api/profile/save', payload);
  } catch (e) {
    // will notify
    console.log(e);
    if (e.status === 401) {
      yield put(authAction.logout());
    }
  } finally {
    yield put(profileAction.setLoading(false));
  }
}

function* watchSubmitProfile() {
  yield takeEvery(profileAction.PROFILE_SUBMIT_REQUEST, submitProfile);
}

function* profileSaga() {
  yield all([
    watchSubmitProfile(),
  ]);
}

export default profileSaga;
