// add import statements for vitest and the function itself

import { test, expect } from 'vitest';
import depthCheck from './main.js';

const surface = 'submarine is surfaced';
const dived = 'submarine is dived';
const pd1 = 'submarine is dived at periscope depth';
const pd2 = 'at periscope depth submarine is dived';
const deep = 'submarine is deep dived';
const broken = 'depth sensor is broken';

// At 20m, tell the crew "submarine is surfaced".
test('at 20, submarine on surface', () => {
  expect(depthCheck(20)).toBe(surface);
});

// Between 21m and 100m, tell the crew "submarine is dived".
test('below 20, submarine dived outside of PD', () => {
  expect(depthCheck(74)).toBe(dived);
});
test('below 20, submarine dived outside of PD, boundary value analysis', () => {
  expect(depthCheck(100)).toBe(dived);
});

// If they are between 21m and 40m, you should also tell them they are "at periscope depth".
test('below 20, submarine dived, within PD', () => {
  expect(depthCheck(30)).toBe(pd1 || pd2);
});

// Below 100m until 500m, tell the crew "submarine is deep dived".
test('below 100, submarine at deep dive conditions, lower boundary', () => {
  expect(depthCheck(101)).toBe(deep);
});
test('below 100, submarine at deep dive conditions, upper boundary', () => {
  expect(depthCheck(500)).toBe(deep);
});

// If the input doesn't satisfy these conditions, tell the crew "depth sensor is broken!".
test('invalid input - string', () => {
  expect(depthCheck('abc')).toBe(broken);
});
test('invalid input - negative number', () => {
  expect(depthCheck(-1)).toBe(broken);
});
test('invalid input - floating above the surface', () => {
  expect(depthCheck(3)).toBe(broken);
});
test('invalid input - > 500m', () => {
  expect(depthCheck(501)).toBe(broken);
});
