"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeNewsletter } from "@/app/actions/subscribeNewsletter";
import { NewsletterSubscription, NewsletterSubscriptionSchema } from "@/lib/zod/newsletter";
import Link from "next/link";

export const SubscribeForm = () => {
  const [form, setForm] = useState<NewsletterSubscription>({ email: "" });
  const [errors, setErrors] = useState<string | null>("");
  const [accepted, setAccepted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = NewsletterSubscriptionSchema.safeParse(form);
    if (!parsed.success) {
      setErrors("Email non valida!");
      return false;
    }
    setErrors(null);

    subscribeNewsletter(form.email);
    setForm({ email: "" });

    return true;
  };

  return (
    <>
      <h6 className="font-medium">Tieniti aggiornato</h6>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2">
        <Input
          className="rounded-full"
          type="email"
          placeholder="Inserisci la tua email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <Button className="rounded-full" type="submit" disabled={!accepted}>
          Iscriviti
        </Button>
      </form>
      <div className="mt-2 flex items-center">
        <Input
          type="checkbox"
          id="privacyPolicy"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="mr-2 w-10"
        />
        <label htmlFor="privacyPolicy" className="text-sm">
          Acconsento al trattamento dei miei dati personali in conformità con la{" "}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          .
        </label>
      </div>
      {errors && <p className="text-sm text-red-500 mt-2">{errors}</p>}
    </>
  );
}