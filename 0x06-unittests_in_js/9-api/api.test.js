const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / return adequat response', (done) => {
    request.get(`${API_URL}/`, (_err, result, body) => {
      expect(result.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id response for valid id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, result, body) => {
      expect(result.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id 404 for negative number values in id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, result, _body) => {
      expect(result.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id 404 for not-int id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, result, _body) => {
      expect(result.statusCode).to.be.equal(404);
      done();
    });
  });
});
