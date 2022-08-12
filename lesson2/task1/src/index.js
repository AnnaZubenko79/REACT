import React from 'react';
import ReactDOM from 'react-dom';

// import './styles.css';

const rootElement = document.querySelector('#root');

const element = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>
);

ReactDOM.render(element, rootElement);
