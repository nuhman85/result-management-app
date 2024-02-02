import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddNewCourse from './AddNewCourse';

describe('<AddNewCourse />', () => {
  test('it should mount', () => {
    render(<AddNewCourse />);
    
    const addNewCourse = screen.getByTestId('AddNewCourse');

    expect(addNewCourse).toBeInTheDocument();
  });
});