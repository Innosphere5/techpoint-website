"use client"
import Image from 'next/image';
import { Star, Youtube, Clock, Users, BookOpen, Award } from 'lucide-react';

// Course Card Component
function CourseCard({ course }) {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(course.rating)
            ? 'fill-amber-400 text-amber-400'
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  const formatNumber = (num) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
      {/* Thumbnail Container */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.levelColor}`}>
            {course.level}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-700">
            {course.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center mb-4">
          <Award className="w-4 h-4 text-gray-400 mr-2" />
          <span className="text-sm text-gray-600">{course.instructor}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5">{renderStars()}</div>
          <span className="text-sm font-semibold text-gray-900">
            {course.rating.toFixed(1)}
          </span>
          <span className="text-sm text-gray-500">
            ({formatNumber(course.totalRatings)})
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-1 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{course.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Users className="w-4 h-4" />
            <span className="text-sm">{formatNumber(course.students)}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm">{course.lessons} lessons</span>
          </div>
        </div>

        {/* Watch on YouTube Button */}
        <a
          href={course.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 group/btn"
        >
          <Youtube className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}

// Main Page Component
export default function CoursesPage() {
  const courses = [
    {
      id: '1',
      title: 'Complete HTML Mastery Course',
      description: 'Learn HTML from scratch and build amazing websites. Master semantic HTML, forms, accessibility, and modern HTML5 features.',
      thumbnail: '/thumbnails/html.jpg',
      rating: 4.8,
      totalRatings: 15400,
      duration: '8h 30m',
      students: 45200,
      lessons: 67,
      youtubeUrl: 'https://www.youtube.com/watch?v=example-html',
      category: 'Web Development',
      level: 'Beginner',
      levelColor: 'bg-green-100 text-green-700',
      instructor: 'John Smith'
    },
    {
      id: '2',
      title: 'CSS3 & Modern Styling Complete Guide',
      description: 'Master CSS from basics to advanced. Learn Flexbox, Grid, animations, responsive design, and modern CSS techniques.',
      thumbnail: '/thumbnails/css.jpg',
      rating: 4.9,
      totalRatings: 18900,
      duration: '12h 15m',
      students: 52300,
      lessons: 89,
      youtubeUrl: 'https://www.youtube.com/watch?v=example-css',
      category: 'Web Development',
      level: 'Beginner',
      levelColor: 'bg-green-100 text-green-700',
      instructor: 'Sarah Johnson'
    },
    {
      id: '3',
      title: 'JavaScript - The Complete Guide 2024',
      description: 'Deep dive into JavaScript ES6+. Master async/await, closures, prototypes, DOM manipulation, and modern JS patterns.',
      thumbnail: '/thumbnails/javascript.jpg',
      rating: 4.9,
      totalRatings: 32100,
      duration: '28h 45m',
      students: 98500,
      lessons: 156,
      youtubeUrl: 'https://www.youtube.com/watch?v=example-js',
      category: 'Programming',
      level: 'Intermediate',
      levelColor: 'bg-blue-100 text-blue-700',
      instructor: 'Mike Chen'
    },
    {
      id: '4',
      title: 'Python Programming: Zero to Hero',
      description: 'Complete Python course covering basics, OOP, data structures, algorithms, web scraping, and automation.',
      thumbnail: '/thumbnails/python.jpg',
      rating: 4.8,
      totalRatings: 42300,
      duration: '24h 20m',
      students: 126000,
      lessons: 142,
      youtubeUrl: 'https://www.youtube.com/watch?v=example-python',
      category: 'Programming',
      level: 'Beginner',
      levelColor: 'bg-green-100 text-green-700',
      instructor: 'Dr. Emily Watson'
    },
    {
      id: '5',
      title: 'Java Programming Masterclass',
      description: 'Comprehensive Java course from fundamentals to advanced. Learn OOP, collections, multithreading, and Spring framework.',
      thumbnail: '/thumbnails/java.jpg',
      rating: 4.7,
      totalRatings: 28700,
      duration: '32h 10m',
      students: 67800,
      lessons: 178,
      youtubeUrl: 'https://www.youtube.com/watch?v=example-java',
      category: 'Programming',
      level: 'Intermediate',
      levelColor: 'bg-blue-100 text-blue-700',
      instructor: 'Robert Kumar'
    },
    {
      id: '6',
      title: 'C/C++ Programming Complete Bundle',
      description: 'Master both C and C++ from basics to advanced. Learn memory management, pointers, STL, data structures, and algorithms.',
      thumbnail: '/thumbnails/cpp.jpg',
      rating: 4.8,
      totalRatings: 19500,
      duration: '38h 50m',
      students: 54200,
      lessons: 195,
      youtubeUrl: 'https://www.youtube.com/watch?v=example-cpp',
      category: 'Programming',
      level: 'Advanced',
      levelColor: 'bg-purple-100 text-purple-700',
      instructor: 'David Martinez'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Master Programming with Expert Courses
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Learn from industry experts and build real-world projects. Start your coding journey today!
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-white border-t border-gray-200 py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">
            Join over <span className="font-bold text-blue-600">500,000+</span> students learning to code
          </p>
        </div>
      </div>
    </main>
  );
}