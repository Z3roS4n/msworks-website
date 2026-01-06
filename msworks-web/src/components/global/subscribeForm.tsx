"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeNewsletter } from "@/app/actions/subscribe-newsletter";
import { NewsletterSubscription, NewsletterSubscriptionSchema } from "@/lib/zod/newsletter";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { Toggle } from "../ui/toggle";

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
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-2">
        <Input
          className="rounded-full"
          type="email"
          placeholder="Inserisci la tua email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <Button className="rounded-full not-md:w-full" type="submit" disabled={!accepted}>
          Iscriviti
        </Button>
      </form>
      <div className="flex flex-row mt-4 gap-2 items-center justify-center">
        <Toggle
          aria-label="Toggle check"
          size="sm"
          pressed={accepted}
          onClick={() => setAccepted(!accepted)}
          variant="outline"
          
          className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
        >
          <BadgeCheck />
        </Toggle> 
        <p>Ho letto e accetto la <Link href="/privacy-policy" className="underline">politica sulla privacy</Link></p>
      </div>
      {errors && <p className="text-sm text-red-500 mt-2">{errors}</p>}
    </>
  );
}