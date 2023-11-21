import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Oh no, we can't find what you are looking for, sorry!</h2>
    </div>
  );
};
