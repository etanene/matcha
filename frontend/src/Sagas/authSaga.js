import { take } from 'redux-saga/effects';

import { authAction } from '../Actions';

function* authSaga() {
  while (true) {
    const user = yield take(authAction.LOGIN_REGUEST);
    console.log('authSaga', user);
  }
}

export default authSaga;
