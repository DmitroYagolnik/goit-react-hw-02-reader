import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  activePublicationsIndex,
  itemsLength,
  handleIncrement,
  handleDecrement,
}) => (
  <section className={styles.controls}>
    <button
      type="button"
      onClick={handleDecrement}
      className={styles.button}
      disabled={activePublicationsIndex === 0}
    >
      Назад
    </button>
    <button
      type="button"
      onClick={handleIncrement}
      className={styles.button}
      disabled={activePublicationsIndex + 1 === itemsLength}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  activePublicationsIndex: PropTypes.number.isRequired,
  itemsLength: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};
export default Controls;
