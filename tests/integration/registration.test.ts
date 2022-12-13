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

//AUTH
describe('POST: /signup', () => {
  it('If the body is invalid should return status code 400', () => {});

  describe('If the body is valid:', () => {
    it('If the user already exists should return status code 400', () => {});

    it('Should create new user and return status code 201', () => {});
  });
});

describe('POST: /login', () => {
  it('If the body is invalid should return status code 400', () => {});

  describe('If the body is valid:', () => {
    it('If the user does not exist should return status code 400', () => {});

    it('Should log user and return token with status 200', () => {});
  });
});
