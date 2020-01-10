import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { LOAD_CATEGORIES, REQUEST, SUCCESS, FAIL } from '../constants/actionTypes';

function* loadCategories() {
  try {
    yield delay(2000);
    const res = yield call(fetch, 'http://localhost:3004/categories');
    const categories = yield res.json();
    yield put({ type: `${LOAD_CATEGORIES}_${SUCCESS}`, payload: categories });
  } catch (error) {
    yield put({ type: `${LOAD_CATEGORIES}_${FAIL}`, payload: error });
  }
}

export default function* loadCategoriesRequest() {
  yield takeEvery(`${LOAD_CATEGORIES}_${REQUEST}`, loadCategories);
}
