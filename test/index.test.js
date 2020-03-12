const supertest = require('supertest');
const app = require('../src/app');

const request = supertest(app);

describe('Route: index', () => {
  it('GET /', async () => {
    const res = await request.get('/');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: "Hello World" });
  });
});
