import styles from './Navbar.module.scss';
import React from 'react';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <a className={styles.home} href="/">
        Home
      </a>
      <a className={styles.about} href="/about">
        About
      </a>
    </div>
  );
};
