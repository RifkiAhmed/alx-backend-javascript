const assert = require('assert');
const calculateNumber = require('./0-calcul');

// Test cases
describe('calculateNumber', () => {
  it('should return the sum of integer numbers', () => {
    assert.equal(calculateNumber(0, 3), 3);
    assert.equal(calculateNumber(1, 0), 1);
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(-1, -3), -4);
  });

  it('should return the sum of rounded numbers', () => {
    assert.equal(calculateNumber(1, 3.5), 5);
    assert.equal(calculateNumber(0.1, 3), 3);
    assert.equal(calculateNumber(0.7, -3), -2);
    assert.equal(calculateNumber(0.7, -3.5), -2);
  });

  it('should return 0 when both numbers are 0', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });

  it('should handle large numbers correctly', () => {
    assert.equal(calculateNumber(1000000000000000000000.4, 0), 1000000000000000000000);
    assert.equal(calculateNumber(0, 1000000000000000000000.5), 1000000000000000000001);
    assert.equal(calculateNumber(1.1e20, 0), 1.1e20);
    assert.equal(calculateNumber(0, -1.5e20), -1.5e20);

  });
});
