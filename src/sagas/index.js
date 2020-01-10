import { all, fork } from 'redux-saga/effects';
import user from './userSaga';

export default function* root() {
  yield all([fork(user)]);
}
