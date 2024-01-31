import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddNewCourses from './AddNewCourses';

describe('<AddNewCourses />', () => {
  test('it should mount', () => {
    render(<AddNewCourses />);
    
    const addNewCourses = screen.getByTestId('AddNewCourses');

    expect(addNewCourses).toBeInTheDocument();
  });
});