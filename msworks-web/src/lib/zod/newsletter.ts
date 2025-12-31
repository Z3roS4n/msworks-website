import { z } from "zod";

export const NewsletterSubscriptionSchema = z.object({
  email: z.email(),
});

export type NewsletterSubscription = z.infer<typeof NewsletterSubscriptionSchema>;