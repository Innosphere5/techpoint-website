"use client";

import React, { useState } from "react";
import { verifyCertificate } from "./certificateData";
import PdfPreview from "../components/PdfPreview";
import ScrollReveal from "../components/ScrollReveal";

const CertificateVerify = ({ initialRegistration = "" }) => {
  const [registrationNumber, setRegistrationNumber] = useState(initialRegistration);
  const [isVerifying, setIsVerifying] = useState(false);
  const [certificateData, setCertificateData] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = (e) => {
    if (e) e.preventDefault();
    if (!registrationNumber.trim()) return;

    setIsVerifying(true);
    setHasSearched(true);
    setError("");
    setCertificateData(null);

    // Simulate verification check
    setTimeout(() => {
      setIsVerifying(false);
      const result = verifyCertificate(registrationNumber.trim());

      if (result) {
        setCertificateData(result);
      } else {
        setError("Certificate not found. Please check your Registration ID and try again.");
      }
    }, 500);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-gutter max-w-container-max mx-auto min-h-[calc(100vh-160px)] flex flex-col justify-center">
      {/* Header */}
      <ScrollReveal direction="down">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full text-xs font-bold tracking-wider">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            LIVE CERTIFICATE VERIFICATION PORTAL
          </div>
          <h1 className="text-2xl sm:text-4xl font-headline font-bold text-on-surface">
            Verify Official <span className="text-primary">Tech Point</span> Credentials
          </h1>
          <p className="text-xs sm:text-base text-on-surface-variant leading-relaxed">
            Enter student registration ID to authenticate certification validity, student name, and view official PDF credentials directly from our ISO 9001:2015 certified database.
          </p>
        </div>
      </ScrollReveal>

      {/* Main Verification Card */}
      <ScrollReveal direction="up" delay={150}>
        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white border border-outline-variant rounded-2xl p-5 sm:p-8 shadow-xl verified-glow relative">
            <div className="flex items-center justify-between mb-6 border-b border-outline-variant/60 pb-3">
              <span className="text-base sm:text-lg font-headline font-semibold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                Verification Portal
              </span>
              <span className="text-[11px] font-mono font-medium text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-lg">
                ISO 9001:2015
              </span>
            </div>

            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                  Registration ID / Roll No.
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    placeholder="e.g. 399, 848, 871, 874, 872"
                    className="w-full bg-surface-container-low border border-outline px-4 py-3.5 rounded-xl font-mono text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none uppercase font-semibold tracking-wider text-on-surface pr-10"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant pointer-events-none text-xl">
                    qr_code_scanner
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isVerifying || !registrationNumber.trim()}
                className="w-full bg-primary text-white py-3.5 px-4 rounded-xl font-headline font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-on-primary-fixed-variant transition-all active:scale-[0.98] shadow-md shadow-primary/20 disabled:opacity-50 cursor-pointer"
              >
                {isVerifying ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-lg">sync</span>
                    AUTHENTICATING...
                  </>
                ) : (
                  <>
                    VERIFY CERTIFICATE
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </>
                )}
              </button>
            </form>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 animate-in fade-in">
                <span className="material-symbols-outlined text-red-500 text-2xl shrink-0">error</span>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider">VERIFICATION FAILED</h4>
                  <p className="text-xs text-red-600 font-medium mt-0.5">{error}</p>
                </div>
              </div>
            )}

            {/* Embedded Live PDF Document Preview Component */}
            {certificateData && (
              <PdfPreview
                result={certificateData}
                regNumber={registrationNumber}
                onClose={() => setCertificateData(null)}
              />
            )}
          </div>

          {/* Certificate Sample ID Suggestions */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-xs text-on-surface-variant">
              Sample Registration IDs:{" "}
              {["399", "848", "871", "874", "872"].map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setRegistrationNumber(id);
                    const result = verifyCertificate(id);
                    if (result) {
                      setCertificateData(result);
                      setError("");
                      setHasSearched(true);
                    }
                  }}
                  className="text-primary font-mono font-bold hover:underline px-2 py-1 bg-primary-fixed/40 rounded-lg mx-1 my-0.5 inline-block text-xs cursor-pointer"
                >
                  {id}
                </button>
              ))}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CertificateVerify;