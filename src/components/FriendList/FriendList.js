import React from 'react';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    <FriendListItem friends={friends} />
  </ul>
);

export default FriendList;
