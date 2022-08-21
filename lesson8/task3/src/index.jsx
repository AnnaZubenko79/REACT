import React from 'react';
import ReactDom from 'react-dom';
import Dimensions from './Dimensions';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDom.render(<Dimensions />, rootElement);
