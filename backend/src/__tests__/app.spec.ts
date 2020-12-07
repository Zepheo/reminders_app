/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import request from 'supertest';
import app from '../app';

describe('GET /', () => {
  test('should respond with 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});
