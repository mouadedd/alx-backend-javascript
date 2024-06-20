const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI(success), when true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((got) => {
        expect(got).to.deep.equal({data: 'Successful response from the API'});
        done();
      });
  });
});
