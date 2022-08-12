import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import './search.scss';
import Search from './Search.jsx';

const rootElement = document.querySelector('#root');

ReactDom.render(<Search name="Tom" />, rootElement);
