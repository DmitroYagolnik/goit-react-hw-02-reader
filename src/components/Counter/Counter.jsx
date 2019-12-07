import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ activePublicationsIndex, itemsLength }) => (
  <p className={styles.counter}>
    {activePublicationsIndex + 1}/{itemsLength}
  </p>
);

Counter.propTypes = {
  activePublicationsIndex: PropTypes.number.isRequired,
  itemsLength: PropTypes.number.isRequired,
};

export default Counter;
