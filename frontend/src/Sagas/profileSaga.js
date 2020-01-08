import {
  all,
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';

import { apiService } from '../Services';

import { profileAction } from '../Actions';

function* submitProfile(action) {
  yield put(profileAction.setLoading(true));
  const { payload } = action;
  console.log('payload', payload);
  yield call(apiService.postJson, '/api/profile/save', payload);
  yield put(profileAction.setLoading(false));
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
