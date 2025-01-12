import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  console.log('Initializing Prisma Client...');
  console.log('Database URL format check:', {
    hasUrl: !!process.env.DATABASE_URL,
    urlStart: process.env.DATABASE_URL?.substring(0, 20) + '...',
    env: process.env.NODE_ENV
  });

  const client = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    },
    log: ['query', 'error', 'warn']
  });

  // Test the connection
  client.$connect()
    .then(() => console.log('Successfully connected to database'))
    .catch(e => console.error('Failed to connect to database:', e));

  return client;
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma
} 