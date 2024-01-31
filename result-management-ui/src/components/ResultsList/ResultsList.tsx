import React, { FC } from 'react';
import styles from './ResultsList.module.css';

interface ResultsListProps {}

const ResultsList: FC<ResultsListProps> = () => (
  <div className={styles.ResultsList} data-testid="ResultsList">
    ResultsList Component
  </div>
);

export default ResultsList;
