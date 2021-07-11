import React from 'react';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(friend => (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}
      />
    ))}
  </ul>
);

export default FriendList;
