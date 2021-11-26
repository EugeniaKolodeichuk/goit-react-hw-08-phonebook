import React from 'react';
import styles from './views.module.css';

const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Create your own contact book{' '}
      <span role="img" aria-label="Иконка приветствия">
        🙀
      </span>
    </h1>
  </div>
);

export default HomeView;
