import React from "react";

const pricingPlans = [
  {
    name: "Business Website",
    price: "₹5,999",
    description: "Best for growing companies needing a multi-page professional presence.",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive Layout",
      "Contact Form & Map",
      "WhatsApp & Call Buttons",
      "Standard SEO Tags",
      "3 Months Free Maintenance"
    ],
    buttonText: "Choose Business",
    highlight: false
  },
  {
    name: "Premium Website",
    price: "₹9,999",
    description: "High-end designs with custom animation transitions and optimizations.",
    features: [
      "Up to 10 Pages",
      "Custom UI/UX & Animations",
      "Premium Speed Optimizations",
      "Domain & Hosting Setup",
      "Advanced SEO Tags",
      "6 Months Free Maintenance"
    ],
    buttonText: "Go Premium",
    highlight: true // Orange highlight card
  },
  {
    name: "eCommerce Website",
    price: "₹15,999+",
    description: "Sell products online with inventory catalogs and payment gateways.",
    features: [
      "Online Product Store",
      "Secure Payment Setup",
      "Admin Inventory Dashboard",
      "Cart & Checkout Systems",
      "Full eCommerce SEO Setup",
      "12 Months Free Maintenance"
    ],
    buttonText: "Launch Store",
    highlight: false
  },
  {
    name: "Custom Web App",
    price: "Contact Us",
    description: "Custom software tools, dashboards, SaaS platforms built from scratch.",
    features: [
      "Unlimited Scale",
      "Database Integration",
      "Secure Login Systems",
      "Custom Dashboard Metrics",
      "API Integrations",
      "Dedicated Technical Support"
    ],
    buttonText: "Get Quote",
    highlight: false
  }
];

export default function Pricing({ onQuoteClick }) {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 lg:px-24 bg-white w-full overflow-hidden">
      <div className="container mx-auto max-w-[1536px]">
        {/* Header Block */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-black tracking-widest text-[#ff5f1f] uppercase">• Plan Pricing</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-none">
            Pricing & <span className="text-[#ff5f1f]">Packages.</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed max-w-md mt-2">
            No hidden costs. Simple starting prices for high-quality designs. Choose a package that fits your business scope.
          </p>
        </div>

        {/* Pricing Cards Grid (All rounded-[10px]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-[10px] p-8 flex flex-col justify-between gap-8 border transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md ${
                plan.highlight
                  ? "bg-[#ff5f1f] border-[#ff5f1f] text-white"
                  : "bg-slate-50 border-slate-200/60 text-slate-900"
              }`}
            >
              <div>
                <h3 className="text-lg font-black uppercase tracking-wider mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl sm:text-4xl font-black leading-none tracking-tight">
                    {plan.price}
                  </span>
                </div>
                <p className={`text-xs font-medium leading-relaxed mb-6 ${
                  plan.highlight ? "text-white/80" : "text-slate-500"
                }`}>
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="flex flex-col gap-3 text-xs font-semibold">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${
                          plan.highlight ? "text-[#C2FF2E]" : "text-[#ff5f1f]"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className={plan.highlight ? "text-white" : "text-slate-700"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button (10px Rounded) */}
              <button
                onClick={onQuoteClick}
                className={`w-full py-3.5 rounded-[10px] text-xs font-extrabold transition-all cursor-pointer ${
                  plan.highlight
                    ? "bg-white hover:bg-slate-50 text-[#ff5f1f]"
                    : "bg-slate-900 hover:bg-[#ff5f1f] hover:text-white text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
