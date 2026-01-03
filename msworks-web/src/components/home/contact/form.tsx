"use client";

import { sendContactForm } from "@/app/actions/send-contact-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";
import { ContactFormSchema } from "@/lib/zod/contact-form";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ContactForm = () => {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ accepted, setAccepted ] = useState(false);
  const [ errors, setErrors ] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!accepted) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const parsed = ContactFormSchema.safeParse({ email, name, message });
    if(!parsed.success) {
      return setErrors("Per favore, compila tutti i campi correttamente.");
    }

    await sendContactForm(formData);

    setName("");
    setEmail("");
    setMessage("");
    setAccepted(false);
  };

  return (
    <div className="mt-14 flex lg:flex-row md:flex-row flex-col justify-center gap-8">
      <div className="border border-dashed w-full lg:w-1/2 md:w-2/3 bg-muted/40 p-6 pb-8 rounded-xl">
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
          <Label>Nome e Cognome</Label>
          <Input className="rounded-full" value={name} onChange={(e) => setName(e.target.value)}></Input>
          <Label>Il tuo miglior indirizzo Email</Label>
          <Input className="rounded-full" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
          <Label>Messaggio</Label>
          <Input className="rounded-2xl h-32" value={message} onChange={(e) => setMessage(e.target.value)}></Input>
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
          <Button disabled={!accepted} type="submit" className="rounded-full mt-4 w-full">Invia Messaggio</Button>
          {errors && <p className="text-sm text-red-500 mt-2 text-center">{errors}</p>}
        </form>
      </div>
    </div>
  )
}

export default ContactForm;