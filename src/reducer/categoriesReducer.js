import { LOAD_CATEGORIES, SUCCESS } from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${LOAD_CATEGORIES}_${SUCCESS}`:
      return payload;

    default:
      return state;
  }
};
