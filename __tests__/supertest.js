// assign a constant to requiring 'supertest'
const request = require('supertest');
// assign a constant to the server we're using 
const server = 'http://localhost:3000';

// test.js
jest.mock('../__tests__/db.js'); // Adjust the path

const db = require('../__tests__/db.js'); // Adjust the path

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

  //describe('/listProblems', () => {
    //   describe('GET', () => {
    //     // it should return with a 200 status and text/html content type 
    //     it('should return with a 200 status and text/html content type', async () => {
    //       return request(server)
    //         .get('/')
    //         .expect('Content-Type', /text\/html/)
    //         .expect(200);
    //     });
    //   });
    // });
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
      // it('should handler errors while creating a problem', async () => {

      //   // expect response to be 400 and successful to be false
      //   expect(response.status).toBe(400);
      //   expect(response.body.successful).toBe(false);
      // });
  });
  // describe /readProblem 
  // describe('/readProblem', () => {
  //   describe('POST', () => {

  //   });
  // });
  // 
});
});

//This is Mike's code
// describe('POST /Favorite/Add', function () {
//   it('responds with json', (done) => {
//     request(server)
//       .post('/Favorite/Add')
//       .send({
//         name: 'show.name',
//         vote_average: 1,
//         first_air_date: 'show.first_air_date',
//         overview: 'show.overview',
//         poster_path: 'show.poster_path',
//       })
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, done);
//   });
// });


 //   const requestData = {
      //     username: 'testuser',
      //     title: 'Example Problem',
      //     description: 'This is an example problem description.',
      //     solution: 'This is an example solution.',
      //     comments: 'These are example comments.',
      //     tag: 'exampleTag'
      //   };
      //   // mock the original query
      //   const originalQuery = db.query;
      //   // simulate database error using jest.fn()
      //   db.query = jest.fn(() => {
      //     return Promise.resolve();
      //   })
      //   const response = await request(server)
      //     .post('/createProblem')
      //     .send(requestData);
      //   // restore original db.query
      //   db.query = originalQuery;
      //   expect(response.status).toBe(200);
      //   expect(response.body.successful).toBe(true);
      // });
      // 
      //   // use example requestData again
      //   const requestData = {
      //     username: 'testuser',
      //     title: 'Example Problem',
      //     description: 'This is an example problem description.',
      //     solution: 'This is an example solution.',
      //     comments: 'These are example comments.',
      //     tag: 'exampleTag'
      //   };
      //   // mock the original query
      //   const originalQuery = db.query;
      //   // simulate database error using jest.fn()
      //   db.query = jest.fn(() => {
      //     throw new Error('Test DB error');
      //   })