import { useParams } from 'react-router-dom';
import styles from './Results.module.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants';

export const Results = () => {
  const { score } = useParams();

  const [resultData, setResultData] = useState('');

  const getResult = async () => {
    const { data } = await axios.post(`${BASE_URL}/result`, { score });
    setResultData(data.description);
  };

  useEffect(() => {
    getResult();
  }, []);

  if (!resultData) {
    return;
  }

  return (
    <div className={styles.container}>
      <div>{resultData}</div>
    </div>
  );
};
