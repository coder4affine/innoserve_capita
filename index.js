// import App from './src/App';

// if (true) {
//   const a = 3;
// }
// import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

ReactDOM.render(
  <App title="Hello," caption="caption" isTruthy={false} />,
  document.getElementById('root'),
);
