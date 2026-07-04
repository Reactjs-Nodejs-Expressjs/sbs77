import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Slideshow from '../../components/common/Slideshow';
import ServicesSection from '../../components/services/ServicesSection';
import Testimonials from './components/Testimonials';
import ContactModal from '../../components/common/ContactModal';

const slidesData = [
  {
    image: "https://i.ibb.co/8Lt65NBR/Chat-GPT-Image-Jul-4-2026-11-06-16-PM.png",
    title: "We Shape Brands That\nDefine The Future"
  },
  {
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
    title: "Crafting High-Performance\nDigital Experiences"
  },
  {
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1200&auto=format&fit=crop",
    title: "Strategic Marketing Built For\nImpact and Growth"
  }
];

const servicesData = [
  {
    title: "Brand Strategy & Identity",
    description: "Cohesive brand systems, logo design, typography, color palettes, and style guides that distinguish your brand.",
    tags: ["BRAND STRATEGY", "ART DIRECTION", "LOGO DESIGN", "VISUAL IDENTITY"],
    images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"]
  },
  {
    title: "Web & UI/UX Design",
    description: "Responsive layouts, interactive prototypes, user journey mapping, and clean scalable design systems.",
    tags: ["UI/UX DESIGN", "REBRANDING", "PROTOTYPING", "DESIGN SYSTEMS"],
    images: ["https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop"]
  },
  {
    title: "No-Code Web Development",
    description: "Interactive websites designed to convert. Shipped in Framer & Webflow in 14 days or less.",
    tags: ["FRAMER DEV", "WEBFLOW", "CMS SITES", "INTERACTIVE"],
    images: ["https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"]
  },
  {
    title: "Digital Product Design",
    description: "Custom software interfaces, dashboards, visual telemetry widgets, and user flow optimizations.",
    tags: ["PRODUCT DESIGN", "DASHBOARDS", "SAAS INTERFACE", "FLOWS"],
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"]
  },
  {
    title: "Growth & Search Marketing",
    description: "Content strategy, search engine optimization (SEO), social media templates, and marketing campaigns.",
    tags: ["SEO STRATEGY", "CAMPAIGNS", "CONTENT PLANNING", "GROWTH"],
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"]
  },
  {
    title: "Creative Art Direction",
    description: "Photography direction, campaign themes, visual assets generation, and cohesive corporate designs.",
    tags: ["ART DIRECTION", "COLLATERAL", "ASSETS CREATION", "CAMPAIGNS"],
    images: ["https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600&auto=format&fit=crop"]
  }
];

function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 relative flex flex-col">
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <main className="pt-24 flex-grow">
        <div className="m-[30px]">
          <div className="w-full aspect-[16/9] rounded-[20px] overflow-hidden shadow-2xl relative">
            <Slideshow 
              slides={slidesData}
              duration={4}
              radius={20}
              imageEffect="zoom"
              textEffect="slideUp"
              textColor="#FFFFFF"
              font={{ 
                fontSize: "clamp(1.5rem, 5vw, 4rem)", 
                fontWeight: 800,
                fontFamily: "Plus Jakarta Sans",
                lineHeight: "1.1",
                textTransform: "none"
              }}
            />
          </div>
        </div>
        
        {/* Capabilities Services Cards Grid Section */}
        <ServicesSection services={servicesData} />

        <Testimonials />
      </main>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default Home;
