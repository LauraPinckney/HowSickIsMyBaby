import React from 'react';
import styles from './TwoAnswers.module.scss';

export const TwoAnswers = () => {
  return (
    <div className={styles.container}>
      <h2>"question"</h2>
      <h3>"further"</h3>
      <div className={styles.containerButtons}>
        <label>
          <input id="answer" type="radio" name="qAnswer" /> "a1"
        </label>
        <label>
          <input id="answer" type="radio" name="qAnswer" /> "a2"
        </label>
      </div>
    </div>
  );
};
