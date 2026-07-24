"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-gutter max-w-container-max mx-auto space-y-12">
      {/* 1. About Section Matching Design */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column: Info & Features */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-headline font-bold text-slate-900 tracking-tight">
            About Our Institution
          </h1>
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

        {/* Right Column: Contact Cards & Map Graphic */}
        <div className="space-y-4">
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
      </div>

      {/* 2. Director's Message Card */}
      <div className="bg-white border-2 border-primary-fixed p-6 sm:p-8 rounded-2xl shadow-xl max-w-3xl mx-auto space-y-6 text-center">
        <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-2xl mx-auto text-white shadow-md">
          <span className="material-symbols-outlined text-3xl">school</span>
        </div>
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-headline font-bold text-on-surface">Gaurav Kumar</h3>
          <p className="text-xs font-bold text-primary font-mono">Founder & Academic Director</p>
        </div>
        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed italic">
          "Our goal is to ensure that every student graduating from Tech Point possesses job-ready skills and verified digital credentials trusted by employers nationwide."
        </p>
        <div className="pt-4 border-t border-outline-variant flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/contact"
            className="py-2.5 px-4 bg-primary text-white rounded-xl text-xs font-bold tracking-wider shadow-xs hover:bg-on-primary-fixed-variant transition-colors"
          >
            CONTACT DIRECTOR
          </Link>
          <Link
            href="/certificate-verify"
            className="py-2.5 px-4 border border-outline-variant hover:border-primary text-primary rounded-xl text-xs font-bold tracking-wider transition-colors"
          >
            VERIFY CERTIFICATE
          </Link>
        </div>
      </div>
    </section>
  );
}