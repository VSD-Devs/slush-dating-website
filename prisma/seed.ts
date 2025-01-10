import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create initial blog post about video dating tips
  const firstPost = await prisma.post.upsert({
    where: { id: 'video-dating-tips' },
    update: {},
    create: {
      id: 'video-dating-tips',
      title: '10 Tips for a Great Video Date',
      content: `# How to Have a Great Video Date

Video dating is the modern way to make meaningful connections. Here are our top tips for success:

1. Test your setup beforehand
2. Find good lighting
3. Choose a quiet space
4. Dress to impress
5. Be punctual
6. Ask engaging questions
7. Show genuine interest
8. Be yourself
9. Follow up after the date
10. Stay safe and respect boundaries

Remember, authentic connections start with authentic conversations!`,
      excerpt: 'Make the most of your video dating experience with these essential tips for success.',
      category: 'Dating Tips',
      image: '/images/video-dating-tips.jpg',
      author: 'Slush Team'
    },
  });

  console.log({ firstPost });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 