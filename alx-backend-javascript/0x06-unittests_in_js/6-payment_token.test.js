const chai = require('chai');
const expect = chai.expect;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return an instance of a Promise', () => {
    const res = getPaymentTokenFromAPI();
    expect(res).to.be.an.instanceof(Promise);
  });
  it("should return a JSON data object {data: 'Successful response from the API'", () => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res.data).to.be.equal('Successful response from the API');
        done();
      });
  });
  it('should do nothing when not success', () => {
    getPaymentTokenFromAPI(false)
      .then((res) => {
        expect(res).to.equal('');
      });
  });
});
