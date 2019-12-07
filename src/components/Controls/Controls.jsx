import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  activePublicationsIndex,
  itemsLength,
  handleControlsBtn,
}) => (
  <section className={styles.controls}>
    <button
      type="button"
      name="decrementBtn"
      onClick={handleControlsBtn}
      className={styles.button}
      disabled={!activePublicationsIndex}
    >
      Назад
    </button>
    <button
      type="button"
      name="incrementBtn"
      onClick={handleControlsBtn}
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
  handleControlsBtn: PropTypes.func.isRequired,
};
export default Controls;
