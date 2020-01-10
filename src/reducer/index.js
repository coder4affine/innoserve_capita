import { combineReducers } from 'redux';
import user from './userReducer';
import products from './productsReducer';
import categories from './categoriesReducer';
import loading from './lodingReducer';
import error from './errorReducer';

export default combineReducers({ user, products, categories, loading, error });
