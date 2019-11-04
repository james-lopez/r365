import React from 'react';
import Challenge5 from './';
import { render,fireEvent } from '@testing-library/react';

test('Correct String Format', () => {
	const { getByTestId } = render(<Challenge5/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1,2' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('3');
});

test('Empty Input', () => {
	const { getByTestId } = render(<Challenge5/>);

	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('0');
});

test('Single Number Input', () => {
	const { getByTestId } = render(<Challenge5/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('1');
});

test('Single Incorrect Input', () => {
	const { getByTestId } = render(<Challenge5/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1,abc' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('1');
})

test('Both Incorrect Inputs', () => {
	const { getByTestId } = render(<Challenge5/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: 'abc,defg;' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('0');
})

test('More than 2 Inputs', () => {
	const { getByTestId } = render(<Challenge5/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1,2,3,4,5,6,7,8,9,10,11,12' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('78');
})

test('Newline as alternative delimiter', () => {
	const { getByTestId } = render(<Challenge5/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: `1\n2,3` }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('6');
})

test('Deny Negative Numbers', () => {
	const { getByTestId } = render(<Challenge5/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: `1\n2,3,-10,-12` }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('Error: Negative Numbers Included in Input: -10,-12');
})

test('Invalidate numbers over 1000', () => {
	const { getByTestId } = render(<Challenge5/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '2,1001,6' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('8');
})