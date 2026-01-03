import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  Github,
  GithubIcon,
  InstagramIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";
import { subscribeNewsletter } from "@/app/actions/subscribe-newsletter";
import { SubscribeForm } from "./subscribeForm";

const footerLinks = [
  {
    title: "Features",
    href: "/#features",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
];

const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
            <div>
              {/* Logo */}
              <Logo></Logo>

              <ul className="mt-6 flex items-center gap-4 flex-wrap">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <a
                      href={href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe Newsletter */}
            <div className="md:max-w-xs w-full flex flex-col gap-1">
              <SubscribeForm></SubscribeForm>
            </div>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            <span>
              P.IVA 07344720821
            </span>
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <a href="https://msworks.it" target="_blank" rel="noopener noreferrer">
                M&apos;s Works
              </a>
              . Tutti i diritti sono riservati.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <a href="https://github.com/msworks-it">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/msworks.it">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
