// assign a constant to requiring 'supertest'
const request = require('supertest');
// assign a constant to the server we're using 
const server = 'http://localhost:3000';

// test.js
// jest.mock('../__tests__/db.js'); // Adjust the path

// const db = require('../__tests__/db.js'); // Adjust the path

/* 
I'm implementing testing for methods already used in api.js
- GET to /
- GET to /listProblems
- POST to /createProblem
- POST to /readProblem
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

  describe('/listProblems', () => {
    describe('GET', () => {
      // it should return with a 200 status and text/html content type 
      it('should return with a 200 status and text/html content type', async () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
  // describe /createProblem route
  describe('/api/createProblem', () => {
    describe('POST', function () {
      // it should create a problem successfully
      it('should create a problem successfully', async () => {
        const response = await request(server)
          .post('/api/createProblem')
          .send({
            id: '1',
            username: 'zach',
            title: 'test',
            description: 'test',
            solution: 'test',
            comments: 'test',
            tag: 'test'
          })
          // .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200);

          expect(response.body.successful).toBe(true);
      });
      //it should handle errors in creating problems
      it('should handler errors while creating a problem', async () => {
        const response = await request(server)
          .post('/api/createProblem')
          .send({
            title: 'test',
            description: 'test',
            solution: 'test',
            comments: 'test',
            tag: 'test'
          })
          if (!response.body.sucessful) {
            expect(400);
          }
      });
    });
  });
  //describe /readProblem 
  describe('/readProblem', () => {
    describe('POST', () => {
      it('should read a problem successfully', async () => {
        const response = await request(server)
          .post('/api/readProblem')
          .send({
            title: 'test'
          })
          // .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          if (response.body.problem) {
            expect(200);
          }
      });
      //it should handle errors in creating problems
      it('should handler errors while reading a problem', async () => {
        const response = await request(server)
          .post('/api/readProblem')
          .send({
            title: 'test',
            description: 'test',
            solution: 'test',
            comments: 'test',
            tag: 'test'
          })
          if (!response.body.problem) {
            expect(400);
          }
      });
    });
  });
});


