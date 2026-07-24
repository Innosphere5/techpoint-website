"use client";

import React, { useState } from "react";

const SyllabusDownloadPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");

  const syllabusFiles = [
    {
      id: "tally",
      name: "Tally Prime + GST Advanced Curriculum",
      version: "v2.4",
      size: "1.2 MB",
      updated: "Updated July 2024",
      file: "/Syllabus/TALLY SYLLABUS.pdf",
      category: "Accounting",
      iconColor: "bg-amber-50 text-amber-600",
    },
    {
      id: "coreldraw",
      name: "CorelDRAW Graphic Design & Illustration",
      version: "v3.1",
      size: "2.5 MB",
      updated: "Updated June 2024",
      file: "/Syllabus/CORAL DRAW SYLLABUS (1).pdf",
      category: "Design",
      iconColor: "bg-red-50 text-red-600",
    },
    {
      id: "photoshop",
      name: "Adobe Photoshop Photo Editing & UI Design",
      version: "v2.0",
      size: "1.8 MB",
      updated: "Updated May 2024",
      file: "/Syllabus/photoshop syllabus.pdf",
      category: "Design",
      iconColor: "bg-blue-50 text-blue-600",
    },
    {
      id: "excel",
      name: "Advanced MS Excel Data & Analytics",
      version: "v4.0",
      size: "950 KB",
      updated: "Updated August 2024",
      file: "/Syllabus/excel.pdf",
      category: "Office",
      iconColor: "bg-emerald-50 text-emerald-600",
    },
    {
      id: "word",
      name: "MS Word Professional Document Design",
      version: "v1.5",
      size: "820 KB",
      updated: "Updated April 2024",
      file: "/Syllabus/MS WORD SYLLABUS.pdf",
      category: "Office",
      iconColor: "bg-indigo-50 text-indigo-600",
    },
    {
      id: "c-lang",
      name: "C Programming Language Fundamentals",
      version: "v1.1",
      size: "1.4 MB",
      updated: "Updated March 2024",
      file: "/Syllabus/c.pdf",
      category: "Programming",
      iconColor: "bg-purple-50 text-purple-600",
    },
    {
      id: "cpp-lang",
      name: "C++ Programming & Object Oriented Design",
      version: "v2.2",
      size: "1.6 MB",
      updated: "Updated March 2024",
      file: "/Syllabus/cpp.pdf",
      category: "Programming",
      iconColor: "bg-sky-50 text-sky-600",
    },
  ];

  const handleDownload = async (syllabus) => {
    try {
      const response = await fetch(syllabus.file);
      if (!response.ok) {
        alert("Syllabus file not found. Please contact support.");
        return;
      }
      const link = document.createElement("a");
      link.href = syllabus.file;
      link.download = `${syllabus.name.replace(/\s+/g, "_")}_Syllabus.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download syllabus. Please try again.");
    }
  };

  const filteredFiles = syllabusFiles.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeFilter === "ALL" || item.category.toUpperCase() === activeFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-gutter max-w-container-max mx-auto min-h-screen">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
        <span className="text-xs font-bold text-primary tracking-widest uppercase">
          OFFICIAL CURRICULUM & MODULES
        </span>
        <h1 className="text-2xl sm:text-4xl font-headline font-bold text-on-surface">
          Institutional Document Library
        </h1>
        <p className="text-xs sm:text-base text-on-surface-variant leading-relaxed">
          Download updated course modules, subject breakdowns, and detailed syllabi in official PDF format for offline preparation.
        </p>
      </div>

      {/* Document Search & Filter Container */}
      <div className="max-w-4xl mx-auto border border-outline-variant rounded-2xl overflow-hidden shadow-xs bg-white">
        <div className="bg-surface-container-low p-4 flex flex-col sm:flex-row gap-3 border-b border-outline-variant items-center">
          <div className="flex-1 relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">
              search
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search syllabus by course name, e.g. Tally, C++, Photoshop..."
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-outline outline-none focus:ring-2 focus:ring-primary transition-all text-xs sm:text-sm text-on-surface"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {["ALL", "ACCOUNTING", "OFFICE", "DESIGN", "PROGRAMMING"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all whitespace-nowrap border shrink-0 ${
                  activeFilter === category
                    ? "bg-primary text-white border-primary shadow-xs"
                    : "bg-white text-on-surface-variant border-outline hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Document List Rows */}
        <div className="divide-y divide-outline-variant">
          {filteredFiles.length > 0 ? (
            filteredFiles.map((file) => (
              <div
                key={file.id}
                className="p-4 sm:p-5 hover:bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-4 group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${file.iconColor}`}
                  >
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      picture_as_pdf
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-bold text-on-surface text-sm sm:text-base group-hover:text-primary transition-colors">
                        {file.name}
                      </p>
                      <span className="text-[10px] font-bold text-primary bg-primary-fixed px-2 py-0.5 rounded uppercase">
                        {file.category}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-on-surface-variant mt-0.5 uppercase tracking-wider">
                      {file.version} • {file.size} • {file.updated}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleDownload(file)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-outline-variant flex items-center justify-center gap-2 text-primary font-bold text-xs hover:bg-primary hover:text-white transition-all shadow-xs group-hover:border-primary shrink-0 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">download</span>
                  DOWNLOAD PDF
                </button>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-on-surface-variant space-y-2">
              <span className="material-symbols-outlined text-4xl text-outline">find_in_page</span>
              <p className="text-sm font-medium">No syllabus documents found matching your search query.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("ALL");
                }}
                className="text-primary text-xs font-bold underline hover:text-on-primary-fixed-variant"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        <div className="p-4 bg-surface-container-low border-t border-outline-variant text-center">
          <p className="text-xs text-on-surface-variant font-medium">
            Need customized syllabus details? Contact our academic department at{" "}
            <a href="tel:+919876543210" className="text-primary font-bold underline">
              +91 98765 43210
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SyllabusDownloadPage;