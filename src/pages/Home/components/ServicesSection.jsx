import React, { useState, useRef, useEffect } from "react";

// ─── Slider images data ───
const servicesData = [
  {
    title: "Brand Strategy & Identity",
    description: "Cohesive brand systems, logo design, typography, color palettes, and style guides that distinguish your brand.",
    tags: ["BRAND STRATEGY", "ART DIRECTION", "LOGO DESIGN", "VISUAL IDENTITY"],
    images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"]
  },
  {
    title: "Web & UI/UX Design",
    description: "Responsive layouts, interactive prototypes, user journey mapping, and clean scalable design systems.",
    tags: ["UI/UX DESIGN", "REBRANDING", "PROTOTYPING", "DESIGN SYSTEMS"],
    images: ["https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop"]
  },
  {
    title: "No-Code Web Development",
    description: "Interactive websites designed to convert. Shipped in Framer & Webflow in 14 days or less.",
    tags: ["FRAMER DEV", "WEBFLOW", "CMS SITES", "INTERACTIVE"],
    images: ["https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"]
  },
  {
    title: "Digital Product Design",
    description: "Custom software interfaces, dashboards, visual telemetry widgets, and user flow optimizations.",
    tags: ["PRODUCT DESIGN", "DASHBOARDS", "SAAS INTERFACE", "FLOWS"],
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"]
  },
  {
    title: "Growth & Search Marketing",
    description: "Content strategy, search engine optimization (SEO), social media templates, and marketing campaigns.",
    tags: ["SEO STRATEGY", "CAMPAIGNS", "CONTENT PLANNING", "GROWTH"],
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"]
  },
  {
    title: "Creative Art Direction",
    description: "Photography direction, campaign themes, visual assets generation, and cohesive corporate designs.",
    tags: ["ART DIRECTION", "COLLATERAL", "ASSETS CREATION", "CAMPAIGNS"],
    images: ["https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600&auto=format&fit=crop"]
  }
];

// ─── Image Slider Component ───
function ImageSlider({ images }) {
  const [active, setActive] = useState(0);
  const startX = useRef(0);
  const startY = useRef(0);
  const total = images.length;

  useEffect(() => {
    setActive(0);
  }, [images.length]);

  const go = (i) => setActive((i + total) % total);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    const dx = startX.current - e.changedTouches[0].clientX;
    const dy = Math.abs(startY.current - e.changedTouches[0].clientY);
    if (Math.abs(dx) > 30 && Math.abs(dx) > dy) go(active + (dx > 0 ? 1 : -1));
  };

  const onMouseDown = (e) => {
    startX.current = e.clientX;
  };

  const onMouseUp = (e) => {
    const dx = startX.current - e.clientX;
    if (Math.abs(dx) > 30) go(active + (dx > 0 ? 1 : -1));
  };

  if (!total) return null;

  return (
    <div
      style={s.sliderWrap}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {images.map((src, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === active ? 1 : 0,
            transition: "opacity 0.4s ease",
            pointerEvents: i === active ? "auto" : "none"
          }}
        >
          <img
            src={src}
            alt=""
            draggable={false}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              pointerEvents: "none"
            }}
          />
        </div>
      ))}
      {total > 1 && (
        <div style={s.dotsRow}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setActive(i);
              }}
              style={{
                ...s.dot,
                background: i === active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.45)",
                transform: i === active ? "scale(1.35)" : "scale(1)"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Default Folder Icon Component ───
function DefaultFolderIcon() {
  return (
    <svg
      width="44"
      height="38"
      viewBox="0 0 52 44"
      fill="none"
      className="text-slate-900"
    >
      <rect x="0" y="12" width="52" height="32" rx="6" fill="currentColor" />
      <rect x="0" y="8" width="22" height="12" rx="4" fill="currentColor" />
      <rect x="1" y="13" width="50" height="2" fill="#FF5300" />
    </svg>
  );
}

// ─── Service Card Component ───
function ServiceCard({ item, cardBg, cardRadius, tagBg, tagColor, tagDotColor }) {
  const {
    icon,
    title,
    description,
    tags = [],
    images = []
  } = item;

  return (
    <div
      className="flex flex-col overflow-hidden shadow-lg border border-slate-100/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{
        background: cardBg || "#ffffff",
        borderRadius: cardRadius ?? 24,
        height: "100%"
      }}
    >
      <div className="p-8 flex-grow flex flex-col justify-between">
        <div>
          {/* Icon */}
          <div className="flex justify-start mb-6">
            {icon ? (
              <img src={icon} alt="" className="w-12 h-12 object-contain" />
            ) : (
              <DefaultFolderIcon />
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-3 tracking-tight leading-tight">
            {title || "Service Title"}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
            {description || "Short description of the service goes here."}
          </p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-wider uppercase px-3 py-1.5 rounded-full"
                style={{
                  background: tagBg || "#f3f4f6",
                  color: tagColor || "#374151"
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: tagDotColor || "#FF5300" }}
                />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Slider Images */}
      {images.length > 0 && <ImageSlider images={images} />}
    </div>
  );
}

// ─── Main Services Section Component ───
export default function ServicesSection(props) {
  const {
    sectionBg = "#fafafa",
    cardBg = "#ffffff",
    cardRadius = 24,
    tagBg = "#f3f4f6",
    tagColor = "#374151",
    tagDotColor = "#FF5300"
  } = props;

  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 xl:px-12 w-full"
      style={{ background: sectionBg }}
    >
      <div className="container mx-auto max-w-[1536px]">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-black tracking-widest bg-violet-50 border border-violet-100 text-[#7C3AED] px-4 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#FF5300] animate-pulse" />
              OUR CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-none">
              Services We <br />
              <span className="bg-gradient-to-r from-[#FF5300] to-[#7C3AED] bg-clip-text text-transparent">
                Excel In.
              </span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed max-w-sm">
            We combine high-level strategy, premium design, and rapid development to deliver exceptional brand experiences.
          </p>
        </div>

        {/* Services Grid (Highly Responsive from 320px to 4xl) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {servicesData.map((item, i) => (
            <ServiceCard
              key={i}
              item={item}
              cardBg={cardBg}
              cardRadius={cardRadius}
              tagBg={tagBg}
              tagColor={tagColor}
              tagDotColor={tagDotColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Inline CSS overrides for complex element layers ───
const s = {
  sliderWrap: {
    position: "relative",
    overflow: "hidden",
    paddingTop: "65%",
    flexShrink: 0,
    cursor: "grab",
    userSelect: "none",
    background: "#f3f4f6"
  },
  dotsRow: {
    position: "absolute",
    bottom: 14,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: 6,
    zIndex: 2
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    border: "none",
    padding: 0,
    cursor: "pointer",
    transition: "all 0.22s ease"
  }
};
