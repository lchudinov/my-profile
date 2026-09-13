import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '../src/generated/prisma/client';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? 'file:./dev.db',
});

const prisma = new PrismaClient({
  adapter,
});

const skills = [
  'TypeScript',
  'Node.js',
  'NestJS',
  'GraphQL',
  'Prisma',
  'Docker',
  'C/C++',
  'Go',
];

async function main() {
  const profile = await prisma.profile.upsert({
    where: {
      email: 'leonty@example.com',
    },
    update: {
    },
    create: {
      name: 'Leonty',
      email: 'leonty@example.com',
      description: 'Software developer',
    },
  });
    for (const name of skills) {
    const skill = await prisma.skill.upsert({
      where: { name },
      update: {},
      create: { name },
    });

    await prisma.profileSkill.upsert({
      where: {
        profileId_skillId: {
          profileId: profile.id,
          skillId: skill.id,
        },
      },
      update: {},
      create: {
        profileId: profile.id,
        skillId: skill.id,
      },
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });