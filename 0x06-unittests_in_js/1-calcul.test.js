const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
    describe('SUM operation', function () {
        it('should return the sum of rounded numbers', function () {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    describe('SUBTRACT operation', function () {
        it('should return the difference of rounded numbers', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE operation', function () {
        it('should return the division of rounded numbers if b is not zero', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" if b is rounded to zero', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });
});
