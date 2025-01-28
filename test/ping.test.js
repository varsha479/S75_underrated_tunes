const request = require('supertest');
const { expect } = require('chai'); // Import 'expect' from Chai
const app = require('../server'); // Import the app from server.js

// Test suite for /ping route
describe('GET /ping', () => {
  it('should return Pong', async () => {
    const res = await request(app).get('/ping'); // Send GET request to /ping
    // Assert that the status is 200 and the response text is 'Pong'
    expect(res.status).to.equal(200);  // Use Chai's expect for assertion
    expect(res.text).to.equal('Pong');
  });
});