import { test, expect } from '@playwright/test';
import { addition } from '../src/index.js';

test('The addition function correctly sums two natural numbers', () => {
  expect(addition(2, 3)).toBe(5);
});
