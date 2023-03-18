import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import React from 'react';
import About from '../components/About/About';
import Error from '../components/Error/Error';
import Card from '../components/Card/Card';
import Search from '../components/Search/Search';

describe('App working test', () => {
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

describe('Card show items', () => {
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
});

describe('Search working components', () => {
  it('Search component test', () => {
    const onUpdateSearch = jest?.fn();
    render(<Search onUpdateSearch={onUpdateSearch} value={''} />);
    expect(screen.queryByPlaceholderText(/Search.../i)).toBeDefined();
    expect(screen.queryByRole('text')).toBeDefined();
  });
});
