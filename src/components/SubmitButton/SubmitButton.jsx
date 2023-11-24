import styles from './SubmitButton.module.scss';
import React from 'react';

export const SubmitButton = () => {
  return (
    <div className={styles.containerButton}>
      <a href="/result">Submit</a>
    </div>
  );
};
