import React from "react";

const usps = [
  {
    title: "Mobile Responsive",
    description: "Every website is optimized to look stunning on small screens, tablets, and massive desktops.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="18" r="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Fast Loading",
    description: "Speed optimized layout structuring that ensures quick page load times and boosts client retention.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "SEO Friendly",
    description: "Search engine friendly tagging and structure to help your business rank higher on Google.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 20L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Modern UI/UX",
    description: "State-of-the-art designs, typography, micro-interactions, and premium layouts that wow visitors.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <rect x="3" y="3" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="16" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="12" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: "WhatsApp Integration",
    description: "Direct instant chat button linking your prospects straight to your sales support teams.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.9103 2.53589 15.6953 3.4641 17.2L2.5 21.5L6.8 20.5359C8.30472 21.4641 10.0897 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Contact Form",
    description: "Secure, reliable, and spam-filtered email messaging forms to gather custom client requests.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 6L12 12L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Domain & Hosting Support",
    description: "End-to-end setup assist. We configure your servers, domain DNS records, and secure SSL certificates.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <rect x="3" y="3" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 6.5H8M7 17.5H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 6.5H17M16 17.5H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Free Maintenance",
    description: "Limited-period post-launch maintenance, text revisions, and monthly structural audits at no extra cost.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
        <path d="M12 2L3 6V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11.5L11 13.5L15 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 w-full overflow-hidden border-t border-slate-100">
      <div className="container mx-auto max-w-[1536px]">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-black tracking-widest bg-orange-50 border border-orange-100/50 text-[#ff5f1f] px-4 py-1.5 rounded-[10px] w-fit">
              <span className="w-2 h-2 rounded-[10px] bg-[#C2FF2E]" />
              WHY CHOOSE SBS
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-none">
              Built For <br />
              <span className="bg-gradient-to-r from-[#ff5f1f] to-[#C2FF2E] bg-clip-text text-transparent">
                High Performance.
              </span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed max-w-sm">
            We don't cut corners. Every product contains a stack of features that guarantees speed, compliance, and user satisfaction.
          </p>
        </div>

        {/* USPs Grid (All cards rounded-[10px]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {usps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[10px] border border-slate-200/50 p-8 flex flex-col gap-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Frame (10px rounded) */}
              <div className="w-12 h-12 rounded-[10px] bg-[#C2FF2E]/25 text-slate-950 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              
              <div>
                <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
