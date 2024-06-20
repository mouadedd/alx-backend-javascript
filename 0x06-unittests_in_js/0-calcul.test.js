const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('simple numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('float numbers', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('two float', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('two float', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
