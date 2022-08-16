import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogIn: false,
      loadSpin: false,
    };
  }

  showLogin = () => {
    this.setState({
      isLogIn: false,
    });
  };

  loadSpinHandle = () => {
    this.setState({
      loadSpin: true,
    });

    setTimeout(() => {
      this.setState({
        isLogIn: true,
        loadSpin: false,
      });
    }, 2000);
  };

  render() {
    if (this.state.loadSpin) {
      return <Spinner size={100} />;
    }
    return this.state.isLogIn ? (
      <Logout onLogout={this.showLogin} />
    ) : (
      <Login onLogin={this.loadSpinHandle} />
    );
  }
}

export default Auth;
