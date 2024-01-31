import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StudentList from './StudentList';

describe('<StudentList />', () => {
  test('it should mount', () => {
    render(<StudentList />);
    
    const studentList = screen.getByTestId('StudentList');

    expect(studentList).toBeInTheDocument();
  });
});