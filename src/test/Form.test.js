import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Forms from '../components/Forms/Forms';
describe('Forms', () => {
    it('should display an error message for invalid name input', async () => {
        render(React.createElement(Forms, null));
        const input = screen.getByLabelText('Your first and second name');
        userEvent.type(input, '111');
        fireEvent.blur(input);
        await waitFor(() => {
            expect(screen.queryByText(/Invalid value/)).toBeNull();
        });
        userEvent.clear(input);
        userEvent.type(input, 'John Doe');
        fireEvent.blur(input);
        expect(screen.queryByText('Invalid value!')).not.toBeInTheDocument();
    });
    it('should successfully submit the form', async () => {
        render(React.createElement(Forms, null));
        const input1 = screen.getByLabelText('Your first and second name');
        userEvent.type(input1, 'John Doe');
        const input2 = screen.getByLabelText('Your birthday');
        fireEvent.input(input2, { target: { value: '2000-01-01' } });
        const input3 = screen.getByLabelText('Pick your country:');
        userEvent.selectOptions(input3, 'Russia');
        const checkbox = screen.getAllByRole('checkbox');
        fireEvent.click(checkbox[0]);
    });
    it('should display an error message when the checkbox is not checked on submit', async () => {
        render(React.createElement(Forms, null));
        const submitButton = screen.getByText('Submit');
        expect(submitButton).not.toBeDisabled();
        expect(screen.queryByText((content, element) => {
            return element?.textContent === 'Give rights';
        })).not.toBeInTheDocument();
        fireEvent.click(submitButton);
        expect(screen.queryByText('Give rights')).not.toBeInTheDocument();
    });
});
