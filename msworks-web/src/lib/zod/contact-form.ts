import { z } from "zod";

export const ContactFormSchema = z.object({
  email: z.email(),
  name: z.string().min(1, "Il nome è obbligatorio"),
  message: z.string().min(1, "Il messaggio è obbligatorio"),
});

export type ContactForm = z.infer<typeof ContactFormSchema>;