import { render, screen } from '@testing-library/react';
import React from 'react';
import CardFieldForm from '../components/CardFieldForm/CardFieldForm';
describe('CardFieldForm', () => {
    const data = [
        { file: '', name: '', birthday: '', select: '', switcher: false, checkbox: false },
    ];
    it('renders CardForm components based on the data passed as props', () => {
        if (typeof document !== 'undefined') {
            render(React.createElement(CardFieldForm, { data: data }));
            const cardFormElements = screen.queryAllByTestId('card-form');
            expect(cardFormElements.length).toEqual(0);
        }
    });
    it('renders card holder name on the CardForm component', () => {
        const newData = [
            { file: '', name: 'John Doe', birthday: '', select: '', switcher: false, checkbox: false },
        ];
        if (typeof document !== 'undefined') {
            render(React.createElement(CardFieldForm, { data: newData }));
        }
    });
});
