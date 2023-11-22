import styles from './Hero.module.scss';
import React from 'react';
import sketchBaby from '../../assets/images/sketchBaby.jpg';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={sketchBaby} alt="Sketch of Baby"></img>
      <h1>How Sick is My Baby?</h1>
    </div>
  );
};
