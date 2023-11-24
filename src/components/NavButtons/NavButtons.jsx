import React from 'react';
import styles from './NavButtons.module.scss';

export const NavButtons = ({ handleQuestionNav, currentQuestionNumber }) => {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <button
          onClick={() => handleQuestionNav(false)}
          className={styles.backButton}
        >
          Back
        </button>
      </div>{' '}
      <div className={styles.next}>
        {currentQuestionNumber !== 18 ? (
          <button
            onClick={() => handleQuestionNav(true)}
            className={styles.nextButton}
          >
            Next
          </button>
        ) : (
          <a className={styles.nextButton} href="/result">
            Submit
          </a>
        )}
      </div>
    </div>
  );
};
