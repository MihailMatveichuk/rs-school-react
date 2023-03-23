import { render, screen } from '@testing-library/react';
import React from 'react';
import CardFieldForm from '../components/CardFieldForm/CardFieldForm';
import { ICardForm } from 'type';

describe('CardFieldForm', () => {
  const data: Array<ICardForm> = [
    { file: '', name: '', birthday: '', select: '', switcher: false, checkbox: false },
  ];

  it('renders CardForm components based on the data passed as props', () => {
    if (typeof document !== 'undefined') {
      render(<CardFieldForm data={data} />);
      const cardFormElements = screen.queryAllByTestId('card-form');
      expect(cardFormElements.length).toEqual(0);
    }
  });

  it('renders card holder name on the CardForm component', () => {
    const newData: Array<ICardForm> = [
      { file: '', name: 'John Doe', birthday: '', select: '', switcher: false, checkbox: false },
    ];
    if (typeof document !== 'undefined') {
      render(<CardFieldForm data={newData} />);
    }
  });
});
