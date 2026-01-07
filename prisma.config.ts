import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Standard Node.js process.env won't crash the build 
    // if the variable is missing for a split second.
    url: process.env.DATABASE_URL || "libsql://dummy-url-for-build-stage",
  },
});