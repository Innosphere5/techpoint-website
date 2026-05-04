"use client"
import Image from 'next/image';
import logo1 from "../images/logo1.png"
import logo2 from "../images/logo2.png"
import hero from "../images/hero3-bg.png"
import Link from "next/link"
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['DCA', 'Programming', 'Tally', 'Photoshop',];

  useEffect(() => {
    const typeSpeed = isDeleting ? 80 : 150;
    const currentWord = texts[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, charIndex, isDeleting, texts]);

  return (
    <div className="min-h-screen bg-white relative">
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/917340747117" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.506"/>
        </svg>
      </a>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight">
                <span className="text-[#1E293B]">Empower Your</span>
                <br />
                <span className="text-[#6C63FF]">Tech skill</span>
                <span className="text-[#1E293B]"> with</span>
                <br />
                <span className="inline-block min-w-[300px] text-left">
                  <span className="text-red-500">{currentText}</span>
                  <span className="text-red-500 animate-pulse">|</span>
                </span>
                <span className="text-[#1E293B] block mt-2">at Techpoint</span>
              </h1>

              {/* ISO Certification Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full border border-green-200 shadow-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <p className="text-sm font-semibold text-gray-700 font-montserrat">
                  ISO - 9001 Certified Government Registered Institute
                </p>
              </div>
            </div>

            {/* CTA Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/certificate-verify"
                className="bg-[#6C63FF] text-white px-8 py-4 rounded-lg font-semibold font-montserrat hover:bg-[#5b54e6] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center relative overflow-hidden group"
              >
                <span className="relative z-10">Certificate Verify</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>

            </div>

            {/* Footer Logos - Mobile Layout */}
            <div className="flex justify-center items-center gap-6 pt-6 md:hidden">
              <div className="relative">
                <Image
                  src={logo1}
                  alt="Partner Logo 1"
                  width={80}
                  height={60}
                  className="object-contain "
                />
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="relative">
                <Image
                  src={logo2}
                  alt="Partner Logo 2"
                  width={80}
                  height={60}
                  className="object-contain "
                />
              </div>
            </div>

            {/* Stats or Features */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#6C63FF] font-montserrat">1000+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 font-montserrat">15+</div>
                <div className="text-sm text-gray-600">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500 font-montserrat">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Hero Image Section */}
          <div className="relative hidden md:block">
            <div className="bg-white relative h-136 w-full flex items-center justify-center">
              {/* Hero Image */}
              <div className="relative z-30 transform hover:scale-105 transition-all duration-500 mb-10">
                <Image
                  src={hero}
                  alt="Hero Image"
                  width={450}
                  height={450}
                  className="rounded-xl object-contain shadow-2xl"
                />
              </div>

              {/* Floating Cards around Hero Image */}
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg animate-float border border-purple-100 z-40">
                <div className="text-sm font-semibold text-[#6C63FF]">💻 Digital Skills</div>
              </div>
              <div className="absolute top-10 -right-6 bg-white p-3 rounded-lg shadow-lg animate-float-delayed border border-red-100 z-40">
                <div className="text-sm font-semibold text-red-500">🎨 Creative Arts</div>
              </div>
              <div className="absolute -bottom-2 left-8 bg-white p-3 rounded-lg shadow-lg animate-float border border-purple-100 z-40">
                <div className="text-sm font-semibold text-[#6C63FF]">📊 IT knowledge</div>
              </div>
            </div>

            {/* Footer Logos - Desktop Layout */}
            <div className="flex justify-center items-center gap-8">
              <div className="relative">
                <Image
                  src={logo1}
                  alt="Partner Logo 1"
                  width={100}
                  height={75}
                  className="object-contain"
                />
              </div>
              <div className="w-px h-16 bg-gray-300"></div>
              <div className="relative">
                <Image
                  src={logo2}
                  alt="Partner Logo 2"
                  width={100}
                  height={75}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  );
};

export default Home;