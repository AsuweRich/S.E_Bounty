const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('checking if numbers round', () => {
        assert.equal(calculateNumber(1, 3), 4);
    });
    it('checking if numbers round 2nd round', () => {
        assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('checking if numbers round 3nd round', () => {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it('checking if numbers round 4nd round', () => {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
    it('checking negative return', () => {
        assert.equal(calculateNumber(-1.3, -3.7), -5);
      });
});
