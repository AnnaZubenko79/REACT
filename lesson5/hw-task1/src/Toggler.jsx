import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusToggler: 'Off',
    };
  }
  handleClick = () => {
    this.setState({
      statusToggler: 'On',
    });
  };

  render() {
    return (
      <div className="toggler" onClick={this.handleClick}>
        {this.state.statusToggler}
      </div>
    );
  }
}

export default Toggler;
