import React, { FC } from 'react';
import styles from './Courses.module.css';

interface CoursesProps {}

const Courses: FC<CoursesProps> = () => (
  <div className={styles.Courses} data-testid="Courses">
    Courses Component
  </div>
);

export default Courses;
