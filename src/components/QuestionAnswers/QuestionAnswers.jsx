import React from 'react';
import styles from './QuestionAnswers.module.scss';

export const QuestionAnswers = ({ questions }) => {
  console.log(JSON.stringify(questions, null, 2));
  return (
    <div className={styles.container}>
      <h2>"question"</h2>
      <h3>"further"</h3>
      <div className={styles.containerButtons}>
        <label>
          <input id="answer" type="radio" name="Answer" /> "a1"
        </label>
        <label>
          <input id="answer" type="radio" name="Answer" /> "a2"
        </label>
        <label>
          <input id="answer" type="radio" name="Answer" /> "a3"
        </label>
        <label>
          <input id="answer" type="radio" name="Answer" /> "a4"
        </label>
      </div>
    </div>
  );
};
