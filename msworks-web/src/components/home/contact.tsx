import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact = () => (
  <div className="min-h-screen flex items-center justify-center pt-12 md:pt-16 pb-16">
    <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
        <h2 className="text-4xl md:text-[2.75rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto sm:text-center">
          Get in Touch with Us
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">
          We&apos;d love to hear from you! Whether you have questions, feedback, or
          just want to say hello, our team is here to assist you. Reach out to us
          through any of the following methods:
        </p>
      <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="border border-dashed bg-muted/40 p-6 pb-8 rounded-xl">
          <div className="h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/8 text-foreground rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Email</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Our friendly team is here to help.
          </p>
          <Link
            className="font-medium"
            href="mailto:akashmoradiya3444@gmail.com"
          >
            akashmoradiya3444@gmail.com
          </Link>
        </div>
        <div className="border border-dashed bg-muted/40 p-6 pb-8 rounded-xl">
          <div className="h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/8 text-foreground rounded-full">
            <MessageCircle />
          </div>
          <h3 className="mt-8 font-bold text-xl">Live chat</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Our friendly team is here to help.
          </p>
          <Link className="font-medium" href="#">
            Start new chat
          </Link>
        </div>
        <div className="border border-dashed bg-muted/40 p-6 pb-8 rounded-xl">
          <div className="h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/8 text-foreground rounded-full">
            <MapPinIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Office</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Come say hello at our office HQ.
          </p>
          <Link
            className="font-medium"
            href="https://map.google.com"
            target="_blank"
          >
            100 Smith Street Collingwood <br /> VIC 3066 AU
          </Link>
        </div>
        <div className="border border-dashed bg-muted/40 p-6 pb-8 rounded-xl">
          <div className="h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/8 text-foreground rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Phone</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Mon-Fri from 8am to 5pm.
          </p>
          <Link className="font-medium" href="tel:akashmoradiya3444@gmail.com">
            +1 (555) 000-0000
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
