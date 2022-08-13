import React from 'react';
import ReactDOM from 'react-dom';
import Greetings from './Greetings';
import './index.scss';

const rootElement = document.querySelector('#root');
const userInfo = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date('2019-01-01T11:32:19.566Z'),
};
ReactDOM.render(<Greetings user={userInfo} />, rootElement);
