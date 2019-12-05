import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import { authAction } from '../Actions';

export default function* rootSaga() {
  console.log(authAction);
  yield all([
    authSaga(),
  ]);
}
