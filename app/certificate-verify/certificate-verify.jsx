"use client"
import React, { useState, useEffect } from 'react';
import { CheckCircle, Shield, Award, Sparkles, Lock, Search, Download, FileText, AlertCircle } from 'lucide-react';
import { verifyCertificate, getAllRegistrationNumbers, downloadCertificate } from './certificateData';

const CertificateVerify = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [particles, setParticles] = useState([]);
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState('');

  // Generate floating particles for background animation
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 4,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const handleVerify = async () => {
    if (!registrationNumber.trim()) return;

    setIsVerifying(true);
    setShowSuccess(false);
    setError('');
    setCertificateData(null);

    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);

      const certificate = verifyCertificate(registrationNumber);

      if (certificate) {
        setCertificateData(certificate);
        setIsVerified(true);
        setShowSuccess(true);
      } else {
        setError('Certificate not found. Please check your registration number.');
        setIsVerified(false);
      }
    }, 2000);
  };

  const handleDownload = async () => {
    if (certificateData) {
      try {
        await downloadCertificate(certificateData);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const handleReset = () => {
    setRegistrationNumber('');
    setIsVerified(false);
    setShowSuccess(false);
    setCertificateData(null);
    setError('');
  };

  return (
    <div className="">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 ">
        {/* Main Card */}
        <div className="w-full max-w-2xl mx-4">
          <div className="relative group">
            {/* Card Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6C63FF] to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
              {!showSuccess ? (
                <>
                  {/* Certificate Icon */}
                  <div className="text-center mb-8">
                    <div className="relative inline-block">
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg">
                        <div className="relative">
                          <div className="bg-gradient-to-r from-[#6C63FF] to-purple-600 rounded-xl p-4 shadow-lg">
                            <CheckCircle className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute -top-1 -right-1 bg-green-400 rounded-full w-6 h-6 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* Floating elements */}
                      <div className="absolute -top-2 left-12 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
                      <div className="absolute -bottom-2 right-12 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="space-y-6">
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Registration Number
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                        <input
                          type="text"
                          value={registrationNumber}
                          onChange={(e) => setRegistrationNumber(e.target.value)}
                          placeholder="Enter your certificate number (e.g., 400)"
                          className="relative w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6C63FF] focus:bg-white transition-all duration-300 text-gray-700 placeholder-gray-400"
                          disabled={isVerifying}
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <Lock className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="flex items-center space-x-2 bg-red-50 border border-red-200 rounded-xl p-4">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <span className="text-red-700 text-sm font-medium">{error}</span>
                      </div>
                    )}

                    <button
                      onClick={handleVerify}
                      disabled={!registrationNumber.trim() || isVerifying}
                      className="w-full relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-[#6C63FF] rounded-xl opacity-100 group-hover:opacity-90 transition duration-300"></div>


                      <div className="relative px-8 py-4 text-white font-semibold text-lg rounded-xl flex items-center justify-center space-x-3 transform group-hover:scale-105 transition-transform duration-200">
                        {isVerifying ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Verifying...</span>
                          </>
                        ) : (
                          <>
                            <Search className="w-5 h-5" />
                            <span>Verify Certificate</span>
                          </>
                        )}
                      </div>

                      {/* Button shine effect */}
                      <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 transition-all duration-700 group-hover:translate-x-full"></div>
                    </button>
                  </div>
                </>
              ) : (
                /* Certificate Display */
                <div className="text-center space-y-6">
                  {/* Success Icon */}
                  <div className="relative inline-block mb-6">
                    <div className="bg-green-100 rounded-full p-6">
                      <CheckCircle className="w-16 h-16 text-green-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-2">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">Certificate Verified!</h2>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                      <div className="space-y-3 text-left">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium">Student Name:</span>
                          <span className="text-gray-800 font-bold">{certificateData?.name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium">Registration No:</span>
                          <span className="text-gray-800 font-bold">{registrationNumber.toUpperCase()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Preview */}
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-300">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <FileText className="w-8 h-8 text-blue-600" />
                      <span className="text-lg font-semibold text-gray-700">Certificate Preview</span>
                    </div>
                    <iframe
                      src={`${certificateData?.pdfPath}#toolbar=0`}
                      className="w-full h-96 border rounded-lg"
                      title="Certificate Preview"
                      onError={(e) => {
                        console.error('PDF preview failed to load');
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="mt-4 text-center text-sm text-gray-600">
                      <p>If the preview doesn't load, you can still download the certificate using the button below.</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 hover:to-green-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Certificate</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Verify Another
                    </button>
                  </div>
                </div>
              )}

              {/* Security Badge */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full border border-green-200">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">SSL Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Valid Registration Numbers Info */}
        {!showSuccess && (
          <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-2xl w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sample Registration Numbers:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {getAllRegistrationNumbers().map((regNo) => (
                <div key={regNo} className="bg-purple-50 text-[#6C63FF] px-3 py-2 rounded-lg font-mono text-center">
                  {regNo}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from { 
            opacity: 0;
            transform: scale(0.8);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CertificateVerify;