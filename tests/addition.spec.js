import { test, expect } from '@playwright/test';
import { addition } from '../src/index.js';

test('The addition function should add two natural numbers correctly', () => {
  expect(addition(2, 3)).toBe(5);
});
