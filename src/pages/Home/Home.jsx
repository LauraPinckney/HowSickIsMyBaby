import React from 'react';
import './Home.scss';
import { Introduction, QuestionAnswers } from '../../components';

export const Home = () => {
  return (
    <div>
      <Introduction />
      <QuestionAnswers />
    </div>
  );
};
