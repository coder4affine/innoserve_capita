import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    caption: PropTypes.string,
    isTruthy: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    caption: 'Hello',
  };

  xyz = () => {};

  render() {
    const { title, caption, isTruthy } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <h3>{caption}</h3>
        <input type="password" />
        {isTruthy ? <h1>Hello true</h1> : <h1>Hello false</h1>}
      </>
    );
  }
}
export default App;

// import React from 'react';
// import PropTypes from 'prop-types';

// const App = ({ title, caption, isTruthy }) => {
//   if (isTruthy) {
//     return <h1>Loading....</h1>;
//   }
//   return (
//     <>
//       <h1>{title}</h1>
//       <h3>{caption}</h3>
//       <input type="password" />
//       {isTruthy ? <h1>Hello true</h1> : <h1>Hello false</h1>}
//     </>
//   );
// };

// App.propTypes = {
//   title: PropTypes.string.isRequired,
//   caption: PropTypes.string,
//   isTruthy: PropTypes.bool.isRequired,
// };

// App.defaultProps = {
//   caption: 'Hello',
// };

// export default App;
