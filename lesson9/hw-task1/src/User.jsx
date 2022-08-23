import React from 'react';

const User = ({ name, age }) => {
  return (
    <li className="user">
      <span class="user__name">{name}</span>
      <span class="user__age">{age}</span>
    </li>
  );
};

export default User;
