// src/lib/prisma.ts
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

declare global {
  // evita errori con hot reload
  var __prismaClient__: PrismaClient | undefined;
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const client =
  global.__prismaClient__ ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV === "development") {
  global.__prismaClient__ = client;
}

export const prisma = client;

export default prisma;

export async function disconnectPrisma() {
  try {
    await prisma.$disconnect();
  } catch {
    // ignore
  }
}
