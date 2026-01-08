import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

// 1. Define the config clearly
const config = {
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
}

// 2. Create the adapter using the CONFIG, not the client
// This satisfies: "Parameter of type 'Config'"
const adapter = new PrismaLibSql(config)

// 3. Initialize Prisma
export const prisma = new PrismaClient({ adapter })