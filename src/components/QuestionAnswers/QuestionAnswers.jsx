import React from 'react';
import styles from './QuestionAnswers.module.scss';

export const QuestionAnswers = () => {
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
        <label>
          <input id="answer" type="radio" name="qAnswer" /> "a3"
        </label>
        <label>
          <input id="answer" type="radio" name="qAnswer" /> "a4"
        </label>
      </div>
    </div>
  );
};
