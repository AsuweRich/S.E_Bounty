const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('', () => {
  let spyBoy;
  beforeEach(() => {
    spyBoy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    sinon.restore();
  });
  it('checking if numbers round with spies and stubs 1st', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyBoy.calledOnce).to.be.true;
    expect(spyBoy.calledWith('The total is: 120')).to.be.true;
  });
  it('checking if numbers round with spies and stubs 2nd', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spyBoy.calledOnce).to.be.true;
    expect(spyBoy.calledWith('The total is: 20')).to.be.true;
  });
});
