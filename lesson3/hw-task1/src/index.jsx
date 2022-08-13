import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Doe"
    birthDate={new Date('2019-01-01T11:32:19.566Z')}
  />,
  rootElement
);
