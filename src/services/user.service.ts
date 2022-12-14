import { BadRequestException } from '@libs/errors';
import { hashPassword } from '@libs/password';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  errorFormat: 'pretty',
});

const list = async () => {
  const users = await prisma.user.findMany({ select: { id: true, email: true, posts: true } });

  return users;
};

const create = async (input: CreateInput) => {
  const { firstName, lastName, email, password } = input;
  const existedUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existedUser) throw new BadRequestException('Email is already existed.');

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashPassword(password),
    },
  });

  return user;
};

export default { list, create };

interface CreateInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
