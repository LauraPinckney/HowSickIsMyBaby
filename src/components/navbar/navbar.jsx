import styles from './Navbar.module.scss';
import React from 'react';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <a href="/">Home</a>
    </div>
  );
};
