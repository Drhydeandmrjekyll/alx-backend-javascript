const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    let consoleLogSpy;
    let calculateNumberStub;

    beforeEach(function () {
        consoleLogSpy = sinon.spy(console, 'log');
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    afterEach(function () {
        consoleLogSpy.restore();
        calculateNumberStub.restore();
    });

    it('should call Utils.calculateNumber with correct arguments', function () {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
    });

    it('should log correct message to console', function () {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');
    });
});
