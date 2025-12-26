import Contact from '@/components/home/contact';
import FAQ from '@/components/home/faq';
import Features from '@/components/home/features';
import Hero from '@/components/home/hero';
import LogoCloud from '@/components/home/logo-cloud';
import Team from '@/components/home/team';
import Testimonials from '@/components/home/testimonials';
export default function LocalePage() {
  return (
    <main>
      <Hero></Hero>
      <Features></Features>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Team></Team>
      <FAQ></FAQ>
    </main>
  );
}