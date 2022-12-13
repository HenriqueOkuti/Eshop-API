import { prisma } from '../src/config/database';

export async function cleanDb() {
  await prisma.productInfo.deleteMany({});
  await prisma.products.deleteMany({});
  await prisma.cartInfo.deleteMany({});
  await prisma.carts.deleteMany({});
  await prisma.users.deleteMany({});
  await prisma.sessions.deleteMany({});
  await prisma.userInfo.deleteMany({});
  await prisma.history.deleteMany({});
}
