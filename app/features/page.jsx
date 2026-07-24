"use client";

import React from "react";
import Link from "next/link";

export default function WebsiteFeatures() {
  return (
    <section className="py-xl px-gutter bg-surface-container-low border-t border-b border-outline-variant">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-xl space-y-base">
          <span className="text-xs font-bold font-label-caps text-primary tracking-widest uppercase">
            PORTALS & TOOLS
          </span>
          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface">
            Key Institutional Features
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            Direct access to student verification, curriculum downloads, and online testing portals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-md">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md sm:p-lg bento-card flex flex-col justify-between shadow-xs">
            <div className="space-y-md">
              <div className="w-12 h-12 bg-primary-fixed text-primary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <h3 className="text-lg font-headline font-bold text-on-surface">
                Certificate Verification
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Verify course certificate authenticity and download official digital PDF credentials by entering student registration ID.
              </p>
            </div>
            <Link
              href="/certificate-verify"
              className="mt-lg w-full py-base bg-primary hover:bg-on-primary-fixed-variant text-white rounded-lg font-bold text-xs tracking-wider text-center block transition-colors shadow-xs"
            >
              CERTIFICATE VERIFICATION →
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md sm:p-lg bento-card flex flex-col justify-between shadow-xs">
            <div className="space-y-md">
              <div className="w-12 h-12 bg-tertiary-fixed text-tertiary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">quiz</span>
              </div>
              <h3 className="text-lg font-headline font-bold text-on-surface">
                Online MCQ Quiz Test
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Evaluate technical proficiency with timed MCQ tests covering computer basics, Tally GST, and coding logic.
              </p>
            </div>
            <Link
              href="/quiz-test"
              className="mt-lg w-full py-base bg-tertiary hover:bg-on-tertiary-fixed-variant text-white rounded-lg font-bold text-xs tracking-wider text-center block transition-colors shadow-xs"
            >
              QUIZ ASSESSMENT PORTAL →
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md sm:p-lg bento-card flex flex-col justify-between shadow-xs">
            <div className="space-y-md">
              <div className="w-12 h-12 bg-secondary-fixed text-secondary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">description</span>
              </div>
              <h3 className="text-lg font-headline font-bold text-on-surface">
                Syllabus Library
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Download updated course syllabi for DCA, Tally Prime, Photoshop, CorelDRAW, C, and C++ in PDF format.
              </p>
            </div>
            <Link
              href="/syllabus-download"
              className="mt-lg w-full py-base bg-secondary hover:bg-on-secondary-fixed-variant text-white rounded-lg font-bold text-xs tracking-wider text-center block transition-colors shadow-xs"
            >
              DOWNLOAD SYLLABUS →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}