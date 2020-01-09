import React, { Component } from 'react';
import './main.css';
import InputText from './InputText';
import Header from './Header';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greet: 'hello',
      user: {
        name: 'yagnesh',
      },
    };
  }

  clickMe = () => {
    const { user } = this.state;
    user.name = 'yagnesh modh';
    this.setState({ user });
  };

  render() {
    console.log('Todos');
    const { greet, user } = this.state;
    return (
      <div className="header">
        <Header user={user} />
        <InputText />
        <div />
        {user.name}
        <input type="button" onClick={this.clickMe} />
        {greet}
      </div>
    );
  }
}

export default index;
