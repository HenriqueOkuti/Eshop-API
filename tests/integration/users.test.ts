import supertest from 'supertest';
import server, * as serverConfig from '../../src/server';
import { cleanDb } from '../helpers';

beforeAll(async () => {
  await serverConfig.init();
  await cleanDb();
});

beforeEach(async () => {
  await cleanDb();
});

const app = supertest(server);

//USER-INFO
describe('GET: /profile', () => {
  it('If the body is invalid should return status code 400', () => {});

  it('If the token is invalid should return status code 403', () => {});

  describe('If the body is valid:', () => {
    it('If the user has no info saved should return satus code 204', () => {});

    it('If the user has info saved should return info with status code 200', () => {});
  });
});

describe('POST: /profile', () => {
  it('If the body is invalid should return status code 400', () => {});

  it('If the token is invalid should return status code 403', () => {});

  describe('If the body is valid:', () => {
    it('If the user already has info should return status code 405', () => {});

    it('Should create user info and return with status 200', () => {});
  });
});

describe('PUT: /profile', () => {
  it('If the body is invalid should return status code 400', () => {});

  it('If the token is invalid should return status code 403', () => {});

  describe('If the body is valid:', () => {
    it('If the user has no info should return status code 405', () => {});

    it('Should update user info and return with status 200', () => {});
  });
});

//History
describe('GET: /history', () => {
  it('If the body is invalid should return status code 400', () => {});

  it('If the token is invalid should return status code 403', () => {});

  describe('If the body is valid:', () => {
    it('If the user has no info saved should return satus code 204', () => {});

    it('If the user has info saved should return info with status code 200', () => {});
  });
});
