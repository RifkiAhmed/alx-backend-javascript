const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
    it('request / route should return the index page content', (done) => {
        request.get('http://localhost:7865/', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });

    })
})
