import React from 'react';
import styles from './NavButtons.module.scss';
import { Link } from 'react-router-dom';

export const NavButtons = ({
  handleQuestionNav,
  currentQuestionNumber,
  getScore,
}) => {
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
        {currentQuestionNumber !== 18 ? (
          <button
            onClick={() => handleQuestionNav(true)}
            className={styles.nextButton}
          >
            Next
          </button>
        ) : (
          <Link className={styles.nextButton} to={`/result/${getScore()}`}>
            Submit
          </Link>
        )}
      </div>
    </div>
  );
};
