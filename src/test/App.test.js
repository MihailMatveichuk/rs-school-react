import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../components/About/About';
import Error from '../components/Error/Error';
import Card from '../components/Card/Card';
import Search from '../components/Search/Search';
import App from '../App';
import CardsField from '../components/CardsField/CardsField';
import { BrowserRouter as Router } from 'react-router-dom';
describe('App working test', () => {
    it('App component test', async () => {
        render(React.createElement(Router, null,
            React.createElement(App, null)));
    });
    it('Error component test', () => {
        render(React.createElement(Error, null));
        const message = screen.queryByText(/Error 404 (Page not found)/i);
        expect(message).toBeDefined();
    });
    it('About component test', () => {
        render(React.createElement(About, null));
        const message = screen.queryByText(/About/i);
        expect(message).toBeVisible();
    });
    it('Cards component test', () => {
        render(React.createElement(CardsField, { data: [] }));
    });
    it('Card component test', () => {
        render(React.createElement(Card, { id: 0, title: '', description: '', price: 0, rating: 0, brand: '', category: '', thumbnail: '', images: [] }));
        expect(screen.queryByAltText('img')).toBeDefined();
        expect(screen.queryByText(/price/i)).toBeDefined();
        expect(screen.queryByText(/Brand:/i)).toBeDefined();
        expect(screen.queryByText(/Rating:/i)).toBeDefined();
        expect(screen.queryByRole('button')).toBeDefined();
        const message = screen.queryByText(/Description/i);
        expect(message).toBeDefined();
    });
    it('Search component test', () => {
        const onUpdateSearch = () => '';
        render(React.createElement(Search, { onUpdateSearch: onUpdateSearch, value: '' }));
        expect(screen.queryByPlaceholderText(/Search.../i)).toBeDefined();
        expect(screen.queryByRole('text')).toBeDefined();
    });
});
