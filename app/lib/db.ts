// app/lib/db.ts
import { PrismaClient } from '@/generated/client/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL ?? "libsql://dummy-url",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const prisma =
  globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;