import React, { FC } from 'react';
import styles from './CoursesList.module.css';

interface CoursesListProps {}

const CoursesList: FC<CoursesListProps> = () => (
  <div className={styles.CoursesList} data-testid="CoursesList">
    CoursesList Component
  </div>
);

export default CoursesList;
