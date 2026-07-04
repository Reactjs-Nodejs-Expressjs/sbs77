import React from "react";

const cardsData = [
  {
    id: 1,
    name: "Saman Malik",
    role: "Customer Support Lead",
    quote: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Briana Patton",
    role: "Operations Manager",
    quote: "This platform revolutionized our operations, streamlining client pipelines and digital assets. The cloud-based system keeps us productive anywhere.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Bilal Ahmed",
    role: "IT Manager",
    quote: "Implementing this system was smooth and quick. The customizable, user-friendly interface made team training completely effortless.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Benjamin Hart",
    role: "Marketing Director",
    quote: "Highly recommend Strategic Brand Solutions. Their responsive design work completely elevated our conversion rate in a few weeks.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Elena Rostova",
    role: "Product Owner",
    quote: "We saw our store leads double in the first three weeks post-redesign. Exceptionally fast and professional service throughout.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
  }
];

// Duplicate list for infinite scroll marquee
const marqueeItems = [...cardsData, ...cardsData, ...cardsData];

const Card = ({ item }) => {
  return (
    <div 
      className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[380px] h-[220px] rounded-[10px] bg-white border border-slate-200/50 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
    >
      {/* Top: Review Quote */}
      <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
        "{item.quote}"
      </p>

      {/* Bottom: Client Profile info (10px Rounded square avatar) */}
      <div className="flex items-center gap-3">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-10 h-10 rounded-[10px] object-cover border border-slate-100 flex-shrink-0 shadow-sm"
          onError={(e) => {
            e.target.style.display = 'none'; // Fallback if image fails to load
          }}
        />
        <div className="flex flex-col">
          <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
            {item.name}
          </h4>
          <span className="text-[10px] sm:text-xs font-semibold text-slate-450 leading-tight mt-0.5">
            {item.role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100/80" id="testimonials">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1536px] mb-12 text-center">
        <span className="text-xs font-black tracking-widest text-[#ff5f1f] uppercase">• Reviews</span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight mt-2 leading-none">
          Client Feedback.
        </h2>
      </div>

      {/* Testimonials Infinite Marquee */}
      <div 
        className="relative w-full flex overflow-hidden py-4 pause-on-hover"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div className="flex gap-6 w-max animate-marquee">
          {marqueeItems.map((item, idx) => (
            <Card key={`marquee-review-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
