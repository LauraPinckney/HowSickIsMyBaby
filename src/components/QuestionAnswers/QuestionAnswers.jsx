import React, { Fragment, useEffect, useState } from 'react';
import styles from './QuestionAnswers.module.scss';
import { NavButtons } from '../NavButtons/NavButtons';
import axios from 'axios';
import { BASE_URL } from '../../constants';

const baseAnswersState = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 0,
};

export const QuestionAnswers = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState(baseAnswersState);

  const fetchQuestions = async () => {
    const { data } = await axios.get(`${BASE_URL}/questions`);
    setQuestions(data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (!questions.length) {
    return;
  }

  const qOne = questions[0];
  return (
    <>
      <div className={styles.container}>
        <h2>{qOne.question}</h2>
        <h3>{qOne.further}</h3>
        <div className={styles.containerButtons}>
          {qOne.answers.map((answer, index) => {
            return (
              <Fragment key={answer.question}>
                <label
                  className={styles.containerAnswer}
                  htmlFor={`question-${index + 1}`}
                >
                  {answer.question}
                </label>
                <input
                  id="answer"
                  type="radio"
                  name="Answer"
                  value={`question-${index + 1}`}
                  onClick={() => {
                    setSelectedAnswers({
                      ...selectedAnswers,
                      [1]: answer.score,
                    });
                  }}
                />
              </Fragment>
            );
          })}
        </div>
      </div>

      <div>
        <NavButtons />
      </div>
    </>
  );
};
