// assign a constant to requiring 'supertest'
const request = require('supertest');
// assign a constant to the server we're using 
const server = 'http://localhost:3000';

/* 
I'm implementing testing for methods already used in api.js
- GET to /
- POST to /createProblem
- POST to /readProblem
- GET to /listProblems
- PATCH to /updateProblem
- DELETE to /deleteProblem 
*/

describe('Route integration', () => {
  describe('/', () => {
    // I think this describes just basic server GET request
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    })
  }); // ending describe '/'
  // describe /createProblem route
  describe('/createProblem', () => {
    describe('POST', () => {
      // it should create a problem successfully
      it('should create a problem successfully', async () => {
        const requestData = { title, description, solution, comments };
        const response = await request(server)
          .post('/createProblem')
          .send(requestData);
        expect(response.status).toBe(200);
        expect(response.body.successful).toBe(true);
      });
      // it should handle errors in creating problems
      it('should handler errors while creating a problem', async () => {
        // mock the original query
        const originalQuery = db.query;
        // simulate database error using jest.fn()
        db.query = jest.fn(() => {
          throw new Error('Test DB error');
        })
        // assign response to awaiting POST request
        const response = await request(server)
          .post('/createProblem')
          .send(requestData);
        // restore original db.query
        db.query = originalQuery;
        // expect response to be 400 and successful to be false
        expect(response.status).toBe(400);
        expect(response.body.successful).toBe(false);
      });
    });
  });
  // describe /readProblem 
  // describe('/readProblem', () => {
  //   describe('POST', () => {

  //   });
  // });
}); // most outer closing bracket