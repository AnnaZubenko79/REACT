import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.decrement = this.decrement.bind(this);
  }
  // привязываем контекст выше в конструкторе с помощью bind
  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  // контекст привязывается автоматически (самый оптимальный способ)
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  reset() {
    this.setState({
      counter: 0,
    });
  }
  render() {
    return (
      <div className="counter">
        <button
          data-action="decrease"
          className="counter__button"
          onClick={this.decrement}
        >
          -
        </button>
        {/* третий способ привязки контекста это свойство стрелочной ф-ции, что не имеет свой контекст и использует внешний контекст. 
		В нем обязательно вызвать this.reset() */}
        <span className="counter__value" onClick={() => this.reset()}>
          {this.state.counter}
        </span>
        <button
          data-action="increase"
          className="counter__button"
          onClick={this.increment}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
