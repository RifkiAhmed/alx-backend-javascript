const assert = require('assert');
const calculateNumber = require('./1-calcul');

// Test cases
describe('calculateNumber', () => {
  it('should return the sum of integer numbers', () => {
    assert.equal(calculateNumber('SUM', 0, 3), 3);
    assert.equal(calculateNumber('SUM', 1, 0), 1);
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', -1, -3), -4);
  });

  it('should return the sum of rounded numbers', () => {
    assert.equal(calculateNumber('SUM', 1, 3.5), 5);
    assert.equal(calculateNumber('SUM', 0.1, 3), 3);
    assert.equal(calculateNumber('SUM', 0.7, -3), -2);
    assert.equal(calculateNumber('SUM', 0.7, -3.5), -2);
  });

  it('should return the subtract of integer numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 0, 3), -3);
    assert.equal(calculateNumber('SUBTRACT', 1, 0), 1);
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.equal(calculateNumber('SUBTRACT', -1, -3), 2);
  });

  it('should return the subtract of rounded numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3.5), -3);
    assert.equal(calculateNumber('SUBTRACT', 0.1, 3), -3);
    assert.equal(calculateNumber('SUBTRACT', 0.7, -3), 4);
    assert.equal(calculateNumber('SUBTRACT', 0.7, -3.5), 4);
  });

  it('should return the divide of integer numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 3), 0);
    assert.equal(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
    assert.equal(calculateNumber('DIVIDE', -1, -3), 0.3333333333333333);
  });

  it('should return the divide of rounded numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 3.5), 0.25);
    assert.equal(calculateNumber('DIVIDE', 0.1, 3), 0);
    assert.equal(calculateNumber('DIVIDE', 0.7, -3), -0.3333333333333333);
    assert.equal(calculateNumber('DIVIDE', 0.7, -3.5), -0.3333333333333333);
  });

  it('should return Error when divisor is equal to 0', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 1, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', -1, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 0.7, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 0.7, 0.4), 'Error');
  });

  it('should return 0 when both numbers are 0', () => {
    assert.equal(calculateNumber('SUM', 0, 0), 0);
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
  });

  it('should handle large numbers correctly', () => {
    assert.equal(calculateNumber('SUM', 1000000000000000000000.4, 0), 1000000000000000000000);
    assert.equal(calculateNumber('SUM', 0, 1000000000000000000000.5), 1000000000000000000001);
    assert.equal(calculateNumber('SUBTRACT', 1000000000000000000000.4, 0), 1000000000000000000000);
    assert.equal(calculateNumber('SUBTRACT', 0 ,1000000000000000000000.5), -1000000000000000000001);
    assert.equal(calculateNumber('SUM', 1.1e20, 0), 1.1e20);
    assert.equal(calculateNumber('SUM', 0, -1.5e20), -1.5e20);
    assert.equal(calculateNumber('SUBTRACT', 1.1e20, 0), 1.1e20);
    assert.equal(calculateNumber('SUBTRACT', 0, -1.5e20), 1.5e20);
  });
});
