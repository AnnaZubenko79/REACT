import React from 'react';
import './comment.scss';
import moment from 'moment';
import UserInfo from './UserInfo';

const formatDate = (date) => moment(date).format('DD MMM YYYY');

function Comment(props) {
  return (
    <div className="comment">
      <div className="comment__text">{props.text}</div>
      <UserInfo user={props.user} />
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
