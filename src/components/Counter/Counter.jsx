import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ activePublicationsIndex, itemsLength }) => {
  const activePublications = activePublicationsIndex + 1;
  return (
    <p className={styles.counter}>
      {activePublications}/{itemsLength}
    </p>
  );
};

Counter.propTypes = {
  activePublicationsIndex: PropTypes.number.isRequired,
  itemsLength: PropTypes.number.isRequired,
};

export default Counter;
