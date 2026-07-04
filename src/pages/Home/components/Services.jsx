import React from "react";

const servicesData = [
  {
    title: "Business Websites",
    description: "Sleek, high-converting corporate portals to represent your brand, present services, and capture leads.",
    tags: ["CORPORATE", "LEAD GEN", "FAST LOAD"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 7H21.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 4.5H6.009M9 4.5H9.009M12 4.5H12.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Landing Pages",
    description: "Single-page, laser-focused promotional designs constructed to convert traffic from marketing campaigns.",
    tags: ["MARKETING", "CONVERSION", "1-PAGE"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 3V21M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "eCommerce Websites",
    description: "Full-scale online stores featuring secure payments, cart logistics, inventory control, and order panels.",
    tags: ["ECOMMERCE", "STRIPE/PAYPAL", "CMS STORE"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <path d="M8 18H18.5L21 7H6M2.5 3.5H4L5 7M5 7L6.5 13.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: "School & College Websites",
    description: "Custom management interfaces, class schedule lists, student portals, and admission pipelines.",
    tags: ["EDUCATION", "PORTALS", "DOCS SETUP"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <path d="M12 3L2 8L12 13L22 8L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10V16C6 18 8 20 12 20C16 20 18 18 18 16V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 8V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Hospital & Clinic Websites",
    description: "Sleek booking portals, medical service catalogs, doctor rosters, and patient contact sections.",
    tags: ["HEALTHCARE", "BOOKING", "MOBILE APP"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: "Real Estate Websites",
    description: "Dynamic property listings, location maps, custom filters, agent detail grids, and contact hooks.",
    tags: ["REAL ESTATE", "MAPS", "FILTER SEARCH"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <path d="M2.5 12L12 3L21.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 10.5V20.5H18.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 15.5H13.5V20.5H10.5V15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Portfolio Websites",
    description: "Interactive visual portfolios for creative artists, architects, designers, and corporate agencies.",
    tags: ["CREATIVE", "PORTFOLIO", "ANIMATED"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 5L6 6M18 5L17 6M5 19L6 18M18 19L17 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Web Applications",
    description: "Custom software tools, dashboards, SaaS platforms, and cloud database integrations built from scratch.",
    tags: ["WEB APP", "REACT/NODE", "DATABASE"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <path d="M16 6L21 11L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 6L3 11L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4.5L10 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Website Redesign",
    description: "Modernize your outdated portal with high-speed performance, clean layouts, and Outfit typography.",
    tags: ["REDESIGN", "PERFORMANCE", "REBRAND"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <path d="M4 16C4 16 3 17 3 18.5C3 20 4.5 21 6.5 21C8.5 21 9.5 19.5 9.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.5 3L21 6.5L10 17.5H6.5V14L17.5 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 6.5L17.5 10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: "Website Maintenance & SEO",
    description: "Monthly security updates, design modifications, site backups, and search engine optimization strategy.",
    tags: ["MAINTENANCE", "SEO AUDIT", "SECURE BACKUP"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

export default function Services({ onQuoteClick }) {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 w-full overflow-hidden border-y border-slate-100">
      <div className="container mx-auto max-w-[1536px]">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-black tracking-widest bg-orange-50 border border-orange-100/50 text-[#ff5f1f] px-4 py-1.5 rounded-[10px] w-fit">
              <span className="w-2 h-2 rounded-[10px] bg-[#ff5f1f] animate-ping" />
              OUR CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-none">
              Services We <br />
              <span className="bg-gradient-to-r from-[#ff5f1f] to-[#C2FF2E] bg-clip-text text-transparent">
                Provide.
              </span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed max-w-sm">
            We deliver exceptional web solutions built with high-performing architectures, responsive designs, and custom functionalities.
          </p>
        </div>

        {/* Services Grid (Responsive from 320px to 4xl, all rounded-[10px]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {servicesData.map((item, idx) => (
            <div
              key={idx}
              onClick={onQuoteClick}
              className="group relative bg-white rounded-[10px] border border-slate-200/60 p-8 flex flex-col justify-between gap-8 shadow-sm hover:shadow-xl hover:border-[#ff5f1f]/30 transition-all duration-500 cursor-pointer hover:-translate-y-1.5"
            >
              <div>
                {/* Header Icon Frame (10px rounded) */}
                <div className="w-12 h-12 rounded-[10px] bg-slate-50 text-slate-800 flex items-center justify-center mb-6 group-hover:bg-[#ff5f1f]/5 group-hover:text-[#ff5f1f] transition-all duration-500">
                  {item.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-slate-950 tracking-tight leading-tight mb-3 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {item.description}
                </p>

                {/* Tags (10px rounded) */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-black uppercase tracking-wider bg-slate-50 border border-slate-100 text-slate-450 px-3 py-1 rounded-[10px] group-hover:bg-[#ff5f1f]/5 group-hover:text-[#ff5f1f] group-hover:border-[#ff5f1f]/10 transition-all duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Link Element (10px rounded) */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <span className="text-xs font-black uppercase tracking-wider text-slate-450 group-hover:text-[#ff5f1f] transition-colors">
                  Discuss Project
                </span>
                <div className="w-8 h-8 rounded-[10px] border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#ff5f1f] group-hover:border-[#ff5f1f] group-hover:text-white transition-all duration-300">
                  <svg className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
