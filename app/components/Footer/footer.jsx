"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-surface-container-high border-t border-outline-variant pt-10 sm:pt-14 pb-8 px-gutter">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-primary flex items-center justify-center rounded-xl text-white shadow-xs">
                  <span className="material-symbols-outlined text-xl">
                    terminal
                  </span>
                </div>
                <span className="text-xl font-headline font-extrabold text-on-surface">
                  TECH POINT
                </span>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Empowering the next generation of tech professionals with quality
                education and government-recognized certifications in Bassi Pathana, Punjab.
              </p>
              <div className="flex gap-3 pt-1">
                <Link
                  href="/certificate-verify"
                  className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-xs border border-outline-variant/60"
                  title="Verify Certificate"
                >
                  <span className="material-symbols-outlined text-lg">
                    verified
                  </span>
                </Link>
                <Link
                  href="/quiz-test"
                  className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-xs border border-outline-variant/60"
                  title="Quiz Assessment"
                >
                  <span className="material-symbols-outlined text-lg">
                    quiz
                  </span>
                </Link>
                <Link
                  href="/syllabus-download"
                  className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-xs border border-outline-variant/60"
                  title="Syllabus Library"
                >
                  <span className="material-symbols-outlined text-lg">
                    description
                  </span>
                </Link>
              </div>
            </div>

            {/* Column 2: Quick Services */}
            <div className="space-y-3">
              <h4 className="font-bold uppercase text-xs tracking-wider text-on-surface">
                Services & Portals
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
                <li>
                  <Link
                    href="/certificate-verify"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    Certificate Verification
                  </Link>
                </li>
                <li>
                  <Link
                    href="/syllabus-download"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    Download Syllabus (PDF)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quiz-test"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    Online MCQ Quiz Test
                  </Link>
                </li>
                <li>
                  <Link
                    href="/typing-test"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    English & Punjabi Typing Test
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    About Institution
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Main Courses */}
            <div className="space-y-3">
              <h4 className="font-bold uppercase text-xs tracking-wider text-on-surface">
                Popular Courses
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
                <li>
                  <Link href="/#courses" className="hover:text-primary transition-colors">
                    Tally Prime + GST
                  </Link>
                </li>
                <li>
                  <Link href="/#courses" className="hover:text-primary transition-colors">
                    Computer Basic (DCA)
                  </Link>
                </li>
                <li>
                  <Link href="/#courses" className="hover:text-primary transition-colors">
                    CorelDRAW & Photoshop
                  </Link>
                </li>
                <li>
                  <Link href="/#courses" className="hover:text-primary transition-colors">
                    C / C++ & Python Programming
                  </Link>
                </li>
                <li>
                  <Link href="/#courses" className="hover:text-primary transition-colors">
                    English Speaking & Communication
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Quick Contact */}
            <div className="space-y-3">
              <h4 className="font-bold uppercase text-xs tracking-wider text-on-surface">
                Quick Contact
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">
                    location_on
                  </span>
                  <span>Near Gaushala Road, Bassi Pathana, Fatehgarh Sahib, Punjab - 140412</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">
                    call
                  </span>
                  <a href="tel:+917973542073" className="hover:underline">+91 79735 42073</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">
                    chat
                  </span>
                  <a href="https://wa.me/917340747117" target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-600 font-bold">+91 73407 47117 (WhatsApp)</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">
                    mail
                  </span>
                  <a href="mailto:gktechp931@gmail.com" className="hover:underline">gktechp931@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
              © {new Date().getFullYear()} TECH POINT INSTITUTIONAL. GOVERNMENT REGISTERED & ISO 9001:2015 CERTIFIED. ALL RIGHTS RESERVED.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-on-surface-variant font-medium">
              <Link href="/certificate-verify" className="hover:text-primary transition-colors">
                VERIFY CERTIFICATE
              </Link>
              <Link href="/syllabus-download" className="hover:text-primary transition-colors">
                SYLLABUS
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (WhatsApp Support) */}
      <a
        href="https://wa.me/917340747117?text=Hello%20Tech%20Point%20Institutional"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl z-[70] hover:scale-110 transition-transform active:scale-95 cursor-pointer"
        title="WhatsApp Support: +91 73407 47117"
      >
        <span className="material-symbols-outlined text-2xl sm:text-3xl">chat</span>
      </a>
    </>
  );
};

export default Footer;
