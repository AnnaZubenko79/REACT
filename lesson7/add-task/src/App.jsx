import React from 'react';
import UsersList from './UsersList.jsx';

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-2',
    age: 38,
    name: 'Jack',
  },
  {
    id: 'id-3',
    age: 43,
    name: 'Jain',
  },
  {
    id: 'id-4',
    age: 31,
    name: 'Joe',
  },
  {
    id: 'id-5',
    age: 50,
    name: 'Tim',
  },
  {
    id: 'id-6',
    age: 15,
    name: 'Sim',
  },
  {
    id: 'id-7',
    age: 48,
    name: 'Jein',
  },
  {
    id: 'id-8',
    age: 50,
    name: 'Tim',
  },
  {
    id: 'id-9',
    age: 15,
    name: 'Sim',
  },
  {
    id: 'id-10',
    age: 48,
    name: 'Jein',
  },
];

class App extends React.Component {
  render() {
    return <UsersList users={users} />;
  }
}

export default App;
