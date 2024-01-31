import React, { FC } from 'react';
import styles from './AddNewResults.module.css';

interface AddNewResultsProps {}

const AddNewResults: FC<AddNewResultsProps> = () => (
  <div className={styles.AddNewResults} data-testid="AddNewResults">
    AddNewResults Component
  </div>
);

export default AddNewResults;
