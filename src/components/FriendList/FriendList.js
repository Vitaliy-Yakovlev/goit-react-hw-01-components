import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(friend => (
      <li key={friend.id} className={styles.item}>
        <span
          className={friend.isOnline ? styles.active : styles.notActive}
        ></span>
        <img
          className={styles.avatar}
          src={friend.avatar}
          alt={friend.name}
          width="48"
        />
        <p className={styles.name}>{friend.name}</p>
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
