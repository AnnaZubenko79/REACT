import React from 'react';
import { useParams } from 'react-router-dom';

class User extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchUserData();
  }

  componentDidUpdate(prevProps) {
    const prevUser = prevProps.match.params.userId;
    const curentUser = this.props.match.params.userId;

    if (prevUser !== curentUser) {
      this.fetchUserData();
    }
  }

  fetchUserData() {
    const { match } = this.props;
    fetch(`https://api.github.com/users/${match.params.userId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(data => {
        this.setState({
          user: data,
        });
      });
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return null;
    }

    const { avatar_url, location, name } = user;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>

          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
