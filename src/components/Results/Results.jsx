import { useParams } from 'react-router-dom';
import styles from './Results.module.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants';

export const Results = () => {
  const { score } = useParams();

  const [resultData, setResultData] = useState({});

  const getResult = async () => {
    const { data } = await axios.post(`${BASE_URL}/result`, { score });
    setResultData(data);
  };

  if (!Object.keys(resultData).length) {
    return;
  }

  return (
    <div className={styles.container}>
      <h2>description from API</h2>
    </div>
  );
};
