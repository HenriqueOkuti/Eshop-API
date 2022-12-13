import supertest from 'supertest';
import server, * as serverConfig from '../../src/server';
import { cleanDb } from '../helpers';

beforeAll(async () => {
  await serverConfig.init();
  await cleanDb();
});

const app = supertest(server);

describe('This is just a simple test', () => {
  it('Should just pass', () => {});
});
