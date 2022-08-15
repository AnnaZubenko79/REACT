import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDom.render(<App />, rootElement);
