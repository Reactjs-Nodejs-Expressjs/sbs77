import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';

export default function Navbar({ onContactClick }) {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'company' | null
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpand, setMobileExpand] = useState(null); // 'services' | 'company' | null

  const closeAll = () => {
    setActiveDropdown(null);
    setIsMobileOpen(false);
    setMobileExpand(null);
  };

  const handleLinkClick = (selector) => {
    closeAll();
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 inset-x-0 mx-auto w-[calc(100%-48px)] max-w-[1400px] z-50 py-3 px-6 sm:px-8 bg-white/95 backdrop-blur-md shadow-xl border border-slate-200/50 rounded-[10px]"
      >
        <div className="w-full">
          <div className="flex items-center justify-between">
            {/* Logo Section (10px rounded image) */}
            <div 
              onClick={() => handleLinkClick('#hero')} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <img 
                src={logoImg} 
                alt="Strategic Brand Solutions Logo" 
                className="w-10 h-10 rounded-[10px] object-cover group-hover:scale-105 transition-transform duration-300 shadow-md border border-slate-100"
              />
              <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Strategic <span className="text-[#ff5f1f]">Brand</span>
              </span>
            </div>
            {/* Desktop Navigation Links (Hidden on Tablet/Mobile) */}
            <div className="hidden lg:flex items-center gap-8 relative">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#hero'); }} 
                className="text-xs font-black uppercase tracking-wider text-slate-700 hover:text-[#ff5f1f] transition-colors"
              >
                Home
              </a>

              {/* Services Dropdown Trigger */}
              <div 
                className=""
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-xs font-black uppercase tracking-wider text-slate-700 hover:text-[#ff5f1f] transition-colors py-2 cursor-pointer">
                  Services
                  <svg className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Services Mega Dropdown Panel (Advanced Split White Layout - w-[700px] Centered) */}
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white border border-slate-200/60 shadow-2xl rounded-[10px] p-5 w-[700px] flex flex-col gap-5 z-50"
                    >
                      {/* Top Row: Services Grid & Featured Card */}
                      <div className="flex gap-6 items-stretch">
                        
                        {/* Left Side: 2-Column Grid (6 key services) */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-4 w-[58%]">
                          
                          {/* Item 1: Business Websites */}
                          <a 
                            href="#services" 
                            onClick={() => handleLinkClick('#services')}
                            className="group flex gap-2.5 p-1.5 rounded-[10px] hover:bg-slate-50 transition-colors"
                          >
                            <div className="w-8.5 h-8.5 bg-orange-50 border border-orange-100/50 rounded-[10px] text-[#ff5f1f] group-hover:bg-[#ff5f1f] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="currentColor" fill="none">
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M2.5 7H21.5" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M6 4.5H6.009M9 4.5H9.009M12 4.5H12.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-[11px] font-black uppercase text-slate-900 group-hover:text-[#ff5f1f] tracking-wider transition-colors">Business Websites</h4>
                              <p className="text-[10px] font-semibold text-slate-500 mt-0.5 leading-snug">Corporate portals & lead generation.</p>
                            </div>
                          </a>

                          {/* Item 2: eCommerce Stores */}
                          <a 
                            href="#services" 
                            onClick={() => handleLinkClick('#services')}
                            className="group flex gap-2.5 p-1.5 rounded-[10px] hover:bg-slate-50 transition-colors"
                          >
                            <div className="w-8.5 h-8.5 bg-orange-50 border border-orange-100/50 rounded-[10px] text-[#ff5f1f] group-hover:bg-[#ff5f1f] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="currentColor" fill="none">
                                <path d="M8 18H18.5L21 7H6M2.5 3.5H4L5 7M5 7L6.5 13.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="8" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="17" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-[11px] font-black uppercase text-slate-900 group-hover:text-[#ff5f1f] tracking-wider transition-colors">eCommerce</h4>
                              <p className="text-[10px] font-semibold text-slate-500 mt-0.5 leading-snug">Online stores & checkout setups.</p>
                            </div>
                          </a>

                          {/* Item 3: Custom Web Apps */}
                          <a 
                            href="#services" 
                            onClick={() => handleLinkClick('#services')}
                            className="group flex gap-2.5 p-1.5 rounded-[10px] hover:bg-slate-50 transition-colors"
                          >
                            <div className="w-8.5 h-8.5 bg-orange-50 border border-orange-100/50 rounded-[10px] text-[#ff5f1f] group-hover:bg-[#ff5f1f] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="currentColor" fill="none">
                                <path d="M16 6L21 11L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 6L3 11L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14 4.5L10 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-[11px] font-black uppercase text-slate-900 group-hover:text-[#ff5f1f] tracking-wider transition-colors">Web Applications</h4>
                              <p className="text-[10px] font-semibold text-slate-500 mt-0.5 leading-snug">Custom SaaS tools & dashboards.</p>
                            </div>
                          </a>

                          {/* Item 4: Real Estate */}
                          <a 
                            href="#services" 
                            onClick={() => handleLinkClick('#services')}
                            className="group flex gap-2.5 p-1.5 rounded-[10px] hover:bg-slate-50 transition-colors"
                          >
                            <div className="w-8.5 h-8.5 bg-orange-50 border border-orange-100/50 rounded-[10px] text-[#ff5f1f] group-hover:bg-[#ff5f1f] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="currentColor" fill="none">
                                <path d="M2.5 12L12 3L21.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.5 10.5V20.5H18.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.5 15.5H13.5V20.5H10.5V15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-[11px] font-black uppercase text-slate-900 group-hover:text-[#ff5f1f] tracking-wider transition-colors">Real Estate</h4>
                              <p className="text-[10px] font-semibold text-slate-500 mt-0.5 leading-snug">Property lists & custom filters.</p>
                            </div>
                          </a>

                          {/* Item 5: Education Portals */}
                          <a 
                            href="#services" 
                            onClick={() => handleLinkClick('#services')}
                            className="group flex gap-2.5 p-1.5 rounded-[10px] hover:bg-slate-50 transition-colors"
                          >
                            <div className="w-8.5 h-8.5 bg-orange-50 border border-orange-100/50 rounded-[10px] text-[#ff5f1f] group-hover:bg-[#ff5f1f] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="currentColor" fill="none">
                                <path d="M12 3L2 8L12 13L22 8L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 10V16C6 18 8 20 12 20C16 20 18 18 18 16V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 8V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-[11px] font-black uppercase text-slate-900 group-hover:text-[#ff5f1f] tracking-wider transition-colors">Edu Portals</h4>
                              <p className="text-[10px] font-semibold text-slate-500 mt-0.5 leading-snug">Schedules & admission workflows.</p>
                            </div>
                          </a>

                          {/* Item 6: Redesign & SEO */}
                          <a 
                            href="#services" 
                            onClick={() => handleLinkClick('#services')}
                            className="group flex gap-2.5 p-1.5 rounded-[10px] hover:bg-slate-50 transition-colors"
                          >
                            <div className="w-8.5 h-8.5 bg-orange-50 border border-orange-100/50 rounded-[10px] text-[#ff5f1f] group-hover:bg-[#ff5f1f] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="currentColor" fill="none">
                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-[11px] font-black uppercase text-slate-900 group-hover:text-[#ff5f1f] tracking-wider transition-colors">Redesign & SEO</h4>
                              <p className="text-[10px] font-semibold text-slate-500 mt-0.5 leading-snug">Optimize speeds & rank higher.</p>
                            </div>
                          </a>

                        </div>

                        {/* Right Side: Featured Card (Unsplash preview, "NEW" badge) */}
                        <div className="w-[42%] bg-slate-50 border border-slate-200/50 p-3.5 rounded-[10px] flex flex-col gap-3 justify-between">
                          <div className="relative w-full h-24 rounded-[10px] overflow-hidden bg-slate-100 flex items-center justify-center">
                            <img 
                              src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=300&auto=format&fit=crop" 
                              alt="Featured Brand Solution Kit" 
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute top-2 left-2 bg-[#ff5f1f] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-[10px]">
                              NEW
                            </span>
                          </div>
                          <div>
                            <h4 className="text-[11px] font-black uppercase text-slate-900 leading-snug">
                              Our Brand Guidelines
                            </h4>
                            <p className="text-[10px] font-semibold text-slate-500 mt-1 leading-normal">
                              Supercharge your store conversion rates with our brand identity kits.
                            </p>
                          </div>
                          <a 
                            href="#services" 
                            onClick={() => handleLinkClick('#services')}
                            className="text-[10px] font-black uppercase tracking-wider text-[#ff5f1f] hover:text-[#e65116] flex items-center gap-1 transition-colors"
                          >
                            Explore kits <span className="text-xs">→</span>
                          </a>
                        </div>

                      </div>

                      {/* Bottom Banner Row: Call to action banner */}
                      <div className="flex items-center justify-between pt-3.5 border-t border-slate-100 bg-slate-50/50 -mx-5 -mb-5 p-3.5 px-5 rounded-b-[10px]">
                        <span className="text-slate-500 text-[10px] sm:text-xs font-extrabold">
                          Not sure where to start? Talk to our designers.
                        </span>
                        <button
                          onClick={() => { closeAll(); onContactClick(); }}
                          className="border border-slate-300 hover:border-[#ff5f1f] bg-transparent text-slate-700 hover:text-[#ff5f1f] text-[9px] px-3.5 py-1.5 rounded-[10px] font-extrabold transition-all cursor-pointer"
                        >
                          Book a demo
                        </button>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Dropdown Trigger */}
              <div 
                className=""
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-xs font-black uppercase tracking-wider text-slate-700 hover:text-[#ff5f1f] transition-colors py-2 cursor-pointer">
                  Company
                  <svg className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Company Mega Dropdown Panel (Advanced Split White Layout - w-[700px] Centered) */}
                <AnimatePresence>
                  {activeDropdown === 'company' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white border border-slate-200/60 shadow-2xl rounded-[10px] p-5 w-[700px] flex flex-col gap-5 z-50"
                    >
                      {/* Top Row: Company Grid & Featured Card */}
                      <div className="flex gap-6 items-stretch">
                        
                        {/* Left Side: 2x2 Grid (4 company links) */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-4 w-[58%]">
                          
                          {/* Item 1: About Us */}
                          <a 
                            href="#about" 
                            onClick={() => handleLinkClick('#about')}
                            className="group flex gap-2.5 p-1.5 rounded-[10px] hover:bg-slate-50 transition-colors"
                          >
                            <div className="w-8.5 h-8.5 bg-orange-50 border border-orange-100/50 rounded-[10px] text-[#ff5f1f] group-hover:bg-[#ff5f1f] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="currentColor" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-[11px] font-black uppercase text-slate-900 group-hover:text-[#ff5f1f] tracking-wider transition-colors">About Us</h4>
                              <p className="text-[10px] font-semibold text-slate-500 mt-0.5 leading-snug">Learn about our team & mission.</p>
                            </div>
                          </a>

                          {/* Item 2: Why Choose Us */}
                          <a 
                            href="#why-choose-us" 
                            onClick={() => handleLinkClick('#why-choose-us')}
                            className="group flex gap-2.5 p-1.5 rounded-[10px] hover:bg-slate-50 transition-colors"
                          >
                            <div className="w-8.5 h-8.5 bg-orange-50 border border-orange-100/50 rounded-[10px] text-[#ff5f1f] group-hover:bg-[#ff5f1f] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="currentColor" fill="none">
                                <path d="M12 2L3 6V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 11.5L11 13.5L15 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-[11px] font-black uppercase text-slate-900 group-hover:text-[#ff5f1f] tracking-wider transition-colors">Why Us</h4>
                              <p className="text-[10px] font-semibold text-slate-500 mt-0.5 leading-snug">Our strategy & tech stack.</p>
                            </div>
                          </a>

                          {/* Item 3: FAQ */}
                          <a 
                            href="#faq" 
                            onClick={() => handleLinkClick('#faq')}
                            className="group flex gap-2.5 p-1.5 rounded-[10px] hover:bg-slate-50 transition-colors"
                          >
                            <div className="w-8.5 h-8.5 bg-orange-50 border border-orange-100/50 rounded-[10px] text-[#ff5f1f] group-hover:bg-[#ff5f1f] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="currentColor" fill="none">
                                <rect x="3" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M3 6L12 12L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-[11px] font-black uppercase text-slate-900 group-hover:text-[#ff5f1f] tracking-wider transition-colors">FAQ</h4>
                              <p className="text-[10px] font-semibold text-slate-500 mt-0.5 leading-snug">Answers to common queries.</p>
                            </div>
                          </a>

                          {/* Item 4: Testimonials */}
                          <a 
                            href="#testimonials" 
                            onClick={() => handleLinkClick('#testimonials')}
                            className="group flex gap-2.5 p-1.5 rounded-[10px] hover:bg-slate-50 transition-colors"
                          >
                            <div className="w-8.5 h-8.5 bg-orange-50 border border-orange-100/50 rounded-[10px] text-[#ff5f1f] group-hover:bg-[#ff5f1f] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="currentColor" fill="none">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M12 3V21M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-[11px] font-black uppercase text-slate-900 group-hover:text-[#ff5f1f] tracking-wider transition-colors">Reviews</h4>
                              <p className="text-[10px] font-semibold text-slate-500 mt-0.5 leading-snug">Read client feedback.</p>
                            </div>
                          </a>

                        </div>

                        {/* Right Side: Featured Card (Unsplash preview, "TEAM" badge) */}
                        <div className="w-[42%] bg-slate-50 border border-slate-200/50 p-3.5 rounded-[10px] flex flex-col gap-3 justify-between">
                          <div className="relative w-full h-24 rounded-[10px] overflow-hidden bg-slate-100 flex items-center justify-center">
                            <img 
                              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=300&auto=format&fit=crop" 
                              alt="Featured Brand Team" 
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute top-2 left-2 bg-[#ff5f1f] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-[10px]">
                              TEAM
                            </span>
                          </div>
                          <div>
                            <h4 className="text-[11px] font-black uppercase text-slate-900 leading-snug">
                              Our Vision & Ethics
                            </h4>
                            <p className="text-[10px] font-semibold text-slate-500 mt-1 leading-normal">
                              Delivering measurable design and custom web solutions globally.
                            </p>
                          </div>
                          <a 
                            href="#about" 
                            onClick={() => handleLinkClick('#about')}
                            className="text-[10px] font-black uppercase tracking-wider text-[#ff5f1f] hover:text-[#e65116] flex items-center gap-1 transition-colors"
                          >
                            Read Story <span className="text-xs">→</span>
                          </a>
                        </div>

                      </div>

                      {/* Bottom Banner Row: Call to action banner */}
                      <div className="flex items-center justify-between pt-3.5 border-t border-slate-100 bg-slate-50/50 -mx-5 -mb-5 p-3.5 px-5 rounded-b-[10px]">
                        <span className="text-slate-500 text-[10px] sm:text-xs font-extrabold">
                          Want to join our global partner network?
                        </span>
                        <button
                          onClick={() => { closeAll(); onContactClick(); }}
                          className="border border-slate-300 hover:border-[#ff5f1f] bg-transparent text-slate-750 hover:text-[#ff5f1f] text-[9px] px-3.5 py-1.5 rounded-[10px] font-extrabold transition-all cursor-pointer"
                        >
                          Contact Us
                        </button>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a 
                href="#pricing" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('#pricing'); }}
                className="text-xs font-black uppercase tracking-wider text-slate-700 hover:text-[#ff5f1f] transition-colors"
              >
                Pricing
              </a>
            </div>

            {/* Right Side Action Button (Floating Style: Text Link + 10px Rounded CTA) */}
            <div className="flex items-center gap-4">
              <button 
                onClick={onContactClick}
                className="text-xs font-black uppercase tracking-wider text-slate-700 hover:text-[#ff5f1f] transition-colors cursor-pointer hidden sm:inline"
              >
                Get a Quote
              </button>
              
              <button 
                onClick={onContactClick}
                className="font-extrabold text-xs sm:text-sm tracking-wide bg-[#ff5f1f] hover:bg-[#e65116] text-white py-2.5 pl-5 pr-3.5 rounded-[10px] shadow-sm hover:shadow transition-all duration-300 cursor-pointer flex items-center gap-3"
              >
                <span>Get Started</span>
                <div className="w-5 h-5 rounded-[10px] bg-slate-950 flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </button>

              {/* Mobile Hamburger Toggle Icon */}
              <button 
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="text-slate-900 focus:outline-none cursor-pointer p-1 lg:hidden ml-2"
              >
                {isMobileOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown Panel (10px rounded corners) */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 mt-3 bg-white border border-slate-200/80 shadow-2xl p-6 rounded-[10px] lg:hidden max-h-[calc(100vh-100px)] overflow-y-auto"
            >
              {/* Navigation Links */}
              <div className="flex flex-col gap-4">
                <a 
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#hero'); }} 
                  className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-50 pb-2"
                >
                  Home
                </a>

                {/* Mobile Expandable Services */}
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setMobileExpand(mobileExpand === 'services' ? null : 'services')}
                    className="w-full flex items-center justify-between text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-50 pb-2 text-left cursor-pointer"
                  >
                    Services
                    <svg className={`w-4.5 h-4.5 transition-transform ${mobileExpand === 'services' ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {mobileExpand === 'services' && (
                    <div className="flex flex-col gap-3 pl-4 pt-2 pb-4">
                      <a href="#services" onClick={() => handleLinkClick('#services')} className="text-xs font-bold uppercase tracking-wider text-slate-500">Web Development</a>
                      <a href="#services" onClick={() => handleLinkClick('#services')} className="text-xs font-bold uppercase tracking-wider text-slate-500">eCommerce Stores</a>
                      <a href="#services" onClick={() => handleLinkClick('#services')} className="text-xs font-bold uppercase tracking-wider text-slate-500">Branding Strategy</a>
                    </div>
                  )}
                </div>

                {/* Mobile Expandable Company */}
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setMobileExpand(mobileExpand === 'company' ? null : 'company')}
                    className="w-full flex items-center justify-between text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-50 pb-2 text-left cursor-pointer"
                  >
                    Company
                    <svg className={`w-4.5 h-4.5 transition-transform ${mobileExpand === 'company' ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {mobileExpand === 'company' && (
                    <div className="flex flex-col gap-3 pl-4 pt-2 pb-4">
                      <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('#about'); }} className="text-xs font-bold uppercase tracking-wider text-slate-500">About Us</a>
                      <a href="#why-choose-us" onClick={(e) => { e.preventDefault(); handleLinkClick('#why-choose-us'); }} className="text-xs font-bold uppercase tracking-wider text-slate-500">Why Us</a>
                      <a href="#faq" onClick={(e) => { e.preventDefault(); handleLinkClick('#faq'); }} className="text-xs font-bold uppercase tracking-wider text-slate-500">FAQ</a>
                    </div>
                  )}
                </div>

                <a 
                  href="#pricing" 
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#pricing'); }}
                  className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-50 pb-2"
                >
                  Pricing
                </a>
              </div>

              {/* Mobile Call-to-action Button */}
              <div className="pt-4 flex flex-col gap-3">
                <button 
                  onClick={() => { closeAll(); onContactClick(); }}
                  className="w-full text-center font-extrabold text-sm tracking-wide bg-[#ff5f1f] hover:bg-[#e65116] text-white py-3.5 rounded-[10px] shadow-md transition-all cursor-pointer flex items-center justify-center gap-3"
                >
                  <span>Get Started</span>
                  <div className="w-5 h-5 rounded-[10px] bg-slate-950 flex items-center justify-center text-white">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
