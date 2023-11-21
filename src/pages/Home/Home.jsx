import React from 'react';
import './Home.scss';
import { Introduction } from '../../components';
import { TwoAnswers } from '../../components/TwoAnswers/TwoAnswers';
import { NavButtons } from '../../components/NavButtons/NavButtons';

export const Home = () => {
  return (
    <div>
      <Introduction />
      <TwoAnswers />
      <NavButtons />
    </div>
  );
};
