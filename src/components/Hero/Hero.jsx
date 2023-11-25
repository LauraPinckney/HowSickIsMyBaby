import styles from './Hero.module.scss';
import React from 'react';
import TabletHero from '../../assets/images/TabletHero.jpg';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={TabletHero} alt="Sketch of Baby"></img>
    </div>
  );
};
