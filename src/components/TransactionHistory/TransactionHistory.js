import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.transactionThead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={styles.transactionRow}>
          <td>{(type = type[0].toUpperCase() + type.substring(1))}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
