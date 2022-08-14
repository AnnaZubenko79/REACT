import React from 'react';

class GoodButton extends React.Component {
  handleClick(e) {
    console.log(e.target.textContent);
    alert('Click me!');
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
