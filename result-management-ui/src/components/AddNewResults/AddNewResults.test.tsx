import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddNewResults from './AddNewResults';

describe('<AddNewResults />', () => {
  test('it should mount', () => {
    render(<AddNewResults />);
    
    const addNewResults = screen.getByTestId('AddNewResults');

    expect(addNewResults).toBeInTheDocument();
  });
});