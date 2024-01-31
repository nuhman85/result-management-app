import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddNewStudents from './AddNewStudents';

describe('<AddNewStudents />', () => {
  test('it should mount', () => {
    render(<AddNewStudents />);
    
    const addNewStudents = screen.getByTestId('AddNewStudents');

    expect(addNewStudents).toBeInTheDocument();
  });
});