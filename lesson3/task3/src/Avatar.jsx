import React from 'react';
import './avatar.scss';

const Avatar = (props) => {
  return <img className="avatar" src={props.avatarUrl} alt={props.author} />;
};
export default Avatar;
