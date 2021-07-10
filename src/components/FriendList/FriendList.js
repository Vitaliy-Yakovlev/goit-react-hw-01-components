import React from 'react';
import PropTypes from 'prop-types';
import './FriendList.css';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
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
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
