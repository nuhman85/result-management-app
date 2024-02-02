import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Students from './Students';

describe('<Students />', () => {
  test('it should mount', () => {
    render(<Students />);
    
    const students = screen.getByTestId('Students');

    expect(students).toBeInTheDocument();
  });
});