import React from 'react';
import { render } from '@testing-library/react';
import CardForm from '../components/CardForm/CardForm';
import { ICardForm } from 'type';

describe('CardForm', () => {
  const testData: ICardForm = {
    file: 'test-image.jpg',
    name: 'John Doe',
    birthday: '01/01/1980',
    select: 'USA',
    switcher: true,
    checkbox: true,
  };

  it('renders the component with the correct props', () => {
    if (typeof document !== 'undefined') {
      const { getByAltText, getByText } = render(<CardForm item={testData} />);
      expect(getByAltText('img')).toBeInTheDocument();
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('Sex: Female')).toBeInTheDocument();
      expect(getByText('Rights: Yes')).toBeInTheDocument();
    }
  });
});
