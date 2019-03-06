import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard';
import 'jest-dom/extend-expect'


test('should have button for updating component', () => {
    const btnAction = jest.fn();
    const { getByTestId } = render(<Dashboard clicked={btnAction} />)
    const btn = getByTestId(/submit-btn/);
    fireEvent.click(btn);
    expect(btnAction).toBeCalled()
})