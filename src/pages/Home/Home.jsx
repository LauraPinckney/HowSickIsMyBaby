import React from 'react';
import './Home.scss';
import { Introduction, QuestionAnswers, NavButtons } from '../../components';

export const Home = () => {
  return (
    <div>
      <Introduction />
      <QuestionAnswers />
      <NavButtons />
    </div>
  );
};
