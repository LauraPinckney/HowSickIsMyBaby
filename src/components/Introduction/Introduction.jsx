import { Hero } from '../Hero/Hero';
import styles from './Introduction.module.scss';
import React from 'react';

export const Introduction = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <h2 className={styles.htwo}>How this works</h2>
      <p>
        How Sick is My Baby? is designed to help you decide whether your baby
        needs a doctor. How Sick is My Baby? contains 19 simple checks which
        test for different symptoms or signs of illness. Each check has a score.
        Go through all the checks, the scores will be added all together at the
        end. The higher the score the sicker the baby is likely to be.
      </p>

      <h3>If your baby:</h3>
      <ol>
        <li>stops breathing or goes blue </li>
        <li>has a fit </li>
        <li>cannot be woken </li>
        <li>is unresponsive and not aware of what is going on</li>
        <li>has glazed eyes and is not focussing on anything </li>
        <li>has been badly or seriously injured</li>
        <li>has a rash that does not fade when pressed with a glass </li>
      </ol>
      <p className={styles.containerAlert}>Do not use How Sick is My Baby</p>
      <p className={styles.containerAlert}>
        These conditions require urgent medical help.
      </p>

      <h2>When you want to check your baby:</h2>
      <ol>
        <li>undress your baby in a warm place </li>
        <li>carefully follow the instructions for each check</li>
      </ol>

      <div className={styles.start}>
        <a className={styles.startButton} href="/questions">
          Start
        </a>
      </div>
    </div>
  );
};
