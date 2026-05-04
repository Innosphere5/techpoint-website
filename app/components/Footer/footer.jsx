
"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Youtube,
  ExternalLink,
  Clock,
  Award,
  Users,
  BookOpen
} from 'lucide-react';
import logo from '../Navbar/techpoint.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Certificate Verification', href: '/certificate-verify' },
    { name: 'Syllabus Download', href: '/syllabus-download' },
    { name: 'Typing Test', href: '/typing-test' },
    { name: 'Quiz Test', href: '/quiz-test' }
  ];

  const courses = [
    'Digital Computer Application (DCA)',
    'Graphic Designing',
    'Tally Accounting',
    'MS Office',
    'Programming Languages'
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Students Trained' },
    { icon: Award, number: '50+', label: 'Certificates Issued' },
    { icon: BookOpen, number: '10+', label: 'Courses Available' },
    { icon: Clock, number: '5+', label: 'Years Experience' }
  ];

  return (
    <footer className="bg-[#6C63FF]  text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 font-montserrat">
                    {stat.number}
                  </div>
                  <div className="text-slate-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
            
                <h3 className="text-2xl font-bold text-white font-montserrat">
                  TechPoint
                </h3>
              </div>
              
              <p className="text-slate-300 leading-relaxed text-sm">
               We provide quality training in computer applications, design, and professional skills to help you excel in your career.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-200 text-sm">
                    Bassi Pathana, F.G.S<br />
                    Punjab, India
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                  <a href="tel:+917340747117" className="text-slate-200 hover:text-white transition-colors text-sm">
                    7340747117
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                  <a href="mailto:gktechp931@gmail.com" className="text-slate-200 hover:text-white transition-colors text-sm">
                    gktechp931@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white font-montserrat">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white font-montserrat">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {service.name}
                      </span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses & Social */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white font-montserrat">Popular Courses</h4>
              <ul className="space-y-2">
                {courses.map((course, index) => (
                  <li key={index} className="text-slate-300 text-sm flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {course}
                  </li>
                ))}
              </ul>

            
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} TechPoint Institute. All rights reserved. 
              <span className="hidden sm:inline"> | Designed with ❤️ for quality education</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-slate-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-500/10 to-pink-500/10 rounded-full translate-x-12 translate-y-12"></div>
    </footer>
  );
};

export default Footer;
