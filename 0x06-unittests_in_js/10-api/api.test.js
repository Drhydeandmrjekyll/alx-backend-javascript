const { expect } = require('chai');
const request = require('supertest');
const app = require('./api');

describe('Testing /login endpoint', () => {
  it('should return "Welcome Betty"', async () => {
    const response = await request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .expect(200);

    expect(response.text).to.equal('Welcome Betty');
  });
});

describe('Testing /available_payments endpoint', () => {
  it('should return correct payment methods', async () => {
    const response = await request(app)
      .get('/available_payments')
      .expect(200);

    expect(response.body).to.deep.equal({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});
