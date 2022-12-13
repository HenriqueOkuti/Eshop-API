import { prisma } from '../../src/config/database';
import { faker } from '@faker-js/faker';

export async function createValidUser() {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

export async function createInvalidUser() {
  return {
    invalid: faker.internet.userName(),
  };
}
