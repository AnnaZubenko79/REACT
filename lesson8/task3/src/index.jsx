import React from 'react';
import ReactDom from 'react-dom';
import Dimentions from './Dimentions';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDom.render(<Dimentions />, rootElement);
