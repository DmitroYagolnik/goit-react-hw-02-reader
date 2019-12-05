import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ activePublicationsTitle, activePublicationsText }) => (
  <article className={styles.publication}>
    <h2>{activePublicationsTitle}</h2>
    <p>{activePublicationsText}</p>
  </article>
);

Publication.propTypes = {
  activePublicationsTitle: PropTypes.string.isRequired,
  activePublicationsText: PropTypes.string.isRequired,
};

export default Publication;
