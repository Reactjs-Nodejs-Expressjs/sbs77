import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slideshow(props) {
  const {
    slides = [],
    duration = 4,
    radius = 20,
    font = { fontSize: 72, lineHeight: "100%" },
    textColor = "#FFFFFF",
    imageEffect = "zoom",
    textEffect = "slideUp"
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const intervalRef = useRef(null);

  const getImageSource = (image) => {
    if (!image) return "";
    if (typeof image === "string") {
      return image;
    }
    if (typeof image === "object") {
      return image.src || image.url || "";
    }
    return "";
  };

  const startAutoplay = useCallback(() => {
    if (!slides || slides.length <= 1) return;
    
    // Clear previous interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        setIsFirstLoad(false);
        return (prev + 1) % slides.length;
      });
    }, duration * 1000);
  }, [slides, duration]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoplay]);

  const currentSlide = slides[currentIndex];
  const currentImage = getImageSource(currentSlide?.image);

  const imageAnimations = {
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    zoom: { initial: { opacity: 0, scale: 1.08 }, animate: { opacity: 1, scale: 1 } },
    slideUp: { initial: { opacity: 0, y: 80 }, animate: { opacity: 1, y: 0 } },
    slideLeft: { initial: { opacity: 0, x: 80 }, animate: { opacity: 1, x: 0 } }
  };

  const textAnimations = {
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    slideUp: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    zoom: { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } },
    blur: { initial: { opacity: 0, filter: "blur(12px)" }, animate: { opacity: 1, filter: "blur(0px)" } }
  };

  const selectedImageEffect = imageAnimations[imageEffect] || imageAnimations.zoom;
  const selectedTextEffect = textAnimations[textEffect] || textAnimations.slideUp;

  const handleSlideChange = (index) => {
    setIsFirstLoad(false);
    setCurrentIndex(index);
    startAutoplay();
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        borderRadius: radius,
        background: "#111"
      }}
    >
      <AnimatePresence mode="wait">
        {currentImage && (
          <motion.img
            key={currentIndex}
            src={currentImage}
            initial={isFirstLoad ? false : selectedImageEffect.initial}
            animate={selectedImageEffect.animate}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              userSelect: "none"
            }}
          />
        )}
      </AnimatePresence>

      {/* Ambient overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.65))",
          zIndex: 1
        }}
      />

      {/* Animated Text Title */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          textAlign: "center",
          zIndex: 5,
          pointerEvents: "none"
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={isFirstLoad ? false : selectedTextEffect.initial}
            animate={selectedTextEffect.animate}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              color: textColor,
              textShadow: "0px 4px 20px rgba(0,0,0,0.4)"
            }}
          >
            <div
              style={{
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
                whiteSpace: "pre-wrap",
                ...font
              }}
            >
              {currentSlide?.title || ""}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress navigation indicators */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          width: 180,
          zIndex: 10
        }}
      >
        {slides.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              onClick={() => handleSlideChange(index)}
              style={{
                flex: 1,
                height: 6,
                borderRadius: 999,
                overflow: "hidden",
                cursor: "pointer",
                background: "rgba(255,255,255,0.25)"
              }}
            >
              <div style={{ width: "100%", height: "100%", position: "relative" }}>
                {isActive && (
                  <motion.div
                    key={`active-${currentIndex}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: duration, ease: "linear" }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "#FFFFFF",
                      borderRadius: 999
                    }}
                  />
                )}
                {!isActive && index < currentIndex && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      background: "#FFFFFF",
                      borderRadius: 999
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
