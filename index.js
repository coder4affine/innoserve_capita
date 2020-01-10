// import App from './src/App';

// if (true) {
//   const a = 3;
// }
// import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/configureStore';
import App from './src/App';
// import Todos from './src/Todos';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
