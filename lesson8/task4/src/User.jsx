import React from 'react';

class User extends React.Component {
  render() {
    return (
      <div class="user">
        <img
          alt="User Avatar"
          src="https://avatars3.githubusercontent.com/u/69631?v=4"
          class="user__avatar"
        />
        <div class="user__info">
          <span class="user__name">Facebook</span>

          <span class="user__location">Menlo Park, California</span>
        </div>
      </div>
    );
  }
}

export default User;
