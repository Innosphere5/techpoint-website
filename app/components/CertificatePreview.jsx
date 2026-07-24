"use client";

import React, { useState } from "react";
import { downloadCertificate } from "../certificate-verify/certificateData";

export default function CertificatePreview({ result, regNumber, onClose }) {
  const [downloading, setDownloading] = useState(false);

  if (!result) return null;

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadCertificate(result);
    } catch (err) {
      alert(err.message || "Failed to download certificate.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="mt-6 animate-in fade-in zoom-in-95 duration-300">
      {/* Status Bar */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-t-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-emerald-600 text-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-xl">check_circle</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest bg-emerald-200/80 px-2 py-0.5 rounded">
              VERIFIED & AUTHENTIC
            </span>
            <h4 className="text-sm font-bold text-slate-900 mt-0.5">
              Record Found: {result.name}
            </h4>
          </div>
        </div>

        <button
          onClick={handleDownload}
          disabled={downloading}
          className="w-full sm:w-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          {downloading ? (
            <>
              <span className="material-symbols-outlined animate-spin text-base">sync</span>
              <span>Downloading...</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-base">download</span>
              <span>Download PDF</span>
            </>
          )}
        </button>
      </div>

      {/* Official Certificate Visual Document Preview */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white p-5 sm:p-8 rounded-b-2xl shadow-2xl relative overflow-hidden border-x border-b border-slate-700/80 space-y-6">
        {/* Decorative Background Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Certificate Frame Inner Border */}
        <div className="relative border-2 border-amber-400/40 rounded-xl p-5 sm:p-8 bg-slate-900/90 backdrop-blur-md shadow-inner space-y-6">
          {/* Header Seals & Logo */}
          <div className="flex justify-between items-start gap-4 border-b border-amber-400/20 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg border border-white/20 shrink-0">
                <span className="material-symbols-outlined text-2xl">terminal</span>
              </div>
              <div>
                <h3 className="text-lg font-headline font-extrabold tracking-tight text-white">
                  TECH POINT INSTITUTIONAL
                </h3>
                <p className="text-[10px] text-amber-400 tracking-widest uppercase font-bold">
                  GOVERNMENT REGISTERED | ISO 9001:2015 CERTIFIED
                </p>
              </div>
            </div>

            {/* Official Crest Badge */}
            <div className="hidden sm:flex flex-col items-end">
              <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/60 flex items-center justify-center text-amber-300">
                <span className="material-symbols-outlined text-xl">verified</span>
              </div>
              <span className="text-[9px] font-mono text-amber-300/80 mt-1 uppercase">ISO OFFICIAL</span>
            </div>
          </div>

          {/* Certificate Main Title */}
          <div className="text-center space-y-2 py-2">
            <span className="text-[11px] font-bold text-amber-400/90 tracking-widest uppercase block">
              OFFICIAL CERTIFICATE OF COMPLETION
            </span>
            <p className="text-xs text-slate-300 italic">
              This is to certify that
            </p>
            <h2 className="text-2xl sm:text-3xl font-headline font-extrabold text-white tracking-wide uppercase py-1 border-b border-white/10 max-w-md mx-auto">
              {result.name}
            </h2>
            <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed pt-1">
              has successfully qualified and completed the prescribed curriculum in <span className="text-amber-300 font-semibold">Computer Applications, Accounting & Skill Training</span> at Tech Point Institutional Campus, Bassi Pathana, Punjab.
            </p>
          </div>

          {/* Verification Details Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/5 border border-white/10 p-4 rounded-xl text-center font-mono text-xs">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-sans block">REGISTRATION NO.</span>
              <span className="font-bold text-amber-300 text-sm">{regNumber.toUpperCase()}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-sans block">STATUS</span>
              <span className="font-bold text-emerald-400 text-xs flex items-center justify-center gap-1 mt-0.5">
                <span className="material-symbols-outlined text-xs">check_circle</span>
                VALID
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-sans block">ISSUING BODY</span>
              <span className="font-bold text-slate-200 text-xs">TECH POINT BOARD</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-sans block">LOCATION</span>
              <span className="font-bold text-slate-200 text-xs">BASSI PATHANA</span>
            </div>
          </div>

          {/* Signatures & Stamp Footer */}
          <div className="flex justify-between items-end pt-2 border-t border-amber-400/20 text-xs">
            <div className="space-y-1 text-left">
              <div className="w-20 h-0.5 bg-amber-400/60 mb-1"></div>
              <p className="font-bold text-slate-200">Gaurav Kumar</p>
              <p className="text-[10px] text-slate-400">Academic Director</p>
            </div>

            {/* QR Code / Hologram Visual */}
            <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-2 rounded-lg border border-amber-400/30">
              <span className="material-symbols-outlined text-amber-400 text-2xl">qr_code_2</span>
              <div className="text-left text-[9px] text-slate-300 leading-tight">
                <p className="font-bold text-amber-300">DIGITAL VERIFIED</p>
                <p className="font-mono">ID: {regNumber}</p>
              </div>
            </div>

            <div className="space-y-1 text-right">
              <div className="w-20 h-0.5 bg-amber-400/60 mb-1 ml-auto"></div>
              <p className="font-bold text-slate-200">Controller of Exams</p>
              <p className="text-[10px] text-slate-400">ISO 9001:2015 Desk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
