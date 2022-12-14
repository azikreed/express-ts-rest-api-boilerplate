import { UnauthorizedException } from '@libs/errors';
import { signToken } from '@libs/jwt';
import { comparePassword } from '@libs/password';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  errorFormat: 'pretty',
});

const login = async (input: LoginInput) => {
  const { email, password } = input;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !comparePassword(password, user.password))
    throw new UnauthorizedException('Incorrect credential');

  return signToken({ user: { id: user.id, email: user.email } });
};

export default { login };

interface LoginInput {
  email: string;
  password: string;
}
