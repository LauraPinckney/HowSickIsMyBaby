import styles from './Footer.module.scss';
import React from 'react';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>London, 2023</p>
    </div>
  );
};
