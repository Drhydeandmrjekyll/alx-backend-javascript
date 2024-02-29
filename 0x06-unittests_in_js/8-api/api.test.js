const { expect } = require('chai');
const request = require('request');

describe('Index page', function() {
  it('should return correct status code and message', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      if (error) {
        done(error); // Pass the error to the done callback
        return;
      }

      // Check if response is defined
      expect(response).to.exist;
      
      // Check status code
      expect(response.statusCode).to.equal(200);
      
      // Check body content
      expect(body).to.equal('Welcome to the payment system');

      done(); // Signal test completion
    });
  });
});
