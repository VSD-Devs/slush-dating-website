import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create sample blog post
  const samplePost = await prisma.post.upsert({
    where: { id: 'sample-post' },
    update: {},
    create: {
      id: 'sample-post',
      title: 'Welcome to Slush Blog',
      content: `# Welcome to Slush Blog

We're excited to share our journey with you! This blog will be your go-to source for:

- Dating tips and advice
- Success stories
- Product updates
- Community highlights

Stay tuned for more exciting content!`,
      excerpt: 'Welcome to the official Slush blog where we share dating insights, success stories, and updates.',
      category: 'Announcements',
      image: '/images/welcome-post.jpg',
      author: 'Slush Team'
    },
  });

  console.log({ samplePost });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 