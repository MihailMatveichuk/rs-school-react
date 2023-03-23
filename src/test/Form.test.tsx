import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Forms, { ICardForm } from '../components/Forms/Forms';

describe('Forms', () => {
  test('should render correctly', () => {
    const { queryByText, queryByLabelText } = render(<Forms />);
    expect(queryByText('Customer information')).toBeInTheDocument();
    expect(queryByLabelText('Your first and second name')).toBeInTheDocument();
    expect(queryByLabelText('Your birthday')).toBeInTheDocument();
    expect(queryByLabelText('Pick your country:')).toBeInTheDocument();
    expect(queryByLabelText('I consent to my personal data:')).toBeInTheDocument();
    expect(queryByText('Submit')).toBeInTheDocument();
  });

  test('should submit form correctly with valid input', () => {
    const { queryByLabelText, queryByText } = render(<Forms />);
    const nameInput = queryByLabelText('Your first and second name') as HTMLInputElement;
    const consentCheckbox = queryByLabelText('I consent to my personal data:') as HTMLInputElement;
    const submitButton = queryByText('Submit') as HTMLButtonElement;
    fireEvent.change(nameInput, { target: { value: 'Alex Popov' } });
    fireEvent.click(consentCheckbox);
    fireEvent.click(submitButton);
    expect(screen.queryByText('Data was saved')).toBeTruthy();
  });

  test('should not submit form with invalid input and show error message', () => {
    const { queryByLabelText, queryByText } = render(<Forms />);
    const nameInput = queryByLabelText('Your first and second name') as HTMLInputElement;
    const consentCheckbox = queryByLabelText('I consent to my personal data:') as HTMLInputElement;
    const submitButton = queryByText('Submit') as HTMLButtonElement;
    fireEvent.change(nameInput, { target: { value: 'Ale' } });
    fireEvent.click(consentCheckbox);
    fireEvent.click(submitButton);
    expect(screen.queryByText('Invalid value')).toBeTruthy();
  });

  test('should update the state with the correct data after form submission', () => {
    const { queryByLabelText, queryByText } = render(<Forms />);
    const nameInput = queryByLabelText('Your first and second name') as HTMLInputElement;
    const consentCheckbox = queryByLabelText('I consent to my personal data:') as HTMLInputElement;
    const submitButton = queryByText('Submit') as HTMLButtonElement;
    fireEvent.change(nameInput, { target: { value: 'Alex Popov' } });
    fireEvent.click(consentCheckbox);
    fireEvent.click(submitButton);
    const expectedData: ICardForm[] = [
      { name: 'Alex Popov', birthday: '', select: '', switcher: false, checkbox: true },
    ];
    expect(screen.queryByText('Data was saved')).toBeTruthy();
    expect(screen.queryByText('Alex Popov')).toBeTruthy();
    expect(expectedData).toEqual(expect.arrayContaining(expectedData));
  });
});
