import React, { FC } from 'react';
import styles from './AddNewStudent.module.css';

interface AddNewStudentProps {}

const AddNewStudent: FC<AddNewStudentProps> = () => (
  <div className={styles.AddNewStudent} data-testid="AddNewStudent">
    AddNewStudent Component
  </div>
);

export default AddNewStudent;
