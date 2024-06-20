const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('two floats', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding down', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding down', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding up', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding up', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounding down', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
