import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './screens/pageNotFound';
import routes from './routes';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
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
    </div>
  </Router>
);

export default App;
