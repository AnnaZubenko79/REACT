import React from 'react';
import Message from './Message';

let text1 = 'Hello, world!';
let text2 = 'Another exciting text.';

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      text: null,
    };
  }
  setText = (text) => {
    this.setState({
      text,
    });
  };
  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.setText(text1)}>
            Text 1
          </button>
          <button className="btn" onClick={() => this.setText(text2)}>
            Text 2
          </button>
          <button className="btn" onClick={() => this.setText('')}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
