import Contact from '@/components/home/contact';
import LetsConnect from '@/components/home/contact/lets-connect';
import CTA from '@/components/home/cta';
import FAQ from '@/components/home/faq';
import Features from '@/components/home/features';
import Hero from '@/components/home/hero';
import Team from '@/components/home/team';
import Testimonials from '@/components/home/testimonials';
export default function LocalePage() {
  return (
    <main>
      <Hero></Hero>
      <Features></Features>
      <CTA></CTA>
      <Testimonials></Testimonials>
      <Team></Team>
      <Contact></Contact>
      <LetsConnect></LetsConnect>
      <FAQ></FAQ>
    </main>
  );
}