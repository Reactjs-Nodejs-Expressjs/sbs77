import React from 'react';

const techsRow1 = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  }
];

const techsRow2 = [
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
  },
  {
    name: "Vercel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
  },
  {
    name: "Netlify",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg"
  }
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 bg-slate-50 border-y border-slate-200/60 overflow-hidden relative flex flex-col gap-12">
      
      {/* Header Block */}
      <div className="text-center flex flex-col items-center gap-2 px-6">
        <span className="text-[10px] font-black tracking-widest text-[#FF5300] uppercase">• Our Tech Stack</span>
        <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-none">
          Tools We Leverage.
        </h3>
        <p className="text-slate-500 font-medium text-xs sm:text-sm max-w-sm mt-2">
          We use high-performance frameworks, fast servers, and modern libraries to construct custom platforms.
        </p>
      </div>
      
      {/* Alternating Dual-Track Marquees (Light theme with 10px white card logo frames) */}
      <div className="flex flex-col gap-6">
        
        {/* Row 1: Scrolls Left */}
        <div 
          className="w-full py-2 overflow-hidden relative flex pause-on-hover"
          style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
        >
          <div className="flex w-max gap-6 animate-marquee">
            {[...techsRow1, ...techsRow1, ...techsRow1].map((tech, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3.5 bg-white border border-slate-200/50 rounded-[10px] py-2 px-4 shadow-sm hover:border-[#FF5300]/30 hover:shadow-md transition-all duration-300 cursor-pointer text-slate-800"
              >
                {/* Logo Frame: 10px border radius, white bg */}
                <div className="w-10 h-10 rounded-[10px] bg-white border border-slate-100 flex items-center justify-center p-1.5 flex-shrink-0 shadow-sm">
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'; // Safely hide image if CDN fails
                    }}
                  />
                </div>
                <span className="text-xs font-black uppercase tracking-wider">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls Right (Reverse Direction) */}
        <div 
          className="w-full py-2 overflow-hidden relative flex pause-on-hover"
          style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
        >
          <div className="flex w-max gap-6 animate-marquee-reverse">
            {[...techsRow2, ...techsRow2, ...techsRow2].map((tech, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3.5 bg-white border border-slate-200/50 rounded-[10px] py-2 px-4 shadow-sm hover:border-[#C2FF2E]/60 hover:shadow-md transition-all duration-300 cursor-pointer text-slate-800"
              >
                {/* Logo Frame: 10px border radius, white bg */}
                <div className="w-10 h-10 rounded-[10px] bg-white border border-slate-100 flex items-center justify-center p-1.5 flex-shrink-0 shadow-sm">
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-xs font-black uppercase tracking-wider">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
