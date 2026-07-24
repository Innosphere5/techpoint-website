"use client";

import React, { useState } from "react";
import Link from "next/link";
import { verifyCertificate, downloadCertificate } from "../certificate-verify/certificateData";
import ScrollReveal from "../components/ScrollReveal";
import PdfPreview from "../components/PdfPreview";
import HeroTextAnimation from "../components/HeroTextAnimation";

const Home = () => {
  const [heroRegNumber, setHeroRegNumber] = useState("");
  const [heroResult, setHeroResult] = useState(null);
  const [heroError, setHeroError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // Search filter for Document Library in Home
  const [docSearch, setDocSearch] = useState("");

  const syllabusList = [
    {
      name: "Tally Prime Advanced Curriculum",
      version: "v2.4",
      size: "1.2 MB",
      date: "Updated July 2024",
      file: "/Syllabus/TALLY SYLLABUS.pdf",
      color: "bg-amber-50 text-amber-600",
    },
    {
      name: "CorelDRAW Graphic Design & Illustration",
      version: "v3.1",
      size: "2.5 MB",
      date: "Updated June 2024",
      file: "/Syllabus/CORAL DRAW SYLLABUS (1).pdf",
      color: "bg-red-50 text-red-600",
    },
    {
      name: "Adobe Photoshop Photo Editing & UI Design",
      version: "v2.0",
      size: "1.8 MB",
      date: "Updated May 2024",
      file: "/Syllabus/photoshop syllabus.pdf",
      color: "bg-blue-50 text-blue-600",
    },
    {
      name: "Computer Basic (DCA) Curriculum",
      version: "v3.0",
      size: "850 KB",
      date: "Updated August 2024",
      file: "/Syllabus/MS WORD SYLLABUS.pdf",
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  const handleHeroVerify = (e) => {
    e.preventDefault();
    if (!heroRegNumber.trim()) return;

    setIsVerifying(true);
    setHeroError("");
    setHeroResult(null);

    setTimeout(() => {
      setIsVerifying(false);
      const res = verifyCertificate(heroRegNumber.trim());
      if (res) {
        setHeroResult(res);
      } else {
        setHeroError("Certificate record not found. Try e.g. 399, 848, 871");
      }
    }, 500);
  };

  const handleDownloadPdf = async (path, name) => {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        alert("File not found. Please contact support.");
        return;
      }
      const link = document.createElement("a");
      link.href = path;
      link.download = `${name.replace(/\s+/g, "_")}.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      alert("Download failed. Please try again.");
    }
  };

  const filteredSyllabus = syllabusList.filter((s) =>
    s.name.toLowerCase().includes(docSearch.toLowerCase())
  );

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16 px-gutter bg-gradient-to-b from-surface-container-lowest via-background to-surface-container-low/50">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <ScrollReveal direction="up" delay={50}>
            <HeroTextAnimation />
          </ScrollReveal>

          {/* Quick Verification Widget in Hero */}
          <ScrollReveal direction="up" delay={150}>
            <div className="relative group w-full max-w-2xl mx-auto lg:max-w-none">
              <div className="absolute -inset-2 bg-primary-fixed/30 opacity-40 blur-2xl rounded-3xl group-hover:opacity-60 transition-opacity pointer-events-none"></div>
              <div
                className="relative bg-white border border-outline-variant rounded-2xl p-4 sm:p-7 shadow-xl verified-glow overflow-hidden"
                id="verify"
              >
                <div className="flex items-center justify-between mb-6 border-b border-outline-variant/60 pb-3">
                  <span className="text-base sm:text-lg font-headline font-semibold text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                    Verification Portal
                  </span>
                  <span className="material-symbols-outlined text-primary text-2xl">
                    shield_with_heart
                  </span>
                </div>

                <form onSubmit={handleHeroVerify} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                      Registration ID / Roll No.
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={heroRegNumber}
                        onChange={(e) => setHeroRegNumber(e.target.value)}
                        placeholder="e.g. 399, 848, 871, 874, 872"
                        className="w-full bg-surface-container-low border border-outline px-4 py-3 rounded-xl font-mono text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none uppercase font-semibold tracking-wider text-on-surface pr-10"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant pointer-events-none text-xl">
                        qr_code_scanner
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isVerifying || !heroRegNumber.trim()}
                    className="w-full bg-primary text-white py-3.5 px-4 rounded-xl font-headline font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-on-primary-fixed-variant transition-all active:scale-[0.98] shadow-md shadow-primary/20 cursor-pointer disabled:opacity-50"
                  >
                    {isVerifying ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-lg">sync</span>
                        VERIFYING...
                      </>
                    ) : (
                      <>
                        Verify Certificate & Preview PDF
                        <span className="material-symbols-outlined text-lg">chevron_right</span>
                      </>
                    )}
                  </button>
                </form>

                {heroError && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2 font-medium animate-in fade-in">
                    <span className="material-symbols-outlined text-lg text-red-500 shrink-0">error</span>
                    <span>{heroError}</span>
                  </div>
                )}

                {/* Embedded Live PDF Viewer Component */}
                {heroResult && (
                  <PdfPreview
                    result={heroResult}
                    regNumber={heroRegNumber}
                    onClose={() => setHeroResult(null)}
                  />
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Quick Access Bento Grid */}
      <section className="py-12 px-gutter bg-surface-container-low/60 border-y border-outline-variant/60">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: "verified",
                bg: "bg-primary-fixed text-primary",
                title: "Verify Certificate",
                desc: "Check certificate authenticity online using student registration number.",
                href: "/certificate-verify",
                cta: "GO TO PORTAL",
                color: "text-primary",
              },
              {
                icon: "description",
                bg: "bg-secondary-fixed text-secondary",
                title: "Download Syllabus",
                desc: "Access updated course contents, modules, and official PDF downloads.",
                href: "/syllabus-download",
                cta: "BROWSE FILES",
                color: "text-secondary",
              },
              {
                icon: "quiz",
                bg: "bg-tertiary-fixed text-tertiary",
                title: "Quiz Test",
                desc: "Test your knowledge with our timed online MCQ assessment system.",
                href: "/quiz-test",
                cta: "START TEST",
                color: "text-tertiary",
              },
              {
                icon: "keyboard",
                bg: "bg-primary-fixed text-primary",
                title: "Typing Assessment",
                desc: "Practice English & Punjabi typing test with live speed tracking.",
                href: "/typing-test",
                cta: "START TYPING",
                color: "text-primary",
              },
            ].map((card, idx) => (
              <ScrollReveal key={card.title} direction="up" delay={idx * 100}>
                <div className="bg-white border border-outline-variant p-5 rounded-2xl bento-card flex flex-col justify-between gap-4 shadow-xs h-full hover:shadow-md hover:border-primary/40 transition-all">
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.bg}`}>
                      <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-headline font-bold text-on-surface">
                      {card.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <Link
                    href={card.href}
                    className={`${card.color} font-bold text-xs flex items-center gap-1 hover:underline pt-2`}
                  >
                    {card.cta}{" "}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Courses Section (Bento Grid) */}
      <section className="py-12 sm:py-16 px-gutter max-w-container-max mx-auto" id="courses">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">
                ACADEMIC EXCELLENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface">
                Industrial & Skill Training Courses
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/#courses"
                className="px-4 py-2 bg-primary text-white rounded-full text-xs font-bold tracking-wider hover:bg-on-primary-fixed-variant transition-colors"
              >
                ALL COURSES
              </Link>
              <Link
                href="/syllabus-download"
                className="px-4 py-2 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-bold tracking-wider hover:bg-surface-container-highest transition-colors"
              >
                SYLLABI (PDF)
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Office & Accounting */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white border border-outline-variant rounded-2xl p-5 sm:p-7 shadow-xs flex flex-col justify-between h-full hover:shadow-md transition-all">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="px-3 py-1 bg-primary-fixed text-primary rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Professional
                      </span>
                      <h3 className="text-xl font-headline font-bold text-on-surface mt-2">
                        Office & Accounting
                      </h3>
                    </div>
                    <span className="material-symbols-outlined text-primary text-3xl shrink-0">
                      account_balance_wallet
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/60 hover:border-primary/50 transition-colors">
                      <p className="font-bold text-sm text-on-surface">Tally Prime + GST</p>
                      <p className="text-xs font-mono text-on-surface-variant mt-1">6 Months</p>
                      <Link href="/contact" className="mt-3 text-primary font-bold text-xs inline-block hover:underline">
                        ENROLL NOW →
                      </Link>
                    </div>
                    <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/60 hover:border-primary/50 transition-colors">
                      <p className="font-bold text-sm text-on-surface">Computer Basic (DCA)</p>
                      <p className="text-xs font-mono text-on-surface-variant mt-1">3 Months</p>
                      <Link href="/contact" className="mt-3 text-primary font-bold text-xs inline-block hover:underline">
                        ENROLL NOW →
                      </Link>
                    </div>
                    <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/60 hover:border-primary/50 transition-colors">
                      <p className="font-bold text-sm text-on-surface">Advanced Excel</p>
                      <p className="text-xs font-mono text-on-surface-variant mt-1">2 Months</p>
                      <Link href="/contact" className="mt-3 text-primary font-bold text-xs inline-block hover:underline">
                        ENROLL NOW →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Design & Media */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white border border-outline-variant rounded-2xl p-5 sm:p-7 flex flex-col justify-between shadow-xs h-full hover:shadow-md transition-all">
                <div className="space-y-4">
                  <span className="px-3 py-1 bg-tertiary-fixed text-tertiary rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Creative
                  </span>
                  <h3 className="text-xl font-headline font-bold text-on-surface">
                    Design & Media
                  </h3>
                  <ul className="space-y-2 text-xs text-on-surface-variant">
                    <li className="flex justify-between items-center py-1 border-b border-outline-variant/40">
                      <span className="font-bold text-on-surface">Adobe Photoshop</span>
                      <span className="font-mono bg-surface-container px-2 py-0.5 rounded">Expert</span>
                    </li>
                    <li className="flex justify-between items-center py-1 border-b border-outline-variant/40">
                      <span className="font-bold text-on-surface">CorelDRAW</span>
                      <span className="font-mono bg-surface-container px-2 py-0.5 rounded">Professional</span>
                    </li>
                    <li className="flex justify-between items-center py-1 border-b border-outline-variant/40">
                      <span className="font-bold text-on-surface">Web UI Design</span>
                      <span className="font-mono bg-surface-container px-2 py-0.5 rounded">Advanced</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/syllabus-download"
                  className="mt-6 w-full py-3 bg-tertiary hover:bg-on-tertiary-fixed-variant text-white rounded-xl font-bold text-xs tracking-wider text-center block transition-colors shadow-xs"
                >
                  EXPLORE ALL DESIGN SYLLABI
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Programming Category */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="up" delay={150}>
              <div className="bg-inverse-surface text-white rounded-2xl p-5 sm:p-7 flex flex-col justify-between shadow-md h-full">
                <div className="space-y-4">
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Tech Stack
                  </span>
                  <h3 className="text-xl font-headline font-bold text-white">
                    Programming & Coding
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 border border-white/20 rounded-xl text-center font-mono font-semibold">
                      Python
                    </div>
                    <div className="p-3 border border-white/20 rounded-xl text-center font-mono font-semibold">
                      Java
                    </div>
                    <div className="p-3 border border-white/20 rounded-xl text-center font-mono font-semibold">
                      C / C++
                    </div>
                    <div className="p-3 border border-white/20 rounded-xl text-center font-mono font-semibold">
                      PHP & Web
                    </div>
                  </div>
                </div>
                <Link
                  href="/syllabus-download"
                  className="mt-6 w-full py-3 bg-white text-on-background rounded-xl font-bold text-xs tracking-wider text-center block hover:bg-surface-container-low transition-colors shadow-xs"
                >
                  VIEW PROGRAMMING SYLLABUS
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Language & Skills */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="up" delay={250}>
              <div className="bg-white border border-outline-variant rounded-2xl p-5 sm:p-7 flex flex-col md:flex-row gap-6 shadow-xs h-full hover:shadow-md transition-all items-center">
                <div className="flex-1 space-y-4">
                  <div>
                    <span className="px-3 py-1 bg-secondary-fixed text-secondary rounded-full text-[10px] font-bold uppercase tracking-wider">
                      ESSENTIAL
                    </span>
                    <h3 className="text-xl sm:text-2xl font-headline font-bold text-on-surface mt-2">
                      Language & Skills
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                      Master the art of communication and technical typing for government exams.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-surface-container rounded-xl border border-outline-variant/60 flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-xl">
                        record_voice_over
                      </span>
                      <p className="font-bold text-xs text-on-surface">English Speaking</p>
                    </div>
                    <div className="p-3 bg-surface-container rounded-xl border border-outline-variant/60 flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-xl">
                        keyboard
                      </span>
                      <p className="font-bold text-xs text-on-surface">Hindi/English Typing</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full h-full min-h-[220px] rounded-2xl overflow-hidden border border-outline-variant shadow-xs relative group">
                  <img
                    src="/images/lab.png"
                    alt="Tech Point Computer Lab Training"
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Syllabus Document Library */}
      <section className="py-12 sm:py-16 px-gutter bg-white border-y border-outline-variant" id="syllabus">
        <div className="max-w-container-max mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-8 space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">
                DOWNLOAD CENTER
              </span>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface">
                Document & Syllabus Library
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                Download latest course modules and syllabi in PDF format.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <div className="max-w-4xl mx-auto border border-outline-variant rounded-2xl overflow-hidden shadow-xs">
              <div className="bg-surface-container-low p-4 border-b border-outline-variant flex gap-4">
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">
                    search
                  </span>
                  <input
                    type="text"
                    value={docSearch}
                    onChange={(e) => setDocSearch(e.target.value)}
                    placeholder="Search syllabus by name..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-outline outline-none text-xs text-on-surface focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="divide-y divide-outline-variant">
                {filteredSyllabus.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 hover:bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${doc.color}`}
                      >
                        <span className="material-symbols-outlined text-xl">picture_as_pdf</span>
                      </div>
                      <div>
                        <p className="font-bold text-xs sm:text-sm text-on-surface">{doc.name}</p>
                        <p className="text-[11px] font-mono text-on-surface-variant uppercase mt-0.5">
                          {doc.version} • {doc.size} • {doc.date}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownloadPdf(doc.file, doc.name)}
                      className="w-full sm:w-auto px-4 py-2 rounded-xl border border-outline-variant flex items-center justify-center gap-2 text-primary hover:bg-primary hover:text-white transition-all cursor-pointer text-xs font-bold shrink-0"
                      title="Download PDF"
                    >
                      <span className="material-symbols-outlined text-base">download</span>
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-surface-container-low text-center">
                <Link
                  href="/syllabus-download"
                  className="text-primary font-bold text-xs tracking-wider hover:underline inline-flex items-center gap-1"
                >
                  BROWSE ALL SYLLABUS FILES →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Timeline Journey */}
      <section className="py-12 sm:py-16 px-gutter bg-inverse-surface text-white overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
                Our Journey Together
              </h2>
              <p className="text-xs sm:text-sm text-white/70">
                From first inquiry to professional government-registered certification.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Visit Institute", desc: "Counseling & lab tour in Bassi Pathana." },
              { step: "2", title: "Enrollment", desc: "Official student roll number registration." },
              { step: "3", title: "Practical Training", desc: "Hands-on computer lab practicals & theory." },
              { step: "4", title: "Certification", desc: "Final evaluation exam & ISO diploma award." },
              { step: "5", title: "Online Verification", desc: "Lifetime digital verification on portal." },
            ].map((item, idx) => (
              <ScrollReveal key={item.step} direction="up" delay={idx * 100}>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col items-center text-center space-y-3 relative h-full hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-md">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-sm text-white">{item.title}</h4>
                  <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Verification Deep Dive */}
      <section className="py-12 sm:py-16 px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface">
                Institutional Trust & Verification Steps
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-on-surface">Locate Registration Number</h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      Check your physical certificate or admission card for the unique student ID.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-on-surface">Input in Verification Portal</h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      Enter the ID in our secure verification bar at the top or on the verification page.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-on-surface">Review & Download PDF</h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      Cross-verify student name and download authentic PDF credentials instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div className="w-full max-w-xl mx-auto">
              <div className="bg-white border border-slate-200/90 p-8 sm:p-10 rounded-2xl shadow-xl space-y-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl text-white shadow-sm">
                    <span className="material-symbols-outlined text-2xl">terminal</span>
                  </div>
                  <h3 className="text-base font-headline font-bold text-slate-900 tracking-wider">
                    TECH POINT
                  </h3>
                  <p className="text-[10px] text-slate-500 tracking-widest uppercase font-bold">
                    GOVERNMENT REGISTERED INSTITUTION
                  </p>
                </div>

                <div className="w-full h-px bg-slate-200/80 my-4"></div>

                <div className="space-y-1.5">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    CERTIFICATE OF COMPLETION
                  </p>
                  <h4 className="text-base sm:text-lg font-headline font-extrabold text-slate-900 tracking-wide">
                    SAMPLE STUDENT CERTIFICATE
                  </h4>
                  <p className="text-xs text-slate-500 pt-1">
                    Has successfully completed the Professional Course in
                  </p>
                  <p className="text-base font-headline font-bold text-primary pt-1">
                    Tally Prime with GST
                  </p>
                </div>

                <div className="flex justify-between items-center w-full pt-4 border-t border-slate-200/80 text-left">
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      REGISTRATION NO.
                    </p>
                    <p className="text-xs font-mono font-bold text-primary">
                      TP-2024-OFFICIAL
                    </p>
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-xs">
                    <span className="material-symbols-outlined text-sm text-emerald-600">verified</span>
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. About & Location Contact */}
      <section className="py-12 sm:py-16 px-gutter bg-[#f4f6fa] border-t border-outline-variant/60" id="about">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <ScrollReveal direction="left">
            {/* Left Column: Info & Features */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-headline font-bold text-slate-900 tracking-tight">
                About Our Institution
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Tech Point Institutional is a pioneer in technical and vocational education based in Bassi Pathana, Punjab. With over a decade of excellence, we bridge the gap between traditional education and industrial requirements.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our ISO 9001:2015 certification reflects our commitment to maintaining the highest standards of training and student assessment. We empower students with the skills needed to excel in government exams, corporate accounting, and creative design.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
                  <span>Govt Registered</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <span className="material-symbols-outlined text-primary text-xl">star_outline</span>
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <span className="material-symbols-outlined text-primary text-xl">work_outline</span>
                  <span>Job Assistance</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <span className="material-symbols-outlined text-primary text-xl">computer</span>
                  <span>Modern Lab</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            {/* Right Column: Contact Cards & Map Graphic */}
            <div className="space-y-4">
              {/* Top Cards: Visit Us & Call Us */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    location_on
                  </span>
                  <h4 className="font-bold text-base text-slate-900">Visit Us</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Near Gaushala Road, Bassi Pathana, Punjab 140412
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    call
                  </span>
                  <h4 className="font-bold text-base text-slate-900">Call & WhatsApp</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Call: <a href="tel:+917973542073" className="hover:underline font-bold text-primary">+91 79735 42073</a><br />
                    WhatsApp: <a href="https://wa.me/917340747117" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-emerald-600">+91 73407 47117</a>
                  </p>
                </div>
              </div>

              {/* Bottom Card: Map Graphic with Floating Overlay Button */}
              <div className="relative rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 group">
                <img
                  src="/images/about.png"
                  alt="Tech Point Campus Map"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
                  <a
                    href="https://maps.google.com/?q=Bassi+Pathana,+Punjab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border border-slate-200/80"
                  >
                    <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                    <span>Find Tech Point on Map</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Home;