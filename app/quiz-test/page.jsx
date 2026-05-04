"use client"
import React, { useState } from 'react';

// Quiz data
const quizData = [
  {
    "question": "What does CPU stand for?",
    "options": ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Control Processing Unit"],
    "answer": "Central Processing Unit"
  },
  {
    "question": "Which of the following is an input device?",
    "options": ["Monitor", "Keyboard", "Printer", "Speaker"],
    "answer": "Keyboard"
  },
  {
    "question": "What type of memory is RAM?",
    "options": ["Permanent", "Volatile", "Optical", "Magnetic"],
    "answer": "Volatile"
  },
  {
    "question": "Which language is primarily used for web development?",
    "options": ["Python", "HTML", "C++", "Java"],
    "answer": "HTML"
  },
  {
    "question": "Which company developed the Windows operating system?",
    "options": ["Apple", "Microsoft", "Google", "IBM"],
    "answer": "Microsoft"
  },
  {
    "question": "What is the function of an operating system?",
    "options": ["Creates documents", "Manages hardware and software", "Compiles code", "Formats storage devices"],
    "answer": "Manages hardware and software"
  },
  {
    "question": "What does 'www' stand for in a website browser?",
    "options": ["World Wide Web", "Web World Wire", "World Web Wide", "Wide World Web"],
    "answer": "World Wide Web"
  },
  {
    "question": "Which storage device typically has the largest storage capacity?",
    "options": ["Floppy Disk", "CD", "Hard Disk Drive", "USB Flash Drive"],
    "answer": "Hard Disk Drive"
  },
  {
    "question": "What is phishing?",
    "options": [
      "A type of firewall",
      "A way to improve network speed",
      "A cyber attack to steal personal data",
      "An online shopping website"
    ],
    "answer": "A cyber attack to steal personal data"
  },
  {
    "question": "What does HTTP stand for?",
    "options": [
      "HyperText Transfer Protocol",
      "HyperText Transmission Panel",
      "High Transfer Text Protocol",
      "Hyperlink Text Transfer Protocol"
    ],
    "answer": "HyperText Transfer Protocol"
  }
];

const QuizTestPage = () => {
  const [studentName, setStudentName] = useState('');
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (studentName.trim()) {
      setNameSubmitted(true);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setQuizCompleted(false);
    setScore(0);
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answer
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishQuiz = () => {
    let correctAnswers = 0;
    quizData.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setQuizCompleted(true);
  };

  const restartQuiz = () => {
    setNameSubmitted(false);
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setQuizCompleted(false);
    setScore(0);
    setStudentName('');
  };

  const getScoreColor = () => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    if (score >= 8) return 'Excellent! 🎉';
    if (score >= 6) return 'Good job! 👍';
    return 'Keep practicing! 📚';
  };

  // Name Input Screen
  if (!nameSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Welcome to Quiz Test
              </h1>
              <p className="text-sm sm:text-base text-slate-600">
                Please enter your name to get started
              </p>
            </div>

            <form onSubmit={handleNameSubmit} className="space-y-4">
              <div>
                <label htmlFor="studentName" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="studentName"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-sm sm:text-base"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm sm:text-base"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  // Quiz Selection Screen
  if (!quizStarted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-800 mb-4 sm:mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Hello, {studentName}! 👋
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Test your knowledge with our interactive quizzes and assessments.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">Available Tests</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold text-slate-800 text-lg">Computer Basics Quiz</h3>
                <p className="text-slate-600 text-sm sm:text-base mt-1 mb-4">
                  Test your fundamental computer knowledge (10 questions)
                </p>
                <button 
                  onClick={startQuiz}
                  className="w-full sm:w-auto bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                >
                  Start Quiz
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:bg-gray-50 transition-colors opacity-50">
                <h3 className="font-semibold text-slate-800 text-lg">English Proficiency Test</h3>
                <p className="text-slate-600 text-sm sm:text-base mt-1 mb-4">
                  Assess your English language skills
                </p>
                <button className="w-full sm:w-auto bg-gray-400 text-white px-6 py-3 rounded-lg cursor-not-allowed font-semibold">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Quiz Results Screen
  if (quizCompleted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
              Great job, {studentName}!
            </h1>
            <h2 className="text-lg sm:text-xl font-semibold text-slate-600 mb-6">
              Quiz Completed! 🎊
            </h2>

            <div className="mb-8">
              <div className={`text-4xl sm:text-6xl font-bold mb-4 ${getScoreColor()}`}>
                {score}/10
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-slate-700 mb-2">
                {getScoreMessage()}
              </div>
              <div className="text-base sm:text-lg text-slate-600">
                You scored {score} out of {quizData.length} questions correctly
              </div>
              <div className="text-sm text-slate-500 mt-2">
                ({Math.round((score / quizData.length) * 100)}% accuracy)
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-8">
              <button
                onClick={startQuiz}
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
              >
                Retake Quiz
              </button>
              <button
                onClick={restartQuiz}
                className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
              >
                Back to Start
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-slate-800 mb-4 text-base sm:text-lg">Review Your Answers:</h3>
              <div className="space-y-2 text-xs sm:text-sm">
                {quizData.map((question, index) => (
                  <div key={index} className="flex justify-between items-center py-1">
                    <span className="text-left flex-1 pr-2">
                      <span className="font-medium">Q{index + 1}:</span> 
                      <span className="hidden sm:inline"> {question.question.substring(0, 40)}...</span>
                      <span className="sm:hidden"> {question.question.substring(0, 20)}...</span>
                    </span>
                    <span className={`font-bold text-lg ${
                      selectedAnswers[index] === question.answer ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {selectedAnswers[index] === question.answer ? '✓' : '✗'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Quiz Questions Screen
  const currentQuestionData = quizData[currentQuestion];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-4 sm:py-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header with Student Name */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-lg sm:text-xl font-semibold text-slate-700">
            {studentName}'s Quiz
          </h1>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-6 sm:mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs sm:text-sm font-medium text-slate-600">
                Question {currentQuestion + 1} of {quizData.length}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-600">
                {Math.round(((currentQuestion + 1) / quizData.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-6 sm:mb-8 leading-tight">
              {currentQuestionData.question}
            </h2>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {currentQuestionData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-3 sm:p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswers[currentQuestion] === option
                      ? 'border-orange-500 bg-orange-50 text-orange-800'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start sm:items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 mt-0.5 sm:mt-0 flex-shrink-0 ${
                      selectedAnswers[currentQuestion] === option
                        ? 'border-orange-500 bg-orange-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswers[currentQuestion] === option && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <span className="font-medium text-sm sm:text-base leading-tight">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <button
                onClick={previousQuestion}
                disabled={currentQuestion === 0}
                className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                  currentQuestion === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                } order-2 sm:order-1`}
              >
                Previous
              </button>

              {/* Question Indicators */}
              <div className="flex space-x-1 sm:space-x-2 order-1 sm:order-2">
                {quizData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                      index === currentQuestion
                        ? 'bg-orange-500'
                        : selectedAnswers[index]
                        ? 'bg-green-400'
                        : 'bg-gray-200'
                    }`}
                  ></div>
                ))}
              </div>

              <button
                onClick={nextQuestion}
                disabled={!selectedAnswers[currentQuestion]}
                className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                  !selectedAnswers[currentQuestion]
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : currentQuestion === quizData.length - 1
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-orange-600 text-white hover:bg-orange-700'
                } order-3`}
              >
                {currentQuestion === quizData.length - 1 ? 'Finish Quiz' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuizTestPage;