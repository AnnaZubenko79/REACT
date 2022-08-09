const rootElement = document.querySelector('#root');
// const createElem = document.createElement('div');
// rootElement.append(createElem);
// createElem.innerHTML = 'hello';

const greetingElem = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
);

ReactDOM.render(greetingElem, rootElement);
