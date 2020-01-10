import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PageNotFound from './screens/pageNotFound';
import routes from './routes';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LocaleContext from './context/localeContext';

export const customHistory = createBrowserHistory();

const App = () => (
  <Router history={customHistory}>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <LocaleContext>
        <Switch>
          {routes.map(route => {
            if (route.isPrivate) {
              return <PrivateRoute isAuthenticated key={route.path} {...route} />;
            }
            return <Route key={route.path} {...route} />;
          })}
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </LocaleContext>
    </div>
  </Router>
);

export default App;
