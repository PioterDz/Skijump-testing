const assert = require('assert');
const calculateDistance = require('./calculateDistancePoints');

describe('calculateStylePoints', () => {
    it('should return error msg if incorrect type of hillSize is passed', () => {
        const actual = calculateDistance(120, 'johny', 120);

        const expected = 'Type correct hill type in quotation marks: normal, big or mamut';

        assert.equal(actual, expected);
    });
    it('should work when distance is equal to kpoint and inital points should be equal to 120 for mamut hill', () => {
        const actual = calculateDistance(200, 'mamut', 200);

        const expected = 120;

        assert.equal(actual, expected);
    });
    it('should work when distance is equal to kpoint and inital points should be equal to 60 for big hill', () => {
        const actual = calculateDistance(120, 'big', 120);

        const expected = 60;

        assert.equal(actual, expected);
    });
    it('should work when distance is equal to kpoint and inital points should be equal to 60 for normal hill', () => {
        const actual = calculateDistance(90, 'normal', 90);

        const expected = 60;

        assert.equal(actual, expected);
    });
    it('should not work for distances and k-points over 300', () => {
        const actual = calculateDistance(301, 'mamut', 310);

        const expected = 'Invalid values';

        assert.equal(actual, expected);
    });
    it('should calculate correct value for normal hill size when distance is bigger then k-point', () => {
        const actual = calculateDistance(101, 'normal', 90);

        const expected = 82;

        assert.equal(actual, expected);
    });
    it('should calculate correct value for normal hill size when distance is smaller then k-point', () => {
        const actual = calculateDistance(78, 'normal', 90);

        const expected = 36;

        assert.equal(actual, expected);
    });
    it('should calculate correct value for big hill size when distance is bigger then k-point', () => {
        const actual = calculateDistance(129, 'big', 120);

        const expected = 76.2;

        assert.equal(actual, expected);
    });
    it('should calculate correct value for big hill size when distance is smaller then k-point', () => {
        const actual = calculateDistance(105, 'big', 115);

        const expected = 42;

        assert.equal(actual, expected);
    });
    it('should calculate correct value for mamut hill size when distance is bigger then k-point', () => {
        const actual = calculateDistance(220, 'mamut', 200);

        const expected = 144;

        assert.equal(actual, expected);
    });
    it('should calculate correct value for mamut hill size when distance is smaller then k-point', () => {
        const actual = calculateDistance(195, 'mamut', 210);

        const expected = 102;

        assert.equal(actual, expected);
    });
    it('should work for decimal values for normal hill', () => {
        const actual = calculateDistance(100.5, 'normal', 95);

        const expected = 71;

        assert.equal(actual, expected);
    });
    it('should work for decimal values for big hill', () => {
        const actual = calculateDistance(114.5, 'big', 120);

        const expected = 50.1;

        assert.equal(actual, expected);
    });
    it('should work for decimal values for mamut hill', () => {
        const actual = calculateDistance(170.5, 'mamut', 190);

        const expected = 96.6;

        assert.equal(actual, expected);
    });
});