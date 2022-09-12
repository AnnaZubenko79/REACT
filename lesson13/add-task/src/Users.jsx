import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import User from './User';

const Users = ({ match }) => (
  <div className="page__content">
    <h1>Users</h1>
    <ul className="navigation">
      <li className="navigation__item">
        <Link to={`${match.url}/github`}>Github</Link>
      </li>
      <li className="navigation__item">
        <Link to={`${match.url}/facebook`}>Facebook</Link>
      </li>
    </ul>
    <Switch>
      <Route path={match.url}>
        <span>Select a product please</span>
      </Route>
      <Route path={`${match.url}/:userId`} component={User} />
    </Switch>
  </div>
);

export default Users;
