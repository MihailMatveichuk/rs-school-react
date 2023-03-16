import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../components/About/About';
import Error from '../components/Error/Error';
import App from '../App';

describe('App working test', () => {
  it('App component test', () => {
    render(<App />);
    const message = screen.queryByText(/About/i);
    expect(message).toBeVisible();
  });

  it('Error component test', () => {
    render(<Error />);
    const message = screen.queryByText(/Error 404 (Page not found)/i);
    expect(message).toBeDefined();
  });

  it('About component test', () => {
    render(<About />);
    const message = screen.queryByText(/About/i);
    expect(message).toBeVisible();
  });
});
