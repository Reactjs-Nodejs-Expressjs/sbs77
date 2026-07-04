import React from "react";
import logoImg from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#09090B] text-slate-400 py-20 px-6 md:px-12 lg:px-24 border-t border-slate-900 relative overflow-hidden">
      <div className="container mx-auto max-w-[1536px]">
        {/* Main Footer Content */}
        <div className="row flex flex-wrap -mx-4 justify-between gap-y-12">
          {/* Brand Info Column */}
          <div className="col-12 col-lg-4 px-4 flex flex-col items-start gap-6">
            <div className="flex items-center gap-3 cursor-pointer group">
              <img 
                src={logoImg} 
                alt="Strategic Brand Solutions Logo" 
                className="w-12 h-12 rounded-[10px] object-cover group-hover:scale-105 transition-transform duration-300 border border-slate-800"
              />
              <span className="text-xl font-extrabold tracking-tight text-white">
                Strategic<span className="text-[#ff5f1f]">Brand</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              Strategic Brand Solutions is a premium design and development agency. We craft high-converting websites, web apps, and immersive digital platforms.
            </p>
            <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider">
              © 2026 Strategic Brand Solutions. All rights reserved.
            </span>
          </div>

          {/* Links Columns */}
          <div className="col-12 col-lg-8 px-4">
            <div className="row flex flex-wrap -mx-4 gap-y-8">
              {/* Quick Links */}
              <div className="col-6 col-sm-3 px-4 flex flex-col gap-4">
                <h4 className="text-white text-xs font-bold uppercase tracking-widest">Quick Links</h4>
                <ul className="flex flex-col gap-2.5 text-sm font-medium">
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>

              {/* Services Column */}
              <div className="col-6 col-sm-3 px-4 flex flex-col gap-4">
                <h4 className="text-white text-xs font-bold uppercase tracking-widest">Services</h4>
                <ul className="flex flex-col gap-2.5 text-sm font-medium">
                  <li><a href="#services" className="hover:text-white transition-colors">Landing Pages</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">eCommerce</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Web Apps</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">SEO Friendly</a></li>
                </ul>
              </div>

              {/* Company Column */}
              <div className="col-6 col-sm-3 px-4 flex flex-col gap-4">
                <h4 className="text-white text-xs font-bold uppercase tracking-widest">Company</h4>
                <ul className="flex flex-col gap-2.5 text-sm font-medium">
                  <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>

              {/* Socials Column */}
              <div className="col-6 col-sm-3 px-4 flex flex-col gap-4">
                <h4 className="text-white text-xs font-bold uppercase tracking-widest">Social</h4>
                <ul className="flex flex-col gap-2.5 text-sm font-medium">
                  <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Large Faded Branding Banner */}
        <div className="relative text-center mt-20 select-none overflow-hidden pb-4">
          <span 
            className="text-[14vw] font-black tracking-tighter text-slate-900/60 leading-none bg-gradient-to-b from-[#18181B] to-[#09090B] bg-clip-text text-transparent hover:from-[#ff5f1f] hover:to-[#C2FF2E] transition-all duration-1000 cursor-default"
          >
            STRATEGIC
          </span>
        </div>
      </div>
    </footer>
  );
}
