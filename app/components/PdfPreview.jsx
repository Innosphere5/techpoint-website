"use client";

import React, { useState } from "react";
import { downloadCertificate } from "../certificate-verify/certificateData";

export default function PdfPreview({ result, regNumber, onClose }) {
  const [downloading, setDownloading] = useState(false);

  if (!result || !result.pdfPath) return null;

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadCertificate(result);
    } catch (err) {
      alert(err.message || "Failed to download certificate PDF.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="mt-6 space-y-4 max-w-full overflow-hidden animate-in fade-in zoom-in-95 duration-300">
      {/* Verification Status Header Card */}
      <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-xl">verified</span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest bg-emerald-200/80 px-2 py-0.5 rounded">
                RECORD VERIFIED
              </span>
              <span className="text-xs font-mono font-bold text-primary">
                REG: {regNumber.toUpperCase()}
              </span>
            </div>
            <h4 className="text-sm font-bold text-slate-900 mt-0.5 truncate">
              Student: {result.name}
            </h4>
          </div>
        </div>

        {/* Responsive Action Buttons Container */}
        <div className="grid grid-cols-2 gap-2 w-full lg:w-auto shrink-0">
          <a
            href={result.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-bold rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer text-center"
            title="Open in new tab"
          >
            <span className="material-symbols-outlined text-sm">open_in_new</span>
            <span>Open PDF</span>
          </a>

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 text-center"
          >
            {downloading ? (
              <>
                <span className="material-symbols-outlined animate-spin text-sm">sync</span>
                <span className="hidden sm:inline">Downloading...</span>
                <span className="sm:hidden">Saving...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Download PDF</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Embedded Live PDF Document Viewer Container */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl relative w-full">
        <div className="bg-slate-800/95 px-4 py-2.5 border-b border-slate-700 flex justify-between items-center text-xs font-mono text-slate-300 gap-2">
          <span className="flex items-center gap-2 truncate">
            <span className="material-symbols-outlined text-red-400 text-base shrink-0">picture_as_pdf</span>
            <span className="truncate text-[11px] sm:text-xs">{result.name}_Official_Certificate.pdf</span>
          </span>
          <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-amber-300 uppercase font-sans font-bold shrink-0">
            Live PDF
          </span>
        </div>

        {/* Responsive Frame Container */}
        <div className="w-full h-[360px] sm:h-[460px] md:h-[520px] bg-slate-800 relative">
          <iframe
            src={`${result.pdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
            title={`Certificate PDF for ${result.name}`}
            className="w-full h-full border-none"
          />
        </div>

        {/* Footer info bar */}
        <div className="bg-slate-800/95 p-3 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center px-4 gap-2 text-center sm:text-left">
          <span className="text-[11px] text-slate-400 font-mono truncate max-w-full">
            Tech Point Institutional Official Repository
          </span>
          <a
            href={result.pdfPath}
            download={`${result.name.replace(/\s+/g, '_')}_Certificate.pdf`}
            className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1 shrink-0"
          >
            Direct File Download <span className="material-symbols-outlined text-sm">download</span>
          </a>
        </div>
      </div>
    </div>
  );
}
