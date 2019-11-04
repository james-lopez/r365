import React from 'react';
import Challenge8 from './';
import { render, fireEvent } from '@testing-library/react';

test('Correct String Format', async () => {
	const { getByTestId } = render(<Challenge8/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1,2' }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('3');
});

test('Empty Input', async () => {
	const { getByTestId } = render(<Challenge8/>);

	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('0');
});

test('Single Number Input', async () => {
	const { getByTestId } = render(<Challenge8/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1' }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('1');
});

test('Single Incorrect Input', async () => {
	const { getByTestId } = render(<Challenge8/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1,abc' }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('1');
})

test('Both Incorrect Inputs', async () => {
	const { getByTestId } = render(<Challenge8/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: 'abc,defg;' }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('0');
})

test('More than 2 Inputs', async () => {
	const { getByTestId } = render(<Challenge8/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1,2,3,4,5,6,7,8,9,10,11,12' }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('78');
})

test('Newline as alternative delimiter', async () => {
	const { getByTestId } = render(<Challenge8/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: `1\n2,3` }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('6');
})

test('Deny Negative Numbers', async () => {
	const { getByTestId } = render(<Challenge8/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: `1\n2,3,-10,-12` }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('Error: Negative Numbers Included in Input: -10,-12');
})

test('Invalidate numbers over 1000', async () => {
	const { getByTestId } = render(<Challenge8/>);

	const inputField = getByTestId('input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '2,1001,6' }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('8');
})

test('New Delimiter Format', async () => {
  const { getByTestId } = render(<Challenge8/>);

  const inputField = getByTestId('input');
  const outputField = getByTestId('output-field');
  const submitButton = getByTestId('submit-button');

  fireEvent.change(inputField, {
    target: { value: '//[#]\n2#5' }
  })

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe('7')

  fireEvent.change(inputField, {
    target: { value: '//[@,#]\n2@,#ff@,#100' }
  })

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe('102')

  fireEvent.change(inputField, {
    target: { value: '//[***]\n11***22***33' }
  })

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe('66');

  fireEvent.change(inputField, {
    target: { value: '//[*][!!][r9r]\n11r9r22*hh*33!!44' }
  })

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe('110');
})

test('Incorrect Delimiter Format', async () => {
  const { getByTestId } = render(<Challenge8/>);

  const inputField = getByTestId('input');
  const outputField = getByTestId('output-field');
  const submitButton = getByTestId('submit-button');

  fireEvent.change(inputField, {
    target: { value: '//#2#5' }
  })

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe('0');

  fireEvent.change(inputField, {
    target: { value: '//##\n2#ff#100' }
  })

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe('0');
})

test('Still support all previous formats', async () => {
  const { getByTestId } = render(<Challenge8/>);

  const inputField = getByTestId('input');
  const outputField = getByTestId('output-field');
  const submitButton = getByTestId('submit-button');

  fireEvent.change(inputField, {
    target: { value: '//[***]\n2***5,10,3' }
  })

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe('20')

  fireEvent.change(inputField, {
    target: { value: '//[***]\n2***ff\n100,10***5' }
  })

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe('117')
})