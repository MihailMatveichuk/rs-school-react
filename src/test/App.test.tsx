import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../components/About/About';
import Header from '../components/Header/Header';
import App from '../App';

describe('App working test', () => {
  it('App components test', () => {
    render(<App />);
    const message = screen.queryByText(/About/i);
    expect(message).toBeVisible();
  });

  it('About components test', () => {
    render(<About />);
    const message = screen.queryByText(/About/i);
    expect(message).toBeVisible();
  });
});
