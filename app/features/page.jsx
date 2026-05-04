import Image from 'next/image';
import Link from 'next/link';
import certificate from "../images/certificate.jpg"
import quiz from "../images/quiz.jpg"
import syllabus from "../images/syllabus.jpg"

export default function WebsiteFeatures() {
  return (
    <div className="min-h-screen bg-[#6C63FF] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-15">
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Website Features
          </h1>
        </div>
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-15 max-w-6xl mx-auto mt-25">
          {/* Certificate Verification Card */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <div className="relative h-40 w-full mb-4">
                <Image
                  src={certificate}
                  alt="Certificate Verification"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">
                Verified your course Certificate with entering registration number
              </h3>
              <Link href="/certificate-verify">
                <button className="w-full bg-[#6C63FF] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg mt-3">
                  Certificate Verification
                </button>
              </Link>
            </div>
          </div>
          {/* Quiz Test Card */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <div className="relative h-40 w-full mb-4">
                <Image
                  src={quiz}
                  alt="Quiz Test"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">
                Check your Skill knowledge with solving computer quiz test now
              </h3>
              <Link href="/quiz-test">
                <button className="w-full bg-[#6C63FF] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg mt-3">
                  Quiz Test
                </button>
              </Link>
            </div>
          </div>
          {/* Syllabus Download Card */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <div className="relative h-40 w-full mb-4">
                <Image
                  src={syllabus}
                  alt="Syllabus Download"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">
                Download your syllabus of DCA, Programming, Designing, Tally, Ms Excel.
              </h3>
              <Link href="/syllabus-download">
                <button className="w-full bg-[#6C63FF] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg mt-3">
                  Syllabus Download
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}