const assert = require('assert');
const calculateStyle = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    it('should work for random notes', () => {
        const actual = calculateStyle([15,16,17,18,19]);

        const expected = 51;

        assert.equal(actual, expected);
    });
    it('should work for equal notes', () => {
        const actual = calculateStyle([15,15,15,15,15]);

        const expected = 45;

        assert.equal(actual, expected);
    });
    it('should work for decimal notes', () => {
        const actual = calculateStyle([18.5,19.5,17.5,15.5,16.5]);

        const expected = 52.5;

        assert.equal(actual, expected);
    });
    it('should work for random and decimal notes', () => {
        const actual = calculateStyle([15,16.5,18.5,18,19.5]);

        const expected = 53;

        assert.equal(actual, expected);
    });
    it('should work for different notes', () => {
        const actual = calculateStyle([1,20,0,5,11.5]);

        const expected = 17.5;

        assert.equal(actual, expected);
    });
    it('should work for equal decimal notes', () => {
        const actual = calculateStyle([15.5,15.5,15.5,15.5,15.5]);

        const expected = 46.5;

        assert.equal(actual, expected);
    });
    it('should work only for 5 values in array', () => {
        const actual = calculateStyle([13, 12, 20]);

        const expected = 'Notes should contain 5 values';

        assert.equal(actual, expected);
    });
    it('should work only for values between 0 and 20', () => {
        const actual = calculateStyle([-5, 0, 50, 100, 20]);

        const expected = 'Note should be value between 0 and 20';

        assert.equal(actual, expected);
    });
})