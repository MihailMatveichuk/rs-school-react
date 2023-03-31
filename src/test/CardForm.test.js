import React from 'react';
import { render } from '@testing-library/react';
import CardForm from '../components/CardForm/CardForm';
const file = new File(['test'], 'test.png', { type: 'image/png' });
const fileList = {
    length: 1,
    item: (index) => file,
};
const testData = {
    avatar: 'example.com/avatar.jpg',
    firstName: 'John Doe',
    birthday: '01.01.2000',
    select: 'USA',
    switcher: false,
    checkbox: true,
    file: fileList,
};
describe('CardForm', () => {
    test('renders product item with correct data', () => {
        const { getByAltText, getByText } = render(React.createElement(CardForm, { ...testData }));
        expect(getByAltText('img')).toHaveAttribute('src', testData.avatar);
        expect(getByText(testData.firstName)).toBeInTheDocument();
        expect(getByText(`Birthday: ${testData.birthday}`)).toBeInTheDocument();
        expect(getByText(`Country: ${testData.select}`)).toBeInTheDocument();
        expect(getByText(`Sex: ${testData.switcher ? 'Female' : 'Male'}`)).toBeInTheDocument();
        expect(getByText(`Rights: ${testData.checkbox ? 'Yes' : 'No'}`)).toBeInTheDocument();
    });
});
