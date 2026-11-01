"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import OpeningIntro from "@/components/OpeningIntro";
import SectionIndicator from "@/components/SectionIndicator";
import HeroQuoteSection from "@/components/sections/HeroQuoteSection";
import IdentitySection from "@/components/sections/IdentitySection";
import WorkSection from "@/components/sections/WorkSection";
import NumbersSection from "@/components/sections/NumbersSection";
import ContactSection from "@/components/sections/ContactSection";

const TOTAL_SLIDES = 5;
const TRANSITION_DURATION_MS = 750;

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [introFinished, setIntroFinished] = useState<boolean>(false);

  const touchStartY = useRef<number>(0);
  const lastTransitionTime = useRef<number>(0);

  // Check URL parameters on mount (e.g. ?slide=2 or #work)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const slideParam = params.get("slide");
        if (slideParam !== null) {
          const slideNum = parseInt(slideParam, 10);
          if (!isNaN(slideNum) && slideNum >= 0 && slideNum < TOTAL_SLIDES) {
            setCurrentSlide(slideNum);
            setIntroFinished(true);
          }
        } else if (window.location.hash === "#work") {
          setCurrentSlide(2);
          setIntroFinished(true);
        }
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const goToSlide = useCallback(
    (targetIndex: number) => {
      const now = Date.now();
      if (now - lastTransitionTime.current < TRANSITION_DURATION_MS) return;
      if (targetIndex < 0 || targetIndex >= TOTAL_SLIDES) return;

      lastTransitionTime.current = now;
      setCurrentSlide(targetIndex);
    },
    []
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Wheel Gesture Listener with Lock and Debounce
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastTransitionTime.current < TRANSITION_DURATION_MS) return;

      if (Math.abs(e.deltaY) > 25) {
        if (e.deltaY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Listener for Mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTransitionTime.current < TRANSITION_DURATION_MS) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      if (Math.abs(deltaY) > 45) {
        if (deltaY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  // Keyboard Navigation Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(TOTAL_SLIDES - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#0A0A0A] select-none">
      {/* Opening Intro Logo Animation */}
      <OpeningIntro onComplete={() => setIntroFinished(true)} />

      {/* Floating Inset Header */}
      <SectionIndicator
        currentSlide={currentSlide}
        onLogoClick={() => goToSlide(0)}
        onNavigate={(index) => goToSlide(index)}
      />

      {/* 5 Viewport Slides Container */}
      <div
        className="w-full h-full ease-[cubic-bezier(0.65,0,0.35,1)] transition-transform"
        style={{
          transform: `translateY(-${currentSlide * 100}%)`,
          transitionDuration: `${TRANSITION_DURATION_MS}ms`,
        }}
      >
        {/* SLIDE 01 — HERO / QUOTE */}
        <div className="w-full h-screen">
          <HeroQuoteSection
            introFinished={introFinished}
            onAdvance={nextSlide}
            isActive={currentSlide === 0}
          />
        </div>

        {/* SLIDE 02 — IDENTITY */}
        <div className="w-full h-screen">
          <IdentitySection isActive={currentSlide === 1} />
        </div>

        {/* SLIDE 03 — WORK */}
        <div className="w-full h-screen">
          <WorkSection isActive={currentSlide === 2} />
        </div>

        {/* SLIDE 04 — NUMBERS */}
        <div className="w-full h-screen">
          <NumbersSection isActive={currentSlide === 3} />
        </div>

        {/* SLIDE 05 — CONTACT */}
        <div className="w-full h-screen">
          <ContactSection
            isActive={currentSlide === 4}
            onReturnToTop={() => goToSlide(0)}
          />
        </div>
      </div>
    </div>
  );
}
