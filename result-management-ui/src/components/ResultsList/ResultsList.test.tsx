import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultsList from './ResultsList';

describe('<ResultsList />', () => {
  test('it should mount', () => {
    render(<ResultsList />);
    
    const resultsList = screen.getByTestId('ResultsList');

    expect(resultsList).toBeInTheDocument();
  });
});