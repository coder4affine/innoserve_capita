const initialState = {
  loading: false,
  error: false,
  data: {},
};

export default (state = initialState, { type, payload }) => {
  console.warn('user');
  switch (type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true };
    case 'LOGIN_SUCCESS':
      return { ...state, data: payload, loading: false };

    case 'LOGIN_ERROR':
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};
