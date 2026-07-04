import React from "react";
import { motion } from "framer-motion";
import bgHeroImg from "../../../assets/bghero.jpg";

const brandLogos = [
  {
    name: "Google",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
      </svg>
    )
  },
  {
    name: "Hostinger",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#673de6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    )
  },
  {
    name: "Vercel",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#000000">
        <path d="M24 22.525H0L12 1.475L24 22.525Z"/>
      </svg>
    )
  },
  {
    name: "Render",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#46e3b7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    name: "Railway",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#f43f5e">
        <path d="M4 18h16v2H4zm0-14h16v2H4zm5 4h6v2H9zm0 4h6v2H9z" />
      </svg>
    )
  },
  {
    name: "Netlify",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#00ad9f">
        <path d="M12 2L2 9.5l10 7.5 10-7.5L12 2zm0 13l-6-4.5L12 6l6 4.5-6 4.5z"/>
      </svg>
    )
  },
  {
    name: "InfinityFree",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#3b82f6">
        <path d="M7 7a5 5 0 0 0-3.5 8.5 5 5 0 0 0 7 0L12 14l1.5 1.5a5 5 0 0 0 7 0 5 5 0 0 0 0-7 5 5 0 0 0-7 0L12 10l-1.5-1.5A5 5 0 0 0 7 7zm0 2a3 3 0 0 1 2.1.9l2.4 2.4-2.4 2.4A3 3 0 0 1 7 15a3 3 0 0 1-2.1-.9 3 3 0 0 1 0-4.2A3 3 0 0 1 7 9zm10 0a3 3 0 0 1 2.1.9 3 3 0 0 1 0 4.2 3 3 0 0 1-4.2 0l-2.4-2.4 2.4-2.4A3 3 0 0 1 17 9z"/>
      </svg>
    )
  },
  {
    name: "Web3Forms",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#ff5f1f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  },
  {
    name: "GoDaddy",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#00a6a0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    name: "Framer",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#000000">
        <path d="M5 2h14l-7 7H5zm7 9h7v6h-7zm-7 6h14v6H5z"/>
      </svg>
    )
  }
];

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-slate-950 overflow-hidden flex flex-col justify-between pt-32">
      
      {/* Background Image & Fade Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100 z-0 pointer-events-none"
        style={{ backgroundImage: `url(${bgHeroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/35 to-white z-0 pointer-events-none" />

      {/* Hero Title & Subheading */}
      <div className="container mx-auto max-w-[1536px] px-6 text-center z-10 flex flex-col items-center gap-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-4xl"
        >
          Building the future with <br />
          Brand and strategy
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed"
        >
          We help organizations unlock growth and efficiency through data-driven consulting and intelligent brand solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center items-center mt-2"
        >
          <button className="border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-extrabold px-8 py-3.5 rounded-[10px] text-sm transition-all duration-300 cursor-pointer">
            VIEW DEMO
          </button>
          <button className="bg-[#ff5f1f] hover:bg-[#e65116] text-white font-extrabold px-8 py-3.5 rounded-[10px] text-sm transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-lg shadow-[#ff5f1f]/25 active:scale-95">
            GET STARTED
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
              <path d="M6 18L18 6M18 6H9M18 6V15" />
            </svg>
          </button>
        </motion.div>

        {/* Golden Rating Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-2 mt-4"
        >
          {/* Overlapping circular client avatars */}
          <div className="flex -space-x-2.5 items-center">
            {[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop"
            ].map((imgUrl, i) => (
              <img 
                key={i} 
                src={imgUrl} 
                alt="SBS Happy Client Profile" 
                className="w-7 h-7 rounded-full object-cover border-2 border-slate-950 flex-shrink-0 shadow-md"
              />
            ))}
            {/* "+" bubble */}
            <div className="w-7 h-7  text-white  flex items-center justify-center text-[20px] font-black shadow-md flex-shrink-0 z-10">
              +
            </div>
          </div>

          <span className="text-xs text-white/80 font-bold uppercase tracking-wider">
            Rated 4.9/5 by 4,900+ clients
          </span>
          <div className="flex gap-1 text-[#FFB800]">
            {"★★★★★".split("").map((star, i) => (
              <span key={i} className="text-sm">★</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3D Curved Perspective Carousel Wrapper */}
      <div className="w-full overflow-hidden mt-12 mb-16 relative z-10">
        <div className="flex justify-center gap-6 overflow-x-auto no-scrollbar py-6 px-12 select-none">
          {/* Card 1 */}
          <div className="relative overflow-hidden flex-shrink-0 w-[240px] h-[320px] rounded-[10px] bg-white border border-slate-100 p-6 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer origin-center transform perspective-[1000px] rotateY-[15deg] translateZ-[-20px] hover:rotateY-0 group">
            {/* Subtle background image */}
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.06] group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop')" }} />
            
            <span className="text-xs font-black text-slate-450 uppercase tracking-wider z-10">Metrics</span>
            <div className="my-auto z-10">
              <h4 className="text-3xl font-black text-slate-900">+248%</h4>
              <p className="text-slate-500 text-xs mt-1 font-semibold">Quarterly Growth rate</p>
            </div>
            <div className="w-8 h-8 rounded-[10px] bg-[#ff5f1f] flex items-center justify-center text-white z-10 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                <path d="M6 18L18 6M18 6H9M18 6V15" />
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden flex-shrink-0 w-[240px] h-[320px] rounded-[10px] bg-white border border-slate-100 p-6 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer origin-center transform perspective-[1000px] rotateY-[10deg] translateZ-[-10px] hover:rotateY-0 group">
            {/* Subtle background image */}
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.06] group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=400&auto=format&fit=crop')" }} />

            <span className="text-xs font-black text-slate-455 uppercase tracking-wider z-10">Engagement</span>
            <div className="my-auto z-10">
              <h4 className="text-3xl font-black text-slate-900">520k+</h4>
              <p className="text-slate-500 text-xs mt-1 font-semibold">Data points analyzed</p>
            </div>
            <div className="w-8 h-8 rounded-[10px] bg-[#C2FF2E] flex items-center justify-center text-black z-10 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="w-4 h-4 text-black">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden flex-shrink-0 w-[240px] h-[320px] rounded-[10px] bg-[#09090B] p-6 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer origin-center transform hover:scale-110 z-20 border border-slate-800 group">
            {/* Subtle background image */}
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.12] group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=400&auto=format&fit=crop')" }} />

            <span className="text-xs font-black text-slate-500 uppercase tracking-wider z-10">Strategy</span>
            <div className="my-auto z-10">
              <h4 className="text-2xl font-black text-white leading-tight">Expertise that combines.</h4>
              <p className="text-slate-400 text-xs mt-1.5 font-semibold">Branding and Analytics.</p>
            </div>
            <div className="w-8 h-8 rounded-[10px] bg-[#ff5f1f] flex items-center justify-center text-white z-10 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" />
              </svg>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative overflow-hidden flex-shrink-0 w-[240px] h-[320px] rounded-[10px] bg-white border border-slate-100 p-6 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer origin-center transform perspective-[1000px] rotateY-[-10deg] translateZ-[-10px] hover:rotateY-0 group">
            {/* Subtle background image */}
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.06] group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop')" }} />

            <span className="text-xs font-black text-slate-450 uppercase tracking-wider z-10">Trust</span>
            <div className="my-auto z-10">
              <h4 className="text-3xl font-black text-slate-900">100%</h4>
              <p className="text-slate-500 text-xs mt-1 font-semibold">Client commitment rate</p>
            </div>
            <div className="w-8 h-8 rounded-[10px] bg-[#C2FF2E] flex items-center justify-center text-black z-10 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-black">
                <path d="M5 13L9 17L19 7" />
              </svg>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative overflow-hidden flex-shrink-0 w-[240px] h-[320px] rounded-[10px] bg-white border border-slate-100 p-6 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer origin-center transform perspective-[1000px] rotateY-[-15deg] translateZ-[-20px] hover:rotateY-0 group">
            {/* Subtle background image */}
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.06] group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop')" }} />

            <span className="text-xs font-black text-slate-450 uppercase tracking-wider z-10">Global</span>
            <div className="my-auto z-10">
              <h4 className="text-3xl font-black text-slate-900">20+</h4>
              <p className="text-slate-500 text-xs mt-1 font-semibold">Sectors transformed</p>
            </div>
            <div className="w-8 h-8 rounded-[10px] bg-[#ff5f1f] flex items-center justify-center text-white z-10 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                <circle cx="12" cy="12" r="9" />
                <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Logo Marquee Banner */}
      <div 
        className="w-full bg-white py-8 border-y border-slate-100 overflow-hidden relative flex z-10"
        style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
      >
        <div className="flex w-max gap-16 animate-marquee">
          {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, idx) => (
            <div key={idx} className="group flex items-center gap-2.5 cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 rounded-[10px] bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 transition-all duration-300 filter grayscale group-hover:grayscale-0">
                {brand.icon}
              </div>
              <span className="text-[10px] font-black text-slate-500 group-hover:text-slate-900 tracking-wider uppercase transition-colors duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
