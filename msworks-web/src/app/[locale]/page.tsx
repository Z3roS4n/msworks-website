import Contact from '@/components/contact';
import FAQ from '@/components/faq';
import Features from '@/components/features';
import Hero from '@/components/home/hero';
import LogoCloud from '@/components/logo-cloud';
import Team from '@/components/team';
import Testimonials from '@/components/testimonials';
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