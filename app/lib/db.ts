v// app/lib/db.ts
import { PrismaClient } from '@prisma/client' // TypeScript now maps this to ./generated/client
import { PrismaLibSql } from '@prisma/adapter-libsql'

// ... the rest of your code remains the same

const adapter = new PrismaLibSql({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
})

const globalForPrisma = global as unknown as { prisma: PrismaClient }

// Note: Exporting as 'prisma' to match your other files
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma