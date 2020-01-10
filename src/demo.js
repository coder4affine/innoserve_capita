import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const App = ({ title, caption, isTruthy }) => {
  const [greet, setGreet] = useState('hello');

  const [greet1, setGreet1] = useState('how are you?');
  useEffect(() => {
    console.log('normal useEffect');
  });

  useEffect(() => {
    console.log('with empty arr useEffect');
    document.addEventListener('copy', () => {});
    return () => {
      document.removeEventListener('copy', () => {});
    };
  }, []);

  //   useEffect(() => {
  //     console.log(title);
  //   }, []);

  //   useEffect(() => {
  //     console.log('greet  and greet1 useEffect');
  //   }, [greet, greet1]);

  if (isTruthy) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <h1>{title}</h1>
      <h3>{caption}</h3>
      <h3>{greet}</h3>
      <h3>{greet1}</h3>
      <input type="password" />
      {isTruthy ? <h1>Hello true</h1> : <h1>Hello false</h1>}
      <button
        type="button"
        onClick={() => {
          setGreet('Hello World');
        }}
      >
        Click Me
      </button>
      <button
        type="button"
        onClick={() => {
          setGreet1('Hello World, How are you?');
        }}
      >
        Click Me
      </button>
    </>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string,
  isTruthy: PropTypes.bool.isRequired,
};

App.defaultProps = {
  caption: 'Hello',
};

export default App;

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class App extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     caption: PropTypes.string,
//     isTruthy: PropTypes.bool.isRequired,
//   };

//   static defaultProps = {
//     caption: 'Hello',
//   };

//   //   state = {
//   //     greet: 'Hello',
//   //   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       greet: 'Hello',
//     };

//     console.log('constructor');

//     this.interval = setTimeout(() => {
//       console.log('timeout...');
//     }, 200000);
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps');
//     if (props.isTruthy) {
//       return {
//         ...state,
//         greetWithName: `${props.title} Yagnesh`,
//       };
//     }
//     return null;
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     return false;
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//     document.addEventListener('copy', () => {
//       console.log('copied...');
//     });

//     clearTimeout(this.interval);
//   }

//   componentDidUpdate(prevProps, prevState) {}

//   componentWillUnmount() {
//     document.removeEventListener('copy', () => {
//       console.log('copy removed');
//     });
//   }

//   static getDerivedStateFromError() {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {

//   }

//   xyz = () => {};

//   render() {
//     console.log('render');
//     const { caption, isTruthy } = this.props;
//     const { greet, greetWithName } = this.state;
//     return (
//       <>
//         <h1>{greetWithName}</h1>
//         <h3>{caption}</h3>
//         <h4>{greet}</h4>
//         <input id="password" type="password" />
//         {isTruthy ? <h1>Hello true</h1> : <h1>Hello false</h1>}
//         <button
//           type="button"
//           onClick={() => {
//             this.setState({ greet: 'Hello World' });
//           }}
//         >
//           Click Me
//         </button>
//       </>
//     );
//   }
// }
// export default App;
