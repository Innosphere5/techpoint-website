"use client";

import React from "react";
import Link from "next/link";

const coursesList = [
  {
    id: 1,
    title: "Tally Prime + GST",
    subtitle: "Accounting & Financial Management",
    description: "Complete accounting, inventory management, GST filing, and financial reporting for corporate roles.",
    duration: "6 Months",
    level: "Beginner to Expert",
    category: "Accounting",
    icon: "account_balance_wallet",
  },
  {
    id: 2,
    title: "Computer Basic (DCA)",
    subtitle: "Diploma in Computer Applications",
    description: "Master Windows OS, MS Word, MS Excel, PowerPoint, and Internet fundamentals.",
    duration: "3 Months",
    level: "Beginner",
    category: "Office",
    icon: "laptop",
  },
  {
    id: 3,
    title: "CorelDRAW Graphic Design",
    subtitle: "Vector Artwork & Printing",
    description: "Logo design, banners, vector illustration, and prepress layout design.",
    duration: "3 Months",
    level: "Creative Pro",
    category: "Design",
    icon: "palette",
  },
  {
    id: 4,
    title: "Adobe Photoshop",
    subtitle: "Digital Photo Editing & Retouching",
    description: "Photo editing, graphic design, social media artwork, and banner creation.",
    duration: "3 Months",
    level: "Creative Pro",
    category: "Design",
    icon: "image",
  },
  {
    id: 5,
    title: "C & C++ Programming",
    subtitle: "Software Development Logic",
    description: "Data structures, algorithms, object-oriented programming, and coding logic.",
    duration: "4 Months",
    level: "Intermediate",
    category: "Programming",
    icon: "code",
  },
  {
    id: 6,
    title: "Python Full Stack",
    subtitle: "Modern Programming Language",
    description: "Python scripting, logic development, file handling, and web framework basics.",
    duration: "6 Months",
    level: "Advanced",
    category: "Programming",
    icon: "terminal",
  },
];

const TechPointCourses = () => {
  return (
    <section className="py-xl px-gutter max-w-container-max mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-xl space-y-base">
        <span className="text-xs font-bold font-label-caps text-primary tracking-widest uppercase">
          ACADEMIC OFFERINGS
        </span>
        <h1 className="text-3xl sm:text-4xl font-headline font-bold text-on-surface">
          Industrial & Professional Certification Courses
        </h1>
        <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
          ISO 9001:2015 certified programs designed to bridge academic education with real-world industry demands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {coursesList.map((course) => (
          <div
            key={course.id}
            className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md sm:p-lg bento-card flex flex-col justify-between shadow-xs hover:border-primary transition-all"
          >
            <div>
              <div className="flex justify-between items-start mb-md">
                <div className="w-12 h-12 bg-primary-fixed text-primary rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{course.icon}</span>
                </div>
                <span className="px-sm py-xs bg-surface-container text-on-surface-variant rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {course.category}
                </span>
              </div>

              <h3 className="text-lg font-headline font-bold text-on-surface mb-xs">
                {course.title}
              </h3>
              <p className="text-xs font-bold text-primary mb-sm">{course.subtitle}</p>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-md">
                {course.description}
              </p>
            </div>

            <div className="pt-md border-t border-outline-variant space-y-md">
              <div className="flex justify-between text-xs font-mono text-on-surface-variant">
                <span>Duration: <strong className="text-on-surface">{course.duration}</strong></span>
                <span>Level: <strong className="text-on-surface">{course.level}</strong></span>
              </div>

              <div className="flex gap-base">
                <Link
                  href="/syllabus-download"
                  className="flex-1 py-base text-center border border-outline-variant hover:border-primary text-primary rounded-lg font-bold text-xs tracking-wider transition-all"
                >
                  SYLLABUS
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 py-base text-center bg-primary hover:bg-on-primary-fixed-variant text-white rounded-lg font-bold text-xs tracking-wider transition-all shadow-xs"
                >
                  ENROLL
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechPointCourses;