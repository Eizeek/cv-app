import React from 'react';
import { render } from 'react-dom';
import {Button} from './Button';

test('Button renders correctly with icon and text', () => {
  const div = document.createElement('div');
  render(<Button icon="icon-name" text="Click me" label="Custom label" />, div);

  const button = div.querySelector('button');
  const icon = div.querySelector('.button__icon');
  const text = div.querySelector('.button__text');

  expect(button).not.toBeNull();
  expect(button).toHaveAttribute('aria-label', 'Custom label');
  
  expect(icon).not.toBeNull();
  expect(icon.textContent).toBe('icon-name');

  expect(text).not.toBeNull();
  expect(text.textContent).toBe('Click me');
});

test('Button renders correctly with only text', () => {
  const div = document.createElement('div');
  render(<Button text="Click me" label="Custom label" />, div);

  const button = div.querySelector('button');
  const icon = div.querySelector('.button__icon');
  const text = div.querySelector('.button__text');

  expect(button).not.toBeNull();
  expect(button).toHaveAttribute('aria-label', 'Custom label');

  expect(icon).toBeNull();

  expect(text).not.toBeNull();
  expect(text.textContent).toBe('Click me');
});
