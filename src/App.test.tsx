import { render, screen } from '@testing-library/react';
import React from 'react';
import About from './components/About/About';

it('first test', () => {
  render(<About />);
  const message = screen.queryByText(/About/i);
  expect(message).toBeVisible();
});
