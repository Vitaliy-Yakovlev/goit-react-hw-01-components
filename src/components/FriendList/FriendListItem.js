import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li key={id} className={styles.item}>
    <span className={isOnline ? styles.active : styles.notActive}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendListItem;
