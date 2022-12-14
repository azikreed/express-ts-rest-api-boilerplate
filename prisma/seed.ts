import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcryptjs';
const prisma = new PrismaClient({
  log: ['query'],
});

async function main() {
  // Init User
  const initUser = await prisma.user.upsert({
    where: { email: 'sinh@email.com' },
    update: {},
    create: {
      firstName: 'Sinh',
      lastName: 'Noun',
      email: 'sinh@email.com',
      password: hashSync('password@12345'),
      role: 'Admin',
    },
  });

  console.log({ initUser });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
