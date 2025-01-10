import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create default author
  const defaultAuthor = await prisma.user.upsert({
    where: { id: 'default-author' },
    update: {},
    create: {
      id: 'default-author',
      name: 'Slush Blog',
      email: 'blog@slush.com',
      image: '/images/logo.png'
    },
  });

  console.log({ defaultAuthor });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 