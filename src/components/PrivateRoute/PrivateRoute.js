/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      if (isAuthenticated) {
        return <Component />;
      }
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      );
    }}
  />
);

export default PrivateRoute;
