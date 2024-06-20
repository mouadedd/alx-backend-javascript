const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, result, body) => {
      expect(result.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id correct response for valid id', (done) => {
    request.get(`${API_URL}/cart/10`, (_err, result, body) => {
      expect(result.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 10');
      done();
    });
  });

  it('GET /cart/:id 404 for negative id number', (done) => {
    request.get(`${API_URL}/cart/-10`, (_err, result, _body) => {
      expect(result.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id 404 for non-int id', (done) => {
    request.get(`${API_URL}/cart/de-600`, (_err, result, _body) => {
      expect(result.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login -> valid response', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'mouadedd'}}, (_err, result, body) => {
      expect(result.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome mouadedd');
      done();
    });
  });

  it('GET /available_payments -> valid response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, result, body) => {
      expect(result.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
