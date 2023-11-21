import React from 'react';
import styles from './NavButtons.module.scss';

export const NavButtons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <a className={styles.backButton}>Back</a>
      </div>
      <div className={styles.next}>
        <a className={styles.nextButton}>Next</a>
      </div>
    </div>
  );
};
