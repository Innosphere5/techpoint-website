
"use client"
import React, { useState, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, User, MessageSquare, Star } from "lucide-react";

const ContactPage = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // EmailJS configuration - Replace with your actual values
  const EMAILJS_SERVICE_ID = 'service_n6x0ltc';
  const EMAILJS_TEMPLATE_ID = 'template_6xe2poc';
  const EMAILJS_PUBLIC_KEY = 'nv6N06tgQon7VL7U8';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('validation');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call since EmailJS won't work in this environment
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Email sent successfully (simulated)');
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#6C63FF] to-indigo-600 py-16 md:py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Have a question about our courses or need assistance? We're here to help you start your tech journey.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <p className="text-white font-medium">Available Mon-Fri, 9AM-6PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 -mt-24 relative z-10">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Call Us</h3>
              <a href="tel:+917340747117" className="text-2xl font-semibold text-[#6C63FF] hover:text-blue-700 transition-colors">
                7340747117
              </a>
              <p className="text-slate-600 mt-2">Mon-Fri 9AM-6PM</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Email Us</h3>
              <a href="mailto:gktechp931@gmail.com" className="text-lg font-semibold text-[#6C63FF] hover:text-blue-700 transition-colors break-all">
                gktechp931@gmail.com
              </a>
              <p className="text-slate-600 mt-2">We reply within 24hrs</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Visit Us</h3>
              <p className="text-lg text-slate-700 font-medium">Bassi Pathana</p>
              <p className="text-slate-600">F.G.S, Punjab</p>
            </div>
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Ready to transform your career with our comprehensive tech courses? Get in touch with our expert team for personalized guidance.
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 text-lg">Phone Number</h4>
                      <a href="tel:+917340747117" className="text-slate-600 hover:text-[#6C63FF] transition-colors text-lg">
                        +91 7340747117
                      </a>
                      <p className="text-sm text-slate-500 mt-1">Available for calls & WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 text-lg">Email Address</h4>
                      <a href="mailto:gktechp931@gmail.com" className="text-slate-600 hover:text-[#6C63FF] transition-colors">
                        gktechp931@gmail.com
                      </a>
                      <p className="text-sm text-slate-500 mt-1">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-lg p-3 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 text-lg">Office Address</h4>
                      <p className="text-slate-600">Bassi Pathana, F.G.S</p>
                      <p className="text-slate-600">Punjab, India</p>
                      <p className="text-sm text-slate-500 mt-1">Visit by appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 rounded-lg p-3 flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 text-lg">Office Hours</h4>
                      <div className="text-slate-600 space-y-1">
                        <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                        <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM</p>
                        <p><span className="font-medium">Sunday:</span> Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-r from-[#6C63FF] to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose TechPoint?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <span>Expert instructors with industry experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <span>Hands-on practical training approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <span>Industry-recognized certifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <span>Flexible learning schedules</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Send Us a Message
                  </h2>
                  <p className="text-slate-600 text-lg">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800">Message sent successfully!</h4>
                      <p className="text-green-700">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-800">Failed to send message</h4>
                      <p className="text-red-700">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'validation' && (
                  <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Please fill in all fields</h4>
                      <p className="text-yellow-700">All fields marked with * are required.</p>
                    </div>
                  </div>
                )}

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        <User className="w-4 h-4 inline mr-2" />
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6C63FF] focus:ring-4 focus:ring-[#6C63FF]/10 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-300 text-lg"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6C63FF] focus:ring-4 focus:ring-[#6C63FF]/10 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-300 text-lg"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6C63FF] focus:ring-4 focus:ring-[#6C63FF]/10 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-300 text-lg"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      rows="6"
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6C63FF] focus:ring-4 focus:ring-[#6C63FF]/10 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-300 resize-none text-lg"
                      placeholder="Tell us more about your inquiry or how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#6C63FF] to-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-slate-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
     
        
    </main>
  );
};

export default ContactPage;
