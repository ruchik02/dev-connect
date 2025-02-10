// Commented out for frontend development
/*
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
*/

// Temporary mock prisma client for frontend development
export const prisma = {
  user: {
    findUnique: async () => null,
    create: async () => ({}),
  },
} as any; 