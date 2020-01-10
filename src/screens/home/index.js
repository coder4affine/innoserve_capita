/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';
import Home from './Home';
import { LOAD_CATEGORIES, REQUEST, SAVE_PRODUCT } from '../../constants/actionTypes';

function mapStateToProps(state) {
  return {
    categories: state.categories.map(x => ({ value: x, text: x })),
    loading: state.loading[LOAD_CATEGORIES] || state.loading[SAVE_PRODUCT],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCategories: () => dispatch({ type: `${LOAD_CATEGORIES}_${REQUEST}` }),
    saveProductRequest: (value, actions) =>
      dispatch({ type: `${SAVE_PRODUCT}_${REQUEST}`, payload: value, meta: actions }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
