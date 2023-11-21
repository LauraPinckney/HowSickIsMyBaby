import React, { useEffect, useState } from 'react';
import './Home.scss';
import { Introduction, QuestionAnswers, NavButtons } from '../../components';
import axios from 'axios';
import { BASE_URL } from '../../constants';

export const Home = () => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    const { data } = await axios.get(`${BASE_URL}/questions`);
    setQuestions(data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div>
      <Introduction />
      <QuestionAnswers questions={questions} />
      <NavButtons />
    </div>
  );
};
