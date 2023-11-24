import React, { Fragment, useEffect, useState } from 'react';
import styles from './QuestionAnswers.module.scss';
import { NavButtons } from '../NavButtons/NavButtons';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { SubmitButton } from '../SubmitButton/SubmitButton';

const baseAnswersState = {
  0: 0,
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
};

export const QuestionAnswers = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState(baseAnswersState);
  const [currentQuestionNumber, setcurrentQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const fetchQuestions = async () => {
    const { data } = await axios.get(`${BASE_URL}/questions`);
    setQuestions(data);
    setCurrentQuestion(data[currentQuestionNumber]);
  };

  const handleQuestionNav = (increment) => {
    const result = increment
      ? currentQuestionNumber + 1
      : currentQuestionNumber - 1;

    if (result < 0 || result > 18) {
      return;
    }
    setcurrentQuestionNumber(result);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionNumber]);
  }, [currentQuestionNumber]);

  if (!questions.length || !Object.keys(currentQuestion).length) {
    return;
  }

  return (
    <>
      <div className={styles.container}>
        <h2>{currentQuestion.question}</h2>
        <h3>{currentQuestion.further}</h3>
        <div className={styles.containerButtons}>
          {currentQuestion.answers.map((answer, index) => {
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
                      [currentQuestionNumber]: answer.score,
                    });
                  }}
                />
              </Fragment>
            );
          })}
        </div>
      </div>

      <div>
        <NavButtons handleQuestionNav={handleQuestionNav} />
      </div>
      <div>
        <SubmitButton />
      </div>
    </>
  );
};
