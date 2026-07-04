import React from "react";
import { motion } from "framer-motion";
import bgHeroImg from "../../../assets/bghero.jpg";

const logoNames = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

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
          {[...logoNames, ...logoNames, ...logoNames].map((name, idx) => (
            <div key={idx} className="flex items-center gap-2 cursor-pointer opacity-40 hover:opacity-80 transition-opacity duration-300">
              <div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-white font-extrabold text-[10px]">
                {name[0]}
              </div>
              <span className="text-base font-black text-slate-900 tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
