import React from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Users from './Users';

const App = () => (
  <div className="page">
    <BrowserRouter>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users" component={Users} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
