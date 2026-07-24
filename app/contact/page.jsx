"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-gutter max-w-container-max mx-auto min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-3">
        <span className="text-xs font-bold text-primary tracking-widest uppercase">
          CAMPUS & ACADEMIC INQUIRIES
        </span>
        <h1 className="text-2xl sm:text-4xl font-headline font-bold text-on-surface">
          Contact Tech Point Institutional
        </h1>
        <p className="text-xs sm:text-base text-on-surface-variant leading-relaxed">
          Have questions about admission, course fees, certificate verification, or batch timings? Get in touch with our counseling desk.
        </p>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div className="bg-white border border-outline-variant p-5 sm:p-6 rounded-2xl text-center shadow-xs space-y-2">
          <div className="w-12 h-12 bg-primary-fixed text-primary rounded-xl flex items-center justify-center mx-auto mb-2">
            <span className="material-symbols-outlined text-2xl">call</span>
          </div>
          <h3 className="font-bold text-on-surface text-base">Call Counseling</h3>
          <p className="text-xs font-mono font-bold text-primary">
            <a href="tel:+917973542073" className="hover:underline">+91 79735 42073</a>
          </p>
          <p className="text-[11px] text-on-surface-variant mt-1">
            WhatsApp: <a href="https://wa.me/917340747117" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">+91 73407 47117</a>
          </p>
        </div>

        <div className="bg-white border border-outline-variant p-5 sm:p-6 rounded-2xl text-center shadow-xs space-y-2">
          <div className="w-12 h-12 bg-secondary-fixed text-secondary rounded-xl flex items-center justify-center mx-auto mb-2">
            <span className="material-symbols-outlined text-2xl">mail</span>
          </div>
          <h3 className="font-bold text-on-surface text-base">Email Desk</h3>
          <p className="text-xs font-mono font-bold text-secondary">
            <a href="mailto:gktechp931@gmail.com" className="hover:underline">gktechp931@gmail.com</a>
          </p>
          <p className="text-[11px] text-on-surface-variant mt-1">Official Student Helpdesk</p>
        </div>

        <div className="bg-white border border-outline-variant p-5 sm:p-6 rounded-2xl text-center shadow-xs space-y-2">
          <div className="w-12 h-12 bg-tertiary-fixed text-tertiary rounded-xl flex items-center justify-center mx-auto mb-2">
            <span className="material-symbols-outlined text-2xl">location_on</span>
          </div>
          <h3 className="font-bold text-on-surface text-base">Campus Location</h3>
          <p className="text-xs font-semibold text-on-surface">Near Gaushala Road</p>
          <p className="text-[11px] text-on-surface-variant mt-1">Bassi Pathana, Punjab 140412</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form */}
        <div className="bg-white border border-outline-variant p-5 sm:p-8 rounded-2xl shadow-md space-y-6">
          <h3 className="text-xl font-headline font-bold text-on-surface">Send Academic Message</h3>

          {submitted ? (
            <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center space-y-3">
              <span className="material-symbols-outlined text-green-600 text-4xl">check_circle</span>
              <h4 className="font-bold text-green-800 text-sm">Message Sent Successfully!</h4>
              <p className="text-xs text-green-700 leading-relaxed">
                Our academic counselor will respond to your inquiry within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg text-xs font-bold cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Gurpreet Singh"
                    className="w-full bg-surface-container-low border border-outline p-3 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-primary outline-none text-on-surface"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-surface-container-low border border-outline p-3 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-primary outline-none font-mono text-on-surface"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                  Course of Interest
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-surface-container-low border border-outline p-3 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-primary outline-none text-on-surface"
                >
                  <option value="">Select a course...</option>
                  <option value="tally">Tally Prime + GST</option>
                  <option value="dca">Computer Basic (DCA)</option>
                  <option value="design">CorelDRAW & Photoshop</option>
                  <option value="coding">C / C++ & Python</option>
                  <option value="typing">English / Punjabi Typing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                  Message / Question
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask any question regarding admission, syllabus, or certificate verification..."
                  className="w-full bg-surface-container-low border border-outline p-3 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-primary outline-none text-on-surface"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-on-primary-fixed-variant text-white py-3.5 px-4 rounded-xl font-bold text-xs tracking-wider transition-all shadow-md cursor-pointer"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          )}
        </div>

        {/* Map / Directions Card */}
        <div className="bg-white border border-outline-variant p-5 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-headline font-bold text-on-surface">
              Visit Campus in Bassi Pathana
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Our campus is located in Fatehgarh Sahib district, Punjab. Students can visit during operational hours for live lab tours and counseling.
            </p>
          </div>

          <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-6 text-center space-y-3">
            <span className="material-symbols-outlined text-primary text-4xl">map</span>
            <h4 className="font-bold text-sm text-on-surface">Tech Point Institutional Campus</h4>
            <p className="text-xs text-on-surface-variant font-mono leading-relaxed">
              Near Gaushala Road, Bassi Pathana, Fatehgarh Sahib, Punjab - 140412
            </p>
            <a
              href="https://maps.google.com/?q=Bassi+Pathana,+Punjab"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 bg-primary text-white rounded-xl text-xs font-bold tracking-wider inline-block shadow-xs hover:bg-on-primary-fixed-variant transition-colors"
            >
              OPEN GOOGLE MAPS
            </a>
          </div>

          <div className="p-4 bg-surface-container-low rounded-xl text-xs text-on-surface-variant space-y-1">
            <p className="font-bold text-on-surface">Campus Hours:</p>
            <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
