"use client";

import React, { useState, useEffect } from "react";

const headlines = [
  { prefix: "Verify Any", highlight: "Tech Point", suffix: "Certificate Instantly" },
  { prefix: "Authenticate", highlight: "ISO 9001:2015", suffix: "Academic Records" },
  { prefix: "Download Official", highlight: "Student PDF", suffix: "Credentials Daily" },
  { prefix: "Explore Industrial", highlight: "Tally & Coding", suffix: "Syllabus Modules" },
];

export default function HeroTextAnimation() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % headlines.length);
        setFade(true);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const current = headlines[index];

  return (
    <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
      {/* Live Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary-fixed/80 text-on-primary-fixed rounded-full text-xs font-bold tracking-wider shadow-xs border border-primary/20">
        <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-ping"></span>
        <span className="flex h-2.5 w-2.5 rounded-full bg-primary -ml-4"></span>
        <span>LIVE VERIFICATION SYSTEM & PORTAL</span>
      </div>

      {/* Smooth Rotating Headline */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold leading-[1.15] text-slate-900 min-h-[120px] sm:min-h-[140px] flex items-center justify-center lg:justify-start">
        <span
          className={`transition-all duration-500 ease-out transform block ${
            fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          {current.prefix}{" "}
          <span className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent font-extrabold underline decoration-primary/30 underline-offset-4">
            {current.highlight}
          </span>{" "}
          {current.suffix}
        </span>
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
        Enter your registration number to check certificate authenticity, student details, and download official academic credentials directly from our government-recognized portal.
      </p>

      {/* Live Stat Badges */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-4 border-t border-slate-200/80">
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-headline font-extrabold text-primary">
            10,000+
          </span>
          <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase">
            CERTIFIED STUDENTS
          </span>
        </div>
        <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-headline font-extrabold text-primary">
            15+
          </span>
          <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase">
            COURSES
          </span>
        </div>
        <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-headline font-extrabold text-primary">
            ISO
          </span>
          <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase">
            9001:2015 CERTIFIED
          </span>
        </div>
      </div>
    </div>
  );
}
