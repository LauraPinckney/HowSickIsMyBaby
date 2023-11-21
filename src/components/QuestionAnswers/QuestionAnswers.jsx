import React from 'react';
import styles from './QuestionAnswers.module.scss';
import { NavButtons } from '../NavButtons/NavButtons';

export const QuestionAnswers = ({ questions }) => {
  if (!questions.length) {
    return;
  }
  // console.log(JSON.stringify(questions, null, 2));

  const qOne = questions[0];
  return (
    <>
      <div className={styles.container}>
        <h2>{qOne.question}</h2>
        <h3>{qOne.further}</h3>
        <div className={styles.containerButtons}>
          {qOne.answers.map((answer) => {})}
          <label></label>
          <input id="answer" type="radio" name="Answer" />
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

      <div>
        <NavButtons />
      </div>
    </>
  );
};
