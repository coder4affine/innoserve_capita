import { SAVE_PRODUCT, SUCCESS, LOAD_PRODUCTS } from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${LOAD_PRODUCTS}_${SUCCESS}`:
      return payload;

    case `${SAVE_PRODUCT}_${SUCCESS}`:
      return [...state.data, payload];

    default:
      return state;
  }
};
