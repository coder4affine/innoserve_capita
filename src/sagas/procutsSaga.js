import { takeLatest, call, put, all, fork, delay } from 'redux-saga/effects';
import { SAVE_PRODUCT, REQUEST, SUCCESS, FAIL, LOAD_PRODUCTS } from '../constants/actionTypes';

function* saveProducts({ payload }) {
  try {
    yield delay(2000);
    const res = yield call(fetch, 'http://localhost:3004/products', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });
    const product = yield res.json();
    yield put({ type: `${SAVE_PRODUCT}_${SUCCESS}`, payload: product });
  } catch (error) {
    yield put({ type: `${SAVE_PRODUCT}_${FAIL}`, payload: error });
  }
}

function* saveProductsRequest() {
  yield takeLatest(`${SAVE_PRODUCT}_${REQUEST}`, saveProducts);
}

function* loadProducts() {
  try {
    const res = yield call(fetch, 'http://localhost:3004/products');
    const products = yield res.json();
    yield put({ type: `${LOAD_PRODUCTS}_${SUCCESS}`, payload: products });
  } catch (error) {
    yield put({ type: `${LOAD_PRODUCTS}_${FAIL}`, payload: error });
  }
}

function* loadProductsRequest() {
  yield takeLatest(`${LOAD_PRODUCTS}_${REQUEST}`, loadProducts);
}

export default function* rootProducts() {
  yield all([fork(loadProductsRequest), fork(saveProductsRequest)]);
}
