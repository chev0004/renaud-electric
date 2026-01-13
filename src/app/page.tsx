import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SpecialOffers } from './components/SpecialOffers';
import { Testimonials } from './components/Testimonials';
import { WhyChooseUs } from './components/WhyChooseUs';

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <SpecialOffers />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
