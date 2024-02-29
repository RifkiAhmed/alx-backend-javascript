const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return the correct response for success', (done) => {
    getPaymentTokenFromAPI(true)
    .then((response) => {
      expect(response.data).to.equal('Successful response from the API');
      done();
    });
  });
});