import React, { FC } from 'react';
import styles from './Students.module.css';

interface StudentsProps {}

const Students: FC<StudentsProps> = () => (
  <div className={styles.Students} data-testid="Students">
    Students Component
  </div>
);

export default Students;
