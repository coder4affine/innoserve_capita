import { takeLatest, delay } from 'redux-saga/effects';
import { customHistory } from '../App';

function* login() {
  yield delay(3000);
  customHistory.push('/home');
}

export default function* loginRequest() {
  yield takeLatest('LOGIN_REQUEST', login);
}
