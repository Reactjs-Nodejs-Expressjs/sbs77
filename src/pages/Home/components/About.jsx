import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-white w-full overflow-hidden">
      <div className="container mx-auto max-w-[1536px]">
        {/* Header Block */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-black tracking-widest text-[#ff5f1f] uppercase">• About Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1] max-w-4xl">
            A global branding partner <br />
            dedicated to building{" "}
            <span className="inline-flex items-center gap-2 bg-[#ff5f1f]/10 text-[#ff5f1f] px-4 py-1.5 rounded-[10px] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black align-middle">
              <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7V12L15 14" />
              </svg>
              smarter
            </span>{" "}
            <br className="hidden sm:inline" />
            and{" "}
            <span className="inline-flex items-center gap-2 bg-[#C2FF2E]/25 text-[#09090B] px-4 py-1.5 rounded-[10px] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black align-middle">
              <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6M10 21h4M12 3c-3.87 0-7 3.13-7 7c0 2.38 1.19 4.47 3 15.74V18h8v-2.26c1.81-1.27 3-3.36 3-15.74c0-3.87-3.13-7-7-7z" />
              </svg>
              more adaptive
            </span>
          </h2>
        </div>

        {/* 4-Widget Grid (All rounded-[10px]) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mt-12">
          
          {/* Card 1: 120+ Collaborating */}
          <div className="col-span-12 lg:col-span-7 rounded-[10px] bg-[#ff5f1f] text-white p-8 md:p-10 flex flex-col justify-between gap-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-8 right-8 w-12 h-12 rounded-[10px] bg-white/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-6xl sm:text-7xl font-black tracking-tighter">120+</h3>
              <p className="text-white/85 text-base sm:text-lg font-bold leading-snug max-w-sm mt-4">
                Collaborating with leading branding and digital technology partners.
              </p>
            </div>
            
            <div className="flex items-center gap-3 mt-4">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" 
                alt="SBS Client Partner" 
                className="w-12 h-12 rounded-[10px] object-cover border border-white/20"
              />
              <div className="text-xs">
                <p className="font-extrabold">Alexandra Rivers</p>
                <p className="text-white/60">Creative Lead at Rivers Media</p>
              </div>
            </div>
          </div>

          {/* Card 2: 100% Commitment */}
          <div className="col-span-12 lg:col-span-5 rounded-[10px] bg-slate-50 border border-slate-100 p-8 md:p-10 flex flex-col justify-between gap-6 shadow-sm">
            <div>
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Commitment to measurable</span>
              <h3 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight mt-2">100%</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-semibold italic">
              "Their design-to-development strategy completely reshaped how we launch products. It is efficient, intelligent, and seamless."
            </p>
            
            <div className="flex -space-x-3 overflow-hidden">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
              ].map((avatar, i) => (
                <img 
                  key={i}
                  src={avatar} 
                  alt="" 
                  className="inline-block h-8 w-8 rounded-[10px] ring-2 ring-white object-cover"
                />
              ))}
            </div>
          </div>

          {/* Card 3: Data Points */}
          <div className="col-span-12 lg:col-span-8 rounded-[10px] bg-[#C2FF2E] text-black p-8 md:p-10 flex flex-col justify-between gap-8 shadow-sm">
            <div>
              <span className="text-xs font-black text-black/40 uppercase tracking-widest">Data Points</span>
              <h3 className="text-5xl sm:text-6xl font-black tracking-tight mt-2">520k+</h3>
            </div>
            <p className="text-black/85 text-base sm:text-lg font-bold leading-snug max-w-md">
              Analyzed monthly to power smarter and high-performing digital marketing and web designs.
            </p>
          </div>

          {/* Card 4: Continents */}
          <div className="col-span-12 lg:col-span-4 rounded-[10px] bg-[#09090B] text-white p-8 md:p-10 flex flex-col justify-between gap-12 border border-slate-800 shadow-xl">
            <div>
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Industries & Verticals</span>
              <h3 className="text-5xl font-black text-white tracking-tight mt-2">20+</h3>
            </div>
            <div className="flex items-center justify-between text-[#C2FF2E]">
              <span className="text-xs font-black uppercase tracking-wider">Strategic Scale</span>
              <div className="w-8 h-8 rounded-[10px] border border-[#C2FF2E]/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#C2FF2E]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
