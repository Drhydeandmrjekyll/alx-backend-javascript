const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Cart page', () => {
  it('Should return payment methods for cart with a valid id', async () => {
    const response = await request(app).get('/cart/12');
    expect(response.statusCode).to.equal(200);
    expect(response.text).to.equal('Payment methods for cart 12');
  });

  it('Should return 404 for cart with an invalid id', async () => {
    const response = await request(app).get('/cart/hello');
    expect(response.statusCode).to.equal(404);
  });

  it('should validate the cart ID parameter', (done) => {
    request(app)
      .get('/cart/abc')
      .expect(404, done);
  });

  it('should handle invalid routes gracefully', (done) => {
    request(app)
      .get('/cart/invalidroute')
      .expect(404)
      .end((err, res) => {
        expect(res.text).to.include('Cannot GET /cart/invalidroute');
        done();
      });
  });
});
