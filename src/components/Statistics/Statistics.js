import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

function randColor() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <p className="task-title">Task 2</p>
    {title && <h2 className="statistics-title">{title}</h2>}

    <ul className="statistics-stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li
          className="statistics-item"
          key={id}
          style={{ backgroundColor: randColor() }}
        >
          <span className="statistics-label">{label}</span>
          <span className="statistics-percentage">{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
