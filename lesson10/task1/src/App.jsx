import React from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

class App extends React.Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((userData) =>
        this.setState({
          userData,
        })
      );
  };
  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}
// new
export default App;
