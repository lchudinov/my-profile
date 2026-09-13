import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '../src/generated/prisma/client';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? 'file:./dev.db',
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.profile.upsert({
    where: {
      email: 'leonty@example.com',
    },
    update: {
      name: 'Leonty',
      description: 'Software developer',
    },
    create: {
      name: 'Leonty',
      email: 'leonty@example.com',
      description: 'Software developer',
    },
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });