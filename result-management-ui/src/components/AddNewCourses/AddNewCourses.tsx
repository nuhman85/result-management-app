import React, { FC } from 'react';
import styles from './AddNewCourses.module.css';

interface AddNewCoursesProps {}

const AddNewCourses: FC<AddNewCoursesProps> = () => (
  <div className={styles.AddNewCourses} data-testid="AddNewCourses">
    AddNewCourses Component
  </div>
);

export default AddNewCourses;
