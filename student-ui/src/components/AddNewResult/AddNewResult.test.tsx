import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddNewResult from './AddNewResult';

describe('<AddNewResult />', () => {
  test('it should mount', () => {
    render(<AddNewResult />);
    
    const addNewResult = screen.getByTestId('AddNewResult');

    expect(addNewResult).toBeInTheDocument();
  });
});