// prisma.config.js
module.exports = {
  earlyAccess: true,
  datasource: {
    url: process.env.TURSO_DATABASE_URL
  }
};