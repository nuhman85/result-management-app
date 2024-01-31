import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddNewStudent from './AddNewStudent';

describe('<AddNewStudent />', () => {
  test('it should mount', () => {
    render(<AddNewStudent />);
    
    const addNewStudent = screen.getByTestId('AddNewStudent');

    expect(addNewStudent).toBeInTheDocument();
  });
});