const assert = require('assert');
const calculateNumber = require('./0-calcul');

// Test cases
it('calculateNumber(1, 3) should return 4', () => {
  assert.equal(calculateNumber(1, 3), 4);
});

it('calculateNumber(0.1, 3.7) should return 4', () => {
  assert.equal(calculateNumber(0.1, 3.7), 4);
});

it('calculateNumber(1.2, 3.7) should return 5', () => {
  assert.equal(calculateNumber(1.2, 3.7), 5);
});

it('calculateNumber(1.5, 3.7) should return 6', () => {
  assert.equal(calculateNumber(1.5, 3.7), 6);
});

it('calculateNumber(-1, -3) should return -4', () => {
  assert.equal(calculateNumber(-1, -3), -4);
});

it('calculateNumber(-1.5, 2.5) should return 2', () => {
  assert.equal(calculateNumber(-1.5, 2.5), 2);
});

it('calculateNumber(1.5, -2.5) should return 0', () => {
  assert.equal(calculateNumber(1.5, -2.5), 0);
});

it('calculateNumber(-1.5, -2.5) should return -3', () => {
  assert.equal(calculateNumber(-1.5, -2.5), -3);
});

it('calculateNumber(0, 0) should return 0', () => {
  assert.equal(calculateNumber(0, 0), 0);
});

it('calculateNumber(0, 2.5) should return 3', () => {
  assert.equal(calculateNumber(0, 2.5), 3);
});

it('calculateNumber(1.1, 0) should return 1', () => {
  assert.equal(calculateNumber(1.1, 0), 1);
});

it('calculateNumber(1000000000000000000000.4, 0) should return 1000000000000000000000', () => {
  assert.equal(calculateNumber(1000000000000000000000.4, 0), 1000000000000000000000);
});

it('calculateNumber(1000000000000000000000.5, 0) should return 1000000000000000000002', () => {
  assert.equal(calculateNumber(1000000000000000000000.5, 0), 1000000000000000000002);
});

it('calculateNumber(1.1e20, 0) should return 1.1e20', () => {
  assert.equal(calculateNumber(1.1e20, 0), 1.1e20);
});

it('calculateNumber(-1.5e20, 0) should return -1.5e20', () => {
  assert.equal(calculateNumber(-1.5e20, 0), -1.5e20);
});