"use server";

import { prisma } from "@/lib/prisma";
import { NewsletterSubscriptionSchema } from "@/lib/zod/newsletter";

export async function subscribeNewsletter(email: string) {
  const parsed = NewsletterSubscriptionSchema.safeParse({ email });
  if (!parsed.success) {
    throw new Error("Invalid email");
  }

  await prisma.newsletterSubscriber.upsert({
    where: { email },
    update: {},
    create: { email },
  });

  return { success: true };
}