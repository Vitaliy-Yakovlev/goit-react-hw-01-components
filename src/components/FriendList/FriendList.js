import React from 'react';
import PropTypes from 'prop-types';
import './FriendList.css';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    <p className="task-title">Task 3</p>
    {friends.map(friend => (
      <li key={friend.id} className="friend-item">
        <span
          className={friend.isOnline ? 'friend-active' : 'friend-not-active'}
        ></span>
        <img
          className="friend-avatar"
          src={friend.avatar}
          alt={friend.name}
          width="48"
        />
        <p className="friend-name">{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
