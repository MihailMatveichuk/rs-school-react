import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Forms, { IFormsState } from '../components/Forms/Forms';
import { ICardForm } from 'type';

const formsState: IFormsState = {
  data: [
    { file: '', name: 'John Doe', birthday: '', select: '', switcher: false, checkbox: false },
  ],
  errorName: false,
  errorBirthday: false,
};

describe('Forms', () => {
  test('should render correctly', () => {
    const { queryByText, queryByLabelText } = render(<Forms {...formsState} />);
    expect(queryByText('Customer information')).toBeInTheDocument();
    expect(queryByLabelText('Your first and second name')).toBeInTheDocument();
    expect(queryByLabelText('Your birthday')).toBeInTheDocument();
    expect(queryByLabelText('Pick your country:')).toBeInTheDocument();
    expect(queryByText('Submit')).toBeInTheDocument();
  });

  test('should submit form correctly with valid input', () => {
    const { queryByLabelText, queryByText } = render(<Forms {...formsState} />);
    const nameInput = queryByLabelText('Your first and second name') as HTMLInputElement;
    const submitButton = queryByText('Submit') as HTMLButtonElement;
    fireEvent.change(nameInput, { target: { value: 'Alex Popov' } });
    fireEvent.click(submitButton);
  });

  test('should not submit form with invalid input and show error message', () => {
    const { queryByLabelText, queryByText } = render(<Forms {...formsState} />);
    const nameInput = queryByLabelText('Your first and second name') as HTMLInputElement;
    const submitButton = queryByText('Submit') as HTMLButtonElement;
    fireEvent.change(nameInput, { target: { value: 'Ale' } });
    fireEvent.click(submitButton);
    expect(screen.queryByText('Invalid value')).toBeTruthy();
  });

  test('should update the state with the correct data after form submission', () => {
    const { queryByLabelText, queryByText } = render(<Forms {...formsState} />);
    const nameInput = queryByLabelText('Your first and second name') as HTMLInputElement;
    const submitButton = queryByText('Submit') as HTMLButtonElement;
    fireEvent.change(nameInput, { target: { value: 'Alex Popov' } });
    fireEvent.click(submitButton);
    const expectedData: ICardForm[] = [
      { file: '', name: 'Alex Popov', birthday: '', select: '', switcher: false, checkbox: true },
    ];
    expect(expectedData).toEqual(expect.arrayContaining(expectedData));
  });
});
