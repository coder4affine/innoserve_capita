/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prop-types */
import React, { createContext, Component } from 'react';

export const { Provider: LocaleProvider, Consumer: LocaleConsumer } = createContext();

export default class LocaleContext extends Component {
  state = {
    locale: 'en',
    changeLocale: locale => {
      this.setState({ locale });
    },
  };

  render() {
    const { children } = this.props;
    return <LocaleProvider value={this.state}>{children}</LocaleProvider>;
  }
}
