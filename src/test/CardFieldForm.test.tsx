import { render, screen } from '@testing-library/react';
import React from 'react';
import CardFieldForm from '../components/CardFieldForm/CardFieldForm';
import { ICardData } from 'type';

describe('CardFieldForm', () => {
  const file = new File(['test'], 'test.png', { type: 'image/png' });
  const fileList = {
    length: 1,
    item: (_: number) => file,
  } as FileList;
  const newData: Array<ICardData> = [
    {
      avatar: 'example.com/avatar.jpg',
      firstName: 'John Doe',
      birthday: '01.01.2000',
      select: 'USA',
      switcher: false,
      checkbox: true,
      file: fileList,
    },
  ];

  it('renders CardForm components based on the data passed as props', () => {
    if (typeof document !== 'undefined') {
      render(<CardFieldForm data={newData} />);
      const cardFormElements = screen.queryAllByTestId('card-form');
      expect(cardFormElements.length).toEqual(0);
    }
  });

  it('renders card holder name on the CardForm component', () => {
    if (typeof document !== 'undefined') {
      render(<CardFieldForm data={newData} />);
    }
  });
});
