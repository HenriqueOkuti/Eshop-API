import supertest from 'supertest';
import server, * as serverConfig from '../../src/server';
import { cleanDb } from '../helpers';
import * as userFactory from '../factories/users-factory';
import httpStatus from 'http-status';

beforeAll(async () => {
  await serverConfig.init();
  await cleanDb();
});

beforeEach(async () => {
  await cleanDb();
});

const app = supertest(server);

//AUTH
describe('POST: /signup', () => {
  it('If the body is invalid should return status code 400', async () => {
    const body = userFactory.createInvalidUser();
    const response = await app.post('/signup').send(body);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  describe('If the body is valid:', () => {
    it('If the user already exists should return status code 400', async () => {
      const body = userFactory.createValidUser();
      const response = await app.post('/signup').send(body);

      expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    it('Should create new user and return status code 201', async () => {
      const body = userFactory.createValidUser();
      const response = await app.post('/signup').send(body);

      expect(response.status).toBe(httpStatus.CREATED);
    });

    //
  });
});

describe('POST: /login', () => {
  it('If the body is invalid should return status code 400', async () => {
    const body = userFactory.createInvalidUser();
    const response = await app.post('/login').send(body);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  describe('If the body is valid:', () => {
    it('If the user does not exist should return status code 400', async () => {
      const body = userFactory.createValidUser();
      const response = await app.post('/login').send(body);

      expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    it('Should log user and return token with status 200', async () => {
      const body = userFactory.createValidUser();
      const response = await app.post('/login').send(body);

      expect(response.status).toBe(httpStatus.OK);
      expect(response.body).toBe({
        token: expect.any(String),
      });
    });

    //
  });
});
