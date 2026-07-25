"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/#courses" },
    { name: "Verify Certificate", href: "/certificate-verify" },
    { name: "Syllabus", href: "/syllabus-download" },
    { name: "Quiz Test", href: "/quiz-test" },
    { name: "Typing Test", href: "/typing-test" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-outline-variant shadow-xs">
      {/* 1. Top Trust Info Bar */}
      <div className="bg-surface-container-lowest border-b border-outline-variant/60 py-1.5 text-[11px] text-on-surface-variant">
        <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
            <span className="font-semibold text-primary truncate flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span>GOVT. REGISTERED | ISO 9001:2015</span>
            </span>
            <span className="hidden sm:flex items-center gap-1 truncate text-on-surface-variant">
              <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
              Bassi Pathana, Punjab
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+917973542073"
              className="text-primary hover:underline font-semibold flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">call</span>
              <span>+91 79735 42073</span>
            </a>
            <a
              href="mailto:gktechp931@gmail.com"
              className="hidden md:flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">mail</span>
              gktechp931@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-16 relative">
        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl shadow-sm group-hover:scale-105 transition-transform shrink-0">
            <span className="material-symbols-outlined text-white text-2xl">
              terminal
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-headline font-extrabold tracking-tight text-primary leading-none">
              TECH POINT
            </span>
            <span className="text-[10px] tracking-widest text-on-surface-variant font-bold uppercase mt-0.5">
              INSTITUTIONAL
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-on-surface-variant">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 hover:text-primary ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/certificate-verify"
            className="hidden sm:inline-flex bg-primary text-white px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider hover:bg-on-primary-fixed-variant transition-all active:scale-95 shadow-md shadow-primary/20 items-center gap-1.5 shrink-0"
          >
            <span className="material-symbols-outlined text-base">verified</span>
            VERIFY NOW
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2.5 rounded-xl border border-outline-variant hover:bg-surface-container-high transition-colors text-on-surface flex items-center justify-center w-11 h-11 active:scale-95"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl select-none">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* 3. Mobile Navigation Overlay & Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed left-0 right-0 top-full bottom-0 h-[calc(100vh-100%)] z-50 flex flex-col bg-black/60 backdrop-blur-sm transition-all duration-300">
          <div 
            className="bg-white w-full border-b border-outline-variant shadow-2xl max-h-[85vh] overflow-y-auto p-4 space-y-2 animate-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider px-3 pt-1 pb-2">
              Navigation Menu
            </div>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-primary-fixed/40 text-primary font-bold"
                        : "text-on-surface hover:bg-surface-container-low active:bg-surface-container-high"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="material-symbols-outlined text-base opacity-60">
                      chevron_right
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-outline-variant space-y-3">
              <Link
                href="/certificate-verify"
                onClick={closeMobileMenu}
                className="w-full bg-primary text-white py-3 rounded-xl font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform"
              >
                <span className="material-symbols-outlined text-base">verified</span>
                VERIFY CERTIFICATE NOW
              </Link>
              
              <div className="flex flex-col sm:flex-row items-center justify-around gap-2 text-xs text-on-surface-variant pt-1 font-medium bg-surface-container-low p-3 rounded-xl">
                <a href="tel:+917973542073" className="flex items-center gap-1.5 text-primary font-semibold">
                  <span className="material-symbols-outlined text-sm">call</span>
                  +91 79735 42073
                </a>
                <a href="mailto:gktechp931@gmail.com" className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">mail</span>
                  gktechp931@gmail.com
                </a>
              </div>
            </div>
          </div>
          {/* Backdrop click area to close menu */}
          <div className="flex-1 w-full" onClick={closeMobileMenu} />
        </div>
      )}
    </header>
  );
};

export default Navbar;