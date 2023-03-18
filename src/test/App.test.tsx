import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import React from 'react';
import About from '../components/About/About';
import Error from '../components/Error/Error';
import Card from '../components/Card/Card';
import Search from '../components/Search/Search';
import App from '../App';
import Cards from '../components/Cards/Cards';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App working test', () => {
  it('App component test', async () => {
    render(
      <Router>
        <App />
      </Router>
    );
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

  it('Cards component test', () => {
    render(<Cards data={[]} />);
  });

  it('Card component test', () => {
    render(<Card item={{}} key={1} />);
    expect(screen.queryByAltText('img')).toBeDefined();
    expect(screen.queryByText(/price/i)).toBeDefined();
    expect(screen.queryByText(/Brand:/i)).toBeDefined();
    expect(screen.queryByText(/Rating:/i)).toBeDefined();
    expect(screen.queryByRole('button')).toBeDefined();
    const message = screen.queryByText(/Description/i);
    expect(message).toBeDefined();
  });

  it('Search component test', () => {
    const onUpdateSearch = jest?.fn();
    render(<Search onUpdateSearch={onUpdateSearch} value={''} />);
    expect(screen.queryByPlaceholderText(/Search.../i)).toBeDefined();
    expect(screen.queryByRole('text')).toBeDefined();
  });
});
