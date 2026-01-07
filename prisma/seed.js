const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  await prisma.post.create({ data: { title: "Test", body: "It works!" , details: "testing" } });
  console.log("Done!");
}
main();