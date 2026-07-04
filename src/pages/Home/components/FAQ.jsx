import React, { useState } from "react";

const faqs = [
  {
    question: "How long does development take?",
    answer: "Landing pages and simple landing web profiles take around 7 to 10 days. A standard multi-page business website takes 2 weeks, while larger custom web apps or e-commerce platforms can take 3 to 6 weeks depending on requirements."
  },
  {
    question: "Do you provide domain and hosting?",
    answer: "Yes, we help set up and configure premium hosting packages (such as Hostinger, Vercel, Netlify) and direct domain names. SSL security configuration is included free of charge with all setups."
  },
  {
    question: "Can I update my website later?",
    answer: "Absolutely. We build all our sites on clean, editable architectures or with easy-to-use CMS interfaces (like Webflow or Framer CMS) so you can update pricing, blogs, images, and text descriptions without coding."
  },
  {
    question: "Do you provide maintenance?",
    answer: "Every website includes a free maintenance period (ranging from 1 month to 1 year depending on the package you choose). Post-maintenance packages are available for server hosting support and content updates."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We support major digital payments: UPI, direct Bank Transfer (IMPS/NEFT), Razorpay, Stripe, credit cards, and PayPal for international campaigns. Terms are typically split into a deposit and balance upon approval."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 w-full overflow-hidden border-t border-slate-100">
      <div className="container mx-auto max-w-[800px]">
        {/* Header Block */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-black tracking-widest text-[#ff5f1f] uppercase">• FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight mt-2 leading-none">
            Common Questions.
          </h2>
          <p className="text-slate-500 font-medium text-sm leading-relaxed mt-2 max-w-sm">
            Everything you need to know about our web development pipelines, domain setups, and maintenance schedules.
          </p>
        </div>

        {/* Collapsible Accordion Grid (All rounded-[10px]) */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[10px] border border-slate-200/60 overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer select-none group"
                >
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-[#ff5f1f] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-[10px] flex items-center justify-center transition-all ${
                      isOpen ? "bg-[#ff5f1f] text-white" : "bg-slate-100 text-slate-650"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>

                {/* Collapsible Content */}
                <div
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="p-6 pt-0 border-t border-slate-50 text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
