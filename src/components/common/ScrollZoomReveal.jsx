import React, { useState, useEffect, useRef, startTransition } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollZoomReveal(props) {
  const {
    image = { src: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=2000&q=80", alt: "Showreel background" },
    videoSrc = "",
    leftText = "©2026",
    rightText = "Showreel",
    buttonText = "Play showreel",
    buttonLink = "#",
    textColor = "#1e293b",
    buttonTextColor = "#FFFFFF",
    buttonBgColor = "#FF5300",
    animationStiffness = 90,
    animationDamping = 25,
    animationMass = 0.6,
    leftFont = {},
    rightFont = {},
    buttonFont = {},
    iconType = "play",
    customIconSvg = ""
  } = props;

  const ref = useRef(null);

  /* ----------------------------------
        RESPONSIVE BREAKPOINT DETECTION
     ----------------------------------- */
  const [screen, setScreen] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 810) {
        startTransition(() => setScreen("mobile"));
      } else if (window.innerWidth <= 1799) {
        startTransition(() => setScreen("tablet"));
      } else {
        startTransition(() => setScreen("desktop"));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ----------------------------------
        RESPONSIVE VALUES
     ----------------------------------- */
  const responsive = {
    desktop: {
      leftFont: "55px",
      rightFont: "55px",
      textWidth: "250px",
      centerFont: "56px",
      playSize: "60px",
      gap: "20px",
      startWidth: "15vw",
      startHeight: "5vh"
    },
    tablet: {
      leftFont: "40px",
      rightFont: "40px",
      textWidth: "160px",
      centerFont: "42px",
      playSize: "52px",
      gap: "16px",
      startWidth: "15vw",
      startHeight: "5vh"
    },
    mobile: {
      leftFont: "22px",
      rightFont: "22px",
      textWidth: "100px",
      centerFont: "26px",
      playSize: "42px",
      gap: "10px",
      startWidth: "15vw",
      startHeight: "5vh"
    }
  };

  const current = responsive[screen];

  /* ----------------------------------
        SCROLL ANIMATION
     ----------------------------------- */
  const imageSrc = image?.src || "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=2000&q=80";
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const rawWidth = useTransform(scrollYProgress, [0, 1], [current.startWidth, "100vw"]);
  const rawHeight = useTransform(scrollYProgress, [0, 1], [current.startHeight, "100vh"]);
  const rawRadius = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const width = useSpring(rawWidth, {
    stiffness: animationStiffness,
    damping: animationDamping,
    mass: animationMass
  });
  
  const height = useSpring(rawHeight, {
    stiffness: animationStiffness,
    damping: animationDamping,
    mass: animationMass
  });

  const borderRadius = useSpring(rawRadius, {
    stiffness: animationStiffness,
    damping: animationDamping
  });

  /* ----------------------------------
        TEXT ANIMATION
     ----------------------------------- */
  const centerTextOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const centerTextY = useTransform(scrollYProgress, [0.45, 0.6], [60, 0]);

  // Icon rendering function
  const renderIcon = () => {
    if (iconType === "none") return null;
    const iconSize = screen === "mobile" ? 14 : 20;
    
    if (iconType === "play") {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: buttonBgColor,
            width: current.playSize,
            height: current.playSize,
            borderRadius: "50%",
            flexShrink: 0
          }}
        >
          <div
            style={{
              position: "relative",
              left: "2px",
              borderStyle: "solid",
              borderWidth: screen === "mobile" ? "7px 0px 7px 14px" : "10px 0px 10px 20px",
              borderColor: `transparent transparent transparent ${buttonTextColor}`
            }}
          />
        </div>
      );
    }

    if (iconType === "arrow") {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: buttonBgColor,
            width: current.playSize,
            height: current.playSize,
            borderRadius: "50%",
            flexShrink: 0
          }}
        >
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke={buttonTextColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    }

    if (iconType === "custom" && customIconSvg) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: buttonBgColor,
            width: current.playSize,
            height: current.playSize,
            borderRadius: "50%",
            flexShrink: 0
          }}
          dangerouslySetInnerHTML={{ __html: customIconSvg }}
        />
      );
    }

    return null;
  };

  return (
    <section ref={ref} style={{ height: "300vh", position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: current.gap,
          padding: "0 20px",
          overflow: "hidden"
        }}
      >
        {/* Left Side Text */}
        <div
          style={{
            whiteSpace: "nowrap",
            width: current.textWidth,
            textAlign: "right",
            fontWeight: 800,
            color: textColor,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            ...leftFont,
            fontSize: current.leftFont
          }}
        >
          {leftText}
        </div>

        {/* Zooming Image Wrapper */}
        <motion.div
          style={{
            width,
            height,
            borderRadius,
            overflow: "hidden",
            position: "relative",
            flexShrink: 0
          }}
        >
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                transform: "translate(-50%, -50%)"
              }}
            />
          ) : (
            <img
              src={imageSrc}
              alt={image?.alt || "Showreel background"}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                transform: "translate(-50%, -50%)"
              }}
            />
          )}
          {/* Fading Center CTA Link */}
          <motion.a
            href={buttonLink}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              translateX: "-50%",
              translateY: "-50%",
              opacity: centerTextOpacity,
              y: centerTextY,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              color: buttonTextColor,
              textAlign: "center",
              textDecoration: "none",
              whiteSpace: "nowrap",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              ...buttonFont,
              fontSize: current.centerFont
            }}
          >
            {buttonText}
            {renderIcon()}
          </motion.a>
        </motion.div>

        {/* Right Side Text */}
        <div
          style={{
            whiteSpace: "nowrap",
            width: current.textWidth,
            textAlign: "left",
            fontWeight: 800,
            color: textColor,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            ...rightFont,
            fontSize: current.rightFont
          }}
        >
          {rightText}
        </div>
      </div>
    </section>
  );
}
