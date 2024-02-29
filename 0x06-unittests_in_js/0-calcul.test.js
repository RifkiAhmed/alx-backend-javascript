const assert = require('assert');
const calculateNumber = require('./0-calcul');

// Test cases
it('calculateNumber(-0.1, -3) should return -3', () => {
  assert.equal(calculateNumber(-1.1, -2), -3);
});

it('calculateNumber(-1.5, 3.5) should return 3', () => {
  assert.equal(calculateNumber(0, -2.7), -3);
});