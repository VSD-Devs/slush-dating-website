import { PrismaClient, Prisma } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prismaConfig: Prisma.PrismaClientOptions = {
  log: process.env.NODE_ENV === 'development' 
    ? ['query', 'error', 'warn'] as const
    : ['error'] as const,
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
};

const prisma = global.prisma || new PrismaClient(prismaConfig);

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma; 