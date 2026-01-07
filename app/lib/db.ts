import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql' // Note the lowercase 'ql'

// Create the adapter directly with your Vercel/Turso variables
const adapter = new PrismaLibSql({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
})

const globalForPrisma = global as unknown as { prisma: PrismaClient }

// Use the singleton pattern to avoid multiple connections in development
export const db = globalForPrisma.prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db