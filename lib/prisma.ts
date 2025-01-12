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

  // Test the connection with detailed error logging
  client.$connect()
    .then(() => console.log('Successfully connected to database'))
    .catch(e => {
      console.error('Failed to connect to database:', e);
      console.error('Connection details:', {
        error: e.message,
        code: e.code,
        meta: e.meta
      });
    });

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