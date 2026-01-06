"use server";

import { prisma } from "@/lib/prisma";
import { ContactFormSchema } from "@/lib/zod/contact-form";

export async function sendContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const parsed = ContactFormSchema.safeParse({ email, name, message });
  if (!parsed.success) {
    throw new Error("Invalid email");
  }

  await prisma.contactMessage.create({
    data: {
      name,
      email,
      message,
    },
  });
  return { success: true };
}