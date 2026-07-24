"use client";

import React, { useState } from "react";

const quizCategories = [
  {
    id: "fundamentals",
    title: "Computer Fundamentals",
    category: "BASICS",
    icon: "terminal",
    borderColor: "border-l-primary",
    buttonBg: "bg-primary text-white hover:bg-on-primary-fixed-variant",
    questionsCount: 10,
    timeMins: 15,
  },
  {
    id: "accounting",
    title: "Tally Prime & GST Accounting",
    category: "ACCOUNTING",
    icon: "table_view",
    borderColor: "border-l-secondary",
    buttonBg: "bg-secondary text-white hover:bg-on-secondary-fixed-variant",
    questionsCount: 10,
    timeMins: 15,
  },
  {
    id: "programming",
    title: "C & C++ Programming Logic",
    category: "TECH STACK",
    icon: "code",
    borderColor: "border-l-tertiary",
    buttonBg: "bg-tertiary text-white hover:bg-on-tertiary-fixed-variant",
    questionsCount: 10,
    timeMins: 15,
  },
];

const quizData = [
  {
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Control Processing Unit"],
    answer: "Central Processing Unit",
  },
  {
    question: "Which of the following is an input device?",
    options: ["Monitor", "Keyboard", "Printer", "Speaker"],
    answer: "Keyboard",
  },
  {
    question: "What type of memory is RAM?",
    options: ["Permanent", "Volatile", "Optical", "Magnetic"],
    answer: "Volatile",
  },
  {
    question: "Which language is primarily used for web development structure?",
    options: ["Python", "HTML", "C++", "Java"],
    answer: "HTML",
  },
  {
    question: "Which company developed the Windows operating system?",
    options: ["Apple", "Microsoft", "Google", "IBM"],
    answer: "Microsoft",
  },
  {
    question: "What is the primary function of an Operating System?",
    options: ["Creates spreadsheet documents", "Manages hardware and software resources", "Compiles C++ code", "Formats storage drives"],
    answer: "Manages hardware and software resources",
  },
  {
    question: "What does 'WWW' stand for in web browsers?",
    options: ["World Wide Web", "Web World Wire", "World Web Wide", "Wide World Web"],
    answer: "World Wide Web",
  },
  {
    question: "Which storage device typically provides the largest storage capacity?",
    options: ["Floppy Disk", "CD-ROM", "Hard Disk Drive", "USB Flash Drive"],
    answer: "Hard Disk Drive",
  },
  {
    question: "What is phishing?",
    options: [
      "A type of hardware firewall",
      "A technique to speed up Wi-Fi",
      "A cyber attack technique to steal personal data",
      "An online shopping application",
    ],
    answer: "A cyber attack technique to steal personal data",
  },
  {
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "HyperText Transmission Panel",
      "High Transfer Text Protocol",
      "Hyperlink Text Transfer Protocol",
    ],
    answer: "HyperText Transfer Protocol",
  },
];

const QuizTestPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [studentName, setStudentName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
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

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answer,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishQuiz = () => {
    let finalScore = 0;
    quizData.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.answer) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setQuizCompleted(true);
  };

  const resetQuiz = () => {
    setSelectedCategory(null);
    setStudentName("");
    setNameSubmitted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setQuizCompleted(false);
    setScore(0);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-gutter max-w-container-max mx-auto min-h-screen flex flex-col justify-center">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
        <span className="text-xs font-bold text-tertiary tracking-widest uppercase">
          ONLINE SELF-ASSESSMENT PORTAL
        </span>
        <h1 className="text-2xl sm:text-4xl font-headline font-bold text-on-surface">
          Online MCQ Quiz Assessment
        </h1>
        <p className="text-xs sm:text-base text-on-surface-variant leading-relaxed">
          Test your technical knowledge, evaluate speed and accuracy, and receive instant scorecard performance breakdown.
        </p>
      </div>

      {/* Step 1: Category Selection */}
      {!selectedCategory && (
        <div className="max-w-4xl mx-auto space-y-6 w-full">
          <h2 className="text-base sm:text-lg font-headline font-bold text-on-surface">
            Select Your Exam Subject
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {quizCategories.map((cat) => (
              <div
                key={cat.id}
                className={`bg-white border border-outline-variant p-5 rounded-2xl hover:shadow-md transition-all border-l-4 ${cat.borderColor} flex flex-col justify-between gap-4`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">
                      {cat.icon}
                    </span>
                    <span className="text-[10px] font-bold tracking-wider text-on-surface-variant uppercase">
                      {cat.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-on-surface text-base">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant font-mono">
                    {cat.questionsCount} MCQ Questions • {cat.timeMins} Mins
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold tracking-wider transition-all shadow-xs cursor-pointer ${cat.buttonBg}`}
                >
                  START TEST
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Student Details Registration */}
      {selectedCategory && !nameSubmitted && (
        <div className="max-w-md mx-auto w-full bg-white border border-outline-variant rounded-2xl p-6 sm:p-8 shadow-xl verified-glow space-y-6">
          <div className="flex items-center gap-3 border-b border-outline-variant/60 pb-3">
            <div className="w-10 h-10 bg-primary-fixed text-primary rounded-xl flex items-center justify-center font-bold shrink-0">
              <span className="material-symbols-outlined text-xl">person</span>
            </div>
            <div>
              <h3 className="font-bold text-on-surface text-base">Candidate Information</h3>
              <p className="text-xs text-on-surface-variant font-mono">{selectedCategory.title}</p>
            </div>
          </div>

          <form onSubmit={handleNameSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Amaninder Singh"
                className="w-full bg-surface-container-low border border-outline px-4 py-3 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-medium text-on-surface"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="w-1/3 py-3 px-3 rounded-xl border border-outline-variant text-on-surface-variant text-xs font-bold hover:bg-surface-container-high transition-all"
              >
                BACK
              </button>
              <button
                type="submit"
                className="w-2/3 bg-primary text-white py-3 px-3 rounded-xl text-xs font-bold tracking-wider hover:bg-on-primary-fixed-variant transition-all shadow-md cursor-pointer"
              >
                PROCEED TO TEST
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Step 3: Quiz Assessment Screen */}
      {nameSubmitted && !quizCompleted && (
        <div className="max-w-2xl mx-auto w-full bg-white border border-outline-variant rounded-2xl p-5 sm:p-8 shadow-xl space-y-6">
          {/* Top Bar */}
          <div className="flex justify-between items-center border-b border-outline-variant/60 pb-3 gap-2">
            <div className="overflow-hidden">
              <span className="text-[10px] font-bold text-primary tracking-wider uppercase block truncate">
                CANDIDATE: {studentName.toUpperCase()}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-on-surface font-headline truncate">
                {selectedCategory.title}
              </h3>
            </div>
            <div className="bg-primary-fixed px-3 py-1 rounded-lg text-xs font-mono font-bold text-on-primary-fixed shrink-0">
              Q {currentQuestion + 1} / {quizData.length}
            </div>
          </div>

          {/* Question Display */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-lg font-bold text-on-surface font-headline leading-snug">
              {currentQuestion + 1}. {quizData[currentQuestion].question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {quizData[currentQuestion].options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentQuestion] === opt;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleAnswerSelect(opt)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-center justify-between text-xs sm:text-sm cursor-pointer ${
                      isSelected
                        ? "bg-primary-fixed/40 border-primary text-primary font-bold shadow-xs"
                        : "bg-surface-container-low border-outline-variant text-on-surface hover:border-primary/50"
                    }`}
                  >
                    <span className="flex items-center gap-3 pr-2">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          isSelected ? "bg-primary text-white" : "bg-surface-container-high text-on-surface-variant"
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </span>
                    {isSelected && (
                      <span className="material-symbols-outlined text-primary text-lg shrink-0">
                        check_circle
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center pt-4 border-t border-outline-variant/60 gap-3">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="px-4 py-2.5 border border-outline-variant rounded-xl text-xs font-bold text-on-surface-variant disabled:opacity-40 hover:bg-surface-container-high cursor-pointer"
            >
              PREVIOUS
            </button>

            {currentQuestion === quizData.length - 1 ? (
              <button
                onClick={finishQuiz}
                className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold tracking-wider shadow-md cursor-pointer"
              >
                SUBMIT EXAM
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="px-5 py-2.5 bg-primary hover:bg-on-primary-fixed-variant text-white rounded-xl text-xs font-bold tracking-wider shadow-md cursor-pointer"
              >
                NEXT QUESTION
              </button>
            )}
          </div>
        </div>
      )}

      {/* Step 4: Result Scorecard Screen */}
      {quizCompleted && (
        <div className="max-w-xl mx-auto w-full bg-white border-2 border-primary-fixed p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6 text-center animate-in fade-in">
          <div className="w-16 h-16 bg-primary-fixed text-primary rounded-full flex items-center justify-center mx-auto shadow-sm">
            <span className="material-symbols-outlined text-3xl">emoji_events</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              ASSESSMENT COMPLETED
            </span>
            <h2 className="text-xl sm:text-2xl font-headline font-bold text-on-surface">
              Scorecard: {studentName}
            </h2>
            <p className="text-xs text-on-surface-variant font-mono">{selectedCategory.title}</p>
          </div>

          <div className="bg-surface-container-low p-4 sm:p-6 rounded-2xl border border-outline-variant flex justify-around items-center">
            <div>
              <p className="text-[10px] sm:text-xs text-on-surface-variant uppercase font-bold">Total Score</p>
              <p className="text-2xl sm:text-3xl font-bold text-primary font-headline mt-1">
                {score} / {quizData.length}
              </p>
            </div>
            <div className="w-px h-12 bg-outline-variant"></div>
            <div>
              <p className="text-[10px] sm:text-xs text-on-surface-variant uppercase font-bold">Percentage</p>
              <p className="text-2xl sm:text-3xl font-bold text-green-600 font-headline mt-1">
                {Math.round((score / quizData.length) * 100)}%
              </p>
            </div>
          </div>

          <button
            onClick={resetQuiz}
            className="w-full bg-primary text-white py-3.5 rounded-xl font-bold text-xs tracking-wider hover:bg-on-primary-fixed-variant transition-all shadow-md cursor-pointer"
          >
            TAKE ANOTHER QUIZ TEST
          </button>
        </div>
      )}
    </section>
  );
};

export default QuizTestPage;