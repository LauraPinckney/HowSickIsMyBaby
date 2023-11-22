import React from 'react';
import styles from './NavButtons.module.scss';

export const NavButtons = ({ handleQuestionNav }) => {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <button
          onClick={() => handleQuestionNav(false)}
          className={styles.backButton}
        >
          Back
        </button>
      </div>
      <div className={styles.next}>
        <button
          onClick={() => handleQuestionNav(true)}
          className={styles.nextButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};
