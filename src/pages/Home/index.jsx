import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import Technologies from './components/Technologies';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactModal from '../../components/common/ContactModal';

function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 relative flex flex-col scroll-smooth">
      {/* Fixed Header Navbar */}
      <Navbar onContactClick={openContact} />
      
      {/* High-Fidelity Sections */}
      <main className="flex-grow pt-0">
        <Hero />
        <About />
        <Services onQuoteClick={openContact} />
        <Pricing onQuoteClick={openContact} />
        <WhyChooseUs />
        <Technologies />
        <Testimonials />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Contact Hook */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}

export default Home;
