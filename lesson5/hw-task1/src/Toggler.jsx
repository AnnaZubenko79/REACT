import React from 'react';

// class Toggler extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       statusToggler: 'Off',
//     };
//   }
//   handleClick = () => {
//     this.setState({
//       statusToggler: 'On',
//     });
//   };

//   render() {
//     return (
//       <div className="toggler" onToggle={this.handleClick}>
//         {this.state.statusToggler}
//       </div>
//     );
//   }
// }

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Off' : 'On'}
      </button>
    );
  }
}
export default Toggler;
