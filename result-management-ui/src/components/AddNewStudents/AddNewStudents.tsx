import React, { FC } from 'react';
import styles from './AddNewStudents.module.css';

interface AddNewStudentsProps {}

const AddNewStudents: FC<AddNewStudentsProps> = () => (
  <div className={styles.AddNewStudents} data-testid="AddNewStudents">
    AddNewStudents Component
  </div>
);

export default AddNewStudents;
