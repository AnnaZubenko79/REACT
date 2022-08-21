import React from 'react';
import Clock from './Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.toggle}>TOGGLE</button>

        {this.state.visible && <Clock location={'New York'} offset={-5} />}
        {this.state.visible && <Clock location={'Kiyv'} offset={0} />}
        {this.state.visible && <Clock location={'London'} offset={3} />}
      </>
    );
  }
}

export default App;
