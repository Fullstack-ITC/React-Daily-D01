import React from 'react';
import { render } from "@testing-library/react";
import CompWithState from '../exercises/5_CompWithState';
import '@testing-library/jest-dom/extend-expect';

it('should increase when clicked',() => {
  const { getByText,getByRole } = render(<CompWithState />);
  expect(getByRole('heading').tagName.toLowerCase()).toBe('h1');
  const button = getByText('+1');
  expect(button.tagName.toLowerCase()).toBe('button');
  button.click();
  expect(getByRole('heading').textContent).toBe('Count: 1');
  button.click();
  expect(getByRole('heading').textContent).toBe('Count: 2');
})
