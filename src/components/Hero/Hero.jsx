import styles from './Hero.module.scss';
import React from 'react';
import sketchBaby from '../../assets/images/sketchBaby.jpg';
import heroImage from '../../assets/images/heroImage.jpg';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={heroImage} alt="Sketch of Baby"></img>
    </div>
  );
};
