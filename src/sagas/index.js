import { all, fork } from 'redux-saga/effects';
import user from './userSaga';
import categories from './categoriesSaga';
import procuts from './procutsSaga';

export default function* root() {
  yield all([fork(user), fork(categories), fork(procuts)]);
}
