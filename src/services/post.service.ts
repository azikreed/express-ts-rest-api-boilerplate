import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const list = async () => {
  const posts = await prisma.post.findMany({ include: { User: true } });

  return posts;
};

const create = async (options: CreateOptions) => {
  const post = await prisma.post.create({ data: options });

  return post;
};

export default { list, create };

interface CreateOptions {
  title: string;
  description: string;
  userId: number;
}
