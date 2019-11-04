  
import React from 'react';
import Challenge1 from './';
import { render, fireEvent } from '@testing-library/react';

test('Correct String Format', () => {
	const { getByTestId } = render(<Challenge1/>);

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
	const { getByTestId } = render(<Challenge1/>);

	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('0');
});

test('Single Number Input', () => {
	const { getByTestId } = render(<Challenge1/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('1');
});

test('Too Many Delimiters', () => {
	const { getByTestId } = render(<Challenge1/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1,2,3,4,5,6,7,8' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('Too Many Numbers');
})

test('Single Incorrect Input', () => {
	const { getByTestId } = render(<Challenge1/>);

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
	const { getByTestId } = render(<Challenge1/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: 'abc,defg;' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('0');
})

test('Single Negative Input', () => {
	const { getByTestId } = render(<Challenge1/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '4,-3' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('1');
})