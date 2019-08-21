const assert = require('assert');
const calculateTotal = require('./calculateTotalPoints');

describe('calculateStylePoints', () => {
    it('should return error msg if one or more values are missing', () => {
        const actual = calculateTotal();

        const expected = 'Some values are missing';

        assert.equal(actual, expected);
    });
    it('should work when all values are passed', () => {
        const actual = calculateTotal(125, 'normal', 120, [15,15,16.5,19,18.5], -0.8, 9);

        const expected = 128.2;

        assert.equal(actual, expected);
    });
    it('should work when wind and gate factor are 0', () => {
        const actual = calculateTotal(125, 'big', 130, [17.5,18,16.5,20,17.5], 0, 0);

        const expected = 104;

        assert.equal(actual, expected);
    });
});