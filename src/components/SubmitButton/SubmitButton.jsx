import styles from './SubmitButton.module.scss';
import React from 'react';

export const SubmitButton = () => {
  return (
    <div className={styles.container}>
      <a className={styles.button} href="/result">
        Submit
      </a>
    </div>
  );
};
