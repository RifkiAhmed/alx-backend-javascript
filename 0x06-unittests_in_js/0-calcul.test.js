const assert = require('assert');
const calculateNumber = require('./0-calcul');

// Test cases
it('calculateNumber(-1.7, -2) should return -4', () => {
  assert.equal(calculateNumber(-1.7, -2), -4);
});

it('calculateNumber(0, -2.6) should return -3', () => {
  assert.equal(calculateNumber(0, -2.6), -3);
});