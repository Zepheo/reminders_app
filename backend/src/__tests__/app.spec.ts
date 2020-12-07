import request from 'supertest';
import app from '../app';

describe('GET /users', () => {
  test('should respond with 200', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
  });
});

describe('GET /todos', () => {
  test('should respond with 200', async () => {
    const res = await request(app).get('/todos');
    expect(res.status).toBe(200);
  });
});

describe('GET not correct', () => {
  test('should respond with 404', async () => {
    const res = await request(app).get('/dfsklgjsd');
    expect(res.status).toBe(404);
  });
});
