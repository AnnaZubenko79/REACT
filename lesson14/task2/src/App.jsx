import React from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import User from './User';

const App = () => (
  <div className="page">
    <BrowserRouter>
      <div className="page__content">
        <h1>Users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/users/github">Github</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/facebook">Facebook</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/users/:userId">
            <User />
          </Route>
          <Route path="/">
            <span>Select a user please</span>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
