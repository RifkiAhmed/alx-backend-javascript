const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

// Test cases
describe('calculateNumber', () => {
  it('should return the sum of integer numbers', () => {
    expect(calculateNumber('SUM', 0, 3)).to.equal(3);
    expect(calculateNumber('SUM', 1, 0)).to.equal(1);
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
  });

  it('should return the sum of rounded numbers', () => {
    expect(calculateNumber('SUM', 1, 3.5)).to.equal(5);
    expect(calculateNumber('SUM', 0.1, 3)).to.equal(3);
    expect(calculateNumber('SUM', 0.7, -3)).to.equal(-2);
    expect(calculateNumber('SUM', 0.7, -3.5)).to.equal(-2);
  });

  it('should return the subtract of integer numbers', () => {
    expect(calculateNumber('SUBTRACT', 0, 3)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
  });

  it('should return the subtract of rounded numbers', () => {
    expect(calculateNumber('SUBTRACT', 1, 3.5)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 0.1, 3)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 0.7, -3)).to.equal(4);
    expect(calculateNumber('SUBTRACT', 0.7, -3.5)).to.equal(4);
  });

  it('should return the divide of integer numbers', () => {
    expect(calculateNumber('DIVIDE', 0, 3)).to.equal(0);
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
    expect(calculateNumber('DIVIDE', -1, -3)).to.equal(0.3333333333333333);
  });

  it('should return the divide of rounded numbers', () => {
    expect(calculateNumber('DIVIDE', 1, 3.5)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 0.1, 3)).to.equal(0);
    expect(calculateNumber('DIVIDE', 0.7, -3)).to.equal(-0.3333333333333333);
    expect(calculateNumber('DIVIDE', 0.7, -3.5)).to.equal(-0.3333333333333333);
  });

  it('should return Error when divisor is equal to 0', () => {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', -1, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0.7, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0.7, 0.4)).to.equal('Error');
  });

  it('should return 0 when both numbers are 0', () => {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
  });

  it('should handle large numbers correctly', () => {
    expect(calculateNumber('SUM', 1000000000000000000000.4, 0)).to.equal(1000000000000000000000);
    expect(calculateNumber('SUM', 0, 1000000000000000000000.5)).to.equal(1000000000000000000001);
    expect(calculateNumber('SUBTRACT', 1000000000000000000000.4, 0)).to.equal(1000000000000000000000);
    expect(calculateNumber('SUBTRACT', 0 ,1000000000000000000000.5)).to.equal(-1000000000000000000001);
    expect(calculateNumber('SUM', 1.1e20, 0)).to.equal(1.1e20);
    expect(calculateNumber('SUM', 0, -1.5e20)).to.equal(-1.5e20);
    expect(calculateNumber('SUBTRACT', 1.1e20, 0)).to.equal(1.1e20);
    expect(calculateNumber('SUBTRACT', 0, -1.5e20)).to.equal(1.5e20);
  });
});
