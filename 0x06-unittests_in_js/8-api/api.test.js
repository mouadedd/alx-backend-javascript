const request = require('request');
const { expect } = require('chai');

describe('API integration', () => {
  const the_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${the_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
