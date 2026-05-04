"use client"
import React from "react";
import { Download, FileText, Palette, Calculator, Image, Terminal, Code2, Database } from "lucide-react";

const SyllabusDownloadPage = () => {
  const syllabusFiles = [
    { 
      name: "CorelDRAW", 
      file: "/Syllabus/CORAL DRAW SYLLABUS (1).pdf",
      icon: Palette,
      description: "Complete graphics design and vector illustration course"
    },
    { 
      name: "MS Word", 
      file: "/Syllabus/MS WORD SYLLABUS.pdf",
      icon: FileText,
      description: "Master document creation and formatting skills"
    },
    { 
      name: "Tally", 
      file: "/Syllabus/TALLY SYLLABUS.pdf",
      icon: Calculator,
      description: "Comprehensive accounting and ERP software training"
    },
    { 
      name: "Photoshop", 
      file: "/Syllabus/photoshop syllabus.pdf",
      icon: Image,
      description: "Professional photo editing and digital design course"
    },
    { 
      name: "Excel", 
      file: "/Syllabus/excel.pdf",
      icon: Database,
      description: "Professional Excel syllabus"
    },
    { 
      name: "C language", 
      file: "/Syllabus/c.pdf",
      icon: Terminal,
      description: "Complete c programming language course"
    },
    { 
      name: "C++ language", 
      file: "/Syllabus/cpp.pdf",
      icon: Code2,
      description: "Complete c++ programming language course"
    },
  ];

  const handleDownload = async (syllabus) => {
    try {
      // Check if file exists first
      const response = await fetch(syllabus.file);
      if (!response.ok) {
        alert('Syllabus file not found. Please contact support.');
        return;
      }

      // Create download link
      const link = document.createElement('a');
      link.href = syllabus.file;
      link.download = `${syllabus.name.replace(/\s+/g, '_')}_Syllabus.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download syllabus. Please try again.');
    }
  };

  return (
    <main className=" min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Header Section */}
        <div className="text-center mb-1 sm:mb-10">
          <div className="relative inline-block mb-4 sm:mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight font-sans">
              Download Your Course 
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent block mt-1 sm:mt-2">
                Syllabus
              </span>
            </h1>
         
          </div>

        </div>

        {/* Syllabus Cards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8">
            {syllabusFiles.map((syllabus, index) => {
              const IconComponent = syllabus.icon;
              return (
                <div 
                  key={index} 
                  className="group relative w-full opacity-0 translate-y-8 animate-fade-in-up"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {/* Card Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

                  {/* Main Card */}
                  <div className="relative bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                    {/* Mobile Layout - Stacked */}
                    <div className="block sm:hidden space-y-4">
                      {/* Icon Section - Mobile */}
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2.5 transform group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          {/* Floating badge */}
                          <div className="absolute -top-1 -right-1 bg-green-400 rounded-full w-4 h-4 flex items-center justify-center shadow-md">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* Content Section - Mobile */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {syllabus.name}
                        </h3>
                        <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                          {syllabus.description}
                        </p>

                        {/* Download Button - Mobile */}
                        <button 
                          onClick={() => handleDownload(syllabus)}
                          className="group/btn relative overflow-hidden w-full"
                        >
                          <div className="absolute inset-0 bg-[#6C63FF] rounded-xl opacity-100 group-hover/btn:opacity-90 transition duration-300"></div>
                        

                          <div className="relative flex items-center justify-center space-x-2 px-4 py-3 text-white font-semibold text-base rounded-xl transform group-hover/btn:scale-105 transition-transform duration-200">
                            <Download className="w-4 h-4 group-hover/btn:animate-bounce" />
                            <span>Download Syllabus</span>
                          </div>

                          {/* Button shine effect */}
                          <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 transform -skew-x-12 transition-all duration-700 group-hover/btn:translate-x-full"></div>
                        </button>
                      </div>
                    </div>

                    {/* Desktop Layout - Side by Side */}
                    <div className="hidden sm:flex items-start space-x-4 lg:space-x-6">
                      <div className="relative flex-shrink-0">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-3 lg:p-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2.5 lg:p-3 transform group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                          </div>
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -top-1 -right-1 bg-green-400 rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center shadow-md">
                          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* Content Section - Desktop */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2 lg:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {syllabus.name}
                        </h3>
                        <p className="text-slate-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                          {syllabus.description}
                        </p>

                        {/* Download Button - Desktop */}
                        <button 
                          onClick={() => handleDownload(syllabus)}
                          className="group/btn relative overflow-hidden w-full"
                        >
                          <div className="absolute inset-0 bg-[#6C63FF] rounded-xl opacity-100 group-hover/btn:opacity-90 transition duration-300"></div>
                     

                          <div className="relative flex items-center justify-center space-x-2 lg:space-x-3 px-4 lg:px-6 py-3 lg:py-4 text-white font-semibold text-base lg:text-lg rounded-xl transform group-hover/btn:scale-105 transition-transform duration-200">
                            <Download className="w-4 h-4 lg:w-5 lg:h-5 group-hover/btn:animate-bounce" />
                            <span>Download Syllabus</span>
                          </div>

                          {/* Button shine effect */}
                          <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 transform -skew-x-12 transition-all duration-700 group-hover/btn:translate-x-full"></div>
                        </button>
                      </div>
                    </div>

                    {/* Card Border Gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg max-w-4xl mx-auto border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 font-sans">
                Course Information
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              All syllabuses are regularly updated to reflect current industry standards and best practices. 
              Each course includes practical assignments, projects, and assessments to ensure comprehensive learning.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </main>
  );
};

export default SyllabusDownloadPage;