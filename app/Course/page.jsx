"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Star, Clock, Users, Award, Sparkles } from 'lucide-react';

const TechPointCourses = () => {
  const [isHovered, setIsHovered] = useState(false);

  const courses = [
    {
      id: 1,
      title: "MS Excel",
      subtitle: "Master Data Analysis",
      description: "Advanced formulas, pivot tables, macros, and data visualization techniques",
      icon: "📊",
      gradient: "from-green-50 to-green-100",
      accentColor: "green-500",
      borderColor: "green-200",
      buttonGradient: "from-green-500 to-green-600",
      duration: "6 months",
      students: "2.5k+",
      rating: 4.9,
      level: "Beginner to Advanced"
    },
    {
      id: 2,
      title: "MS Word",
      subtitle: "Professional Documentation",
      description: "Advanced formatting, templates, mail merge, and professional document creation",
      icon: "📝",
      gradient: "from-blue-50 to-blue-100",
      accentColor: "blue-500",
      borderColor: "teal-200",
      buttonGradient: "from-blue-500 to-blue-600",
      duration: "3 months",
      students: "1.8k+",
      rating: 4.8,
      level: "Beginner to Pro"
    },
    {
      id: 3,
      title: "PowerPoint",
      subtitle: "Stunning Presentations",
      description: "Design principles, animations, interactive presentations, and storytelling",
      icon: "🎯",
      gradient: "from-orange-50 to-orange-100",
      accentColor: "orange-500",
      borderColor: "orange-200",
      buttonGradient: "from-orange-500 to-orange-600",
      duration: "2 months",
      students: "3.2k+",
      rating: 4.9,
      level: "All Levels"
    },
    {
      id: 4,
      title: "Tally",
      subtitle: "Accounting Excellence",
      description: "Complete accounting, inventory management, GST, and financial reporting",
      icon: "💰",
      gradient: "from-purple-50 to-purple-100",
      accentColor: "purple-500",
      borderColor: "purple-200",
      buttonGradient: "from-purple-500 to-purple-600",
      duration: "3 months",
      students: "1.5k+",
      rating: 4.7,
      level: "Beginner to Expert"
    },
    {
      id: 5,
      title: "CorelDRAW",
      subtitle: "Vector Graphics Design",
      description: "Logo design, illustrations, print media, and professional graphic design",
      icon: "🎨",
      gradient: "from-red-50 to-red-100",
      accentColor: "red-500",
      borderColor: "red-200",
      buttonGradient: "from-red-500 to-red-600",
      duration: "3 months",
      students: "2.1k+",
      rating: 4.8,
      level: "Creative Professional"
    },
    {
      id: 6,
      title: "Photoshop",
      subtitle: "Image Mastery",
      description: "Photo editing, digital art, compositing, and advanced retouching techniques",
      icon: "🖼️",
      gradient: "from-indigo-50 to-indigo-100",
      accentColor: "indigo-500",
      borderColor: "indigo-200",
      buttonGradient: "from-indigo-500 to-indigo-600",
      duration: "4 months",
      students: "4.2k+",
      rating: 4.9,
      level: "Creative Pro"
    },
    {
      id: 7,
      title: "Video Editing",
      subtitle: "Cinematic Creation",
      description: "Professional video editing, color grading, effects, and motion graphics",
      icon: "🎬",
      gradient: "from-pink-50 to-pink-100",
      accentColor: "pink-500",
      borderColor: "pink-200",
      buttonGradient: "from-pink-500 to-pink-600",
      duration: "6 months",
      students: "3.8k+",
      rating: 4.8,
      level: "Creative Master"
    },
    {
      id: 8,
      title: "Typing Master",
      subtitle: "Speed & Accuracy",
      description: "Touch typing, speed building, accuracy improvement, and professional typing skills",
      icon: "⌨️",
      gradient: "from-teal-50 to-teal-100",
      accentColor: "teal-500",
      borderColor: "teal-200",
      buttonGradient: "from-teal-500 to-teal-600",
      duration: "3 months",
      students: "5.1k+",
      rating: 4.6,
      level: "All Levels"
    }
  ];

  // Duplicate courses for infinite scroll effect
  const infiniteCourses = [...courses, ...courses, ...courses];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-pink-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-100 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center py-16 px-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-8 border border-purple-200 shadow-lg">
          <Award className="w-5 h-5 text-purple-600" />
          <span className="text-purple-800 font-semibold">Premium Courses Available</span>
          <Sparkles className="w-4 h-4 text-purple-600" />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-[#6C63FF] mb-6 leading-tight">
          TechPoint Institute
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto font-medium">
          Master Industry-Leading Software & Skills
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-700">
          <span className="text-lg font-semibold">Check Your Interest & Start Today</span>
          <ChevronRight className="w-6 h-6 animate-pulse text-purple-600" />
        </div>
      </div>

      {/* Horizontal Scrolling Cards */}
      <div 
        className="relative overflow-hidden py-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`flex gap-8 px-4 transition-all duration-300 ${isHovered ? 'animate-pause' : 'animate-scroll'}`}>
          {infiniteCourses.map((course, index) => (
            <div
              key={`${course.id}-${index}`}
              className="flex-shrink-0 w-80 md:w-96 group cursor-pointer"
            >
              <div className={`relative h-96 md:h-[28rem] bg-white rounded-3xl border-2 border-${course.borderColor} overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl shadow-lg group-hover:shadow-${course.accentColor}/20`}>

                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-${course.accentColor} opacity-10 rounded-bl-3xl`}></div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                      {course.icon}
                    </div>
                    <div className={`flex items-center gap-1 bg-yellow-50 rounded-full px-3 py-2 border border-yellow-200 shadow-sm`}>
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-yellow-700 font-bold text-sm">{course.rating}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <h3 className={`text-2xl md:text-3xl font-bold text-gray-800 mb-2 group-hover:text-${course.accentColor} transition-colors duration-300`}>
                      {course.title}
                    </h3>
                    <p className={`text-${course.accentColor} font-semibold text-lg`}>
                      {course.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow font-medium">
                    {course.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{course.students}</span>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="mb-6">
                    <span className={`inline-block bg-${course.accentColor}/10 border border-${course.accentColor}/20 rounded-full px-4 py-2 text-${course.accentColor} text-sm font-semibold`}>
                      {course.level}
                    </span>
                  </div>

                  {/* CTA Button */}
                
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

     

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 5s linear infinite;
        }

        .animate-pause {
          animation-play-state: continued;
        }
      `}</style>
    </div>
  );
};

export default TechPointCourses;