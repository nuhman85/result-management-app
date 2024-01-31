import React, { FC } from 'react';
import styles from './StudentList.module.css';

interface StudentListProps {}

const StudentList: FC<StudentListProps> = () => (
  <div className={styles.StudentList} data-testid="StudentList">
    StudentList Component
  </div>
);

export default StudentList;
