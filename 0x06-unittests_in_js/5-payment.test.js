const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    let consoleLogSpy;

    beforeEach(function () {
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        consoleLogSpy.restore();
    });

    it('should log correct message to console for totalAmount=100, totalShipping=20', function () {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');
        sinon.assert.calledOnce(consoleLogSpy);
    });

    it('should log correct message to console for totalAmount=10, totalShipping=10', function () {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledWith(consoleLogSpy, 'The total is: 20');
        sinon.assert.calledOnce(consoleLogSpy);
    });
});
