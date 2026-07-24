"use client";

import React, { useState, useEffect, useRef } from "react";

const sampleTexts = {
  english: {
    beginner: [
      "the cat sat on the mat. a dog ran in the park. birds fly in the sky. fish swim in the water.",
      "i like to eat apples and bananas. my mom makes good food. we go to school every day. books help us learn new things.",
      "the sun is bright today. children play with their toys. we can walk to the store. trees give us fresh air to breathe.",
      "type these words slowly and carefully. practice makes you better at typing. keep your fingers on the home row keys.",
    ],
    intermediate: [
      "Professional Development: Continuous learning and skill enhancement are fundamental requirements for career advancement in today's competitive marketplace. Organizations prioritize employees who demonstrate adaptability, critical thinking, and technological proficiency.",
      "Digital Communication: Email etiquette, video conferencing protocols, and collaborative platform management have become essential competencies. Effective virtual collaboration requires sophisticated understanding of multiple software applications.",
    ],
  },
  punjabi: {
    beginner: [
      "ਇਹ ਅਸਾਨ ਸ਼ਬਦ ਹਨ। ਮਾਂ ਬਾਪ ਘਰ ਪਾਣੀ ਦੁੱਧ ਰੋਟੀ ਖਾਣਾ। ਮੈਂ ਤੂੰ ਅਸੀਂ ਤੁਸੀਂ ਉਹ ਇਹ।",
      "ਸਕੂਲ ਕਿਤਾਬ ਪੜ੍ਹਨਾ ਲਿਖਣਾ ਖੇਡਣਾ ਹੱਸਣਾ। ਅਧਿਆਪਕ ਵਿਦਿਆਰਥੀ ਕਲਾਸ ਪਾਠ।",
      "ਦਿਨ ਰਾਤ ਸਵੇਰ ਸ਼ਾਮ ਸੂਰਜ ਚੰਦ ਤਾਰੇ। ਗਰਮੀ ਸਰਦੀ ਮੀਂਹ ਬਰਫ਼।",
    ],
    intermediate: [
      "ਆਧੁਨਿਕ ਤਕਨੀਕੀ ਵਿਕਾਸ: ਕੰਪਿਊਟਰ ਸਾਇੰਸ, ਇੰਜੀਨੀਅਰਿੰਗ, ਅਤੇ ਸਾਫਟਵੇਅਰ ਡਿਵੈਲਪਮੈਂਟ ਦੇ ਖੇਤਰ ਵਿੱਚ ਉਨਨਤੀ ਨੇ ਮਾਨਵੀ ਸਭਿਆਚਾਰ ਨੂੰ ਮੂਲਭੂਤ ਰੂਪ ਵਿੱਚ ਬਦਲ ਦਿੱਤਾ ਹੈ।",
      "ਸਿੱਖਿਆ ਪ੍ਰਣਾਲੀ ਸੁਧਾਰ: ਪਰੰਪਰਾਗਤ ਅਧਿਆਪਨ ਵਿਧੀਆਂ ਤੋਂ ਡਿਜੀਟਲ ਮਾਧਿਅਮਾਂ ਵੱਲ ਤਬਦੀਲੀ ਨੇ ਗਿਆਨ ਪ੍ਰਾਪਤੀ ਦੇ ਨਵੇਂ ਆਯਾਮ ਸਿਰਜੇ ਹਨ।",
    ],
  },
};

const TypingTest = () => {
  const [language, setLanguage] = useState("english");
  const [level, setLevel] = useState("beginner");
  const [currentText, setCurrentText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTestActive, setIsTestActive] = useState(false);
  const inputRef = useRef(null);

  const getRandomText = () => {
    const texts = sampleTexts[language][level];
    return texts[Math.floor(Math.random() * texts.length)];
  };

  const resetTest = () => {
    const text = getRandomText();
    setCurrentText(text);
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setTimeElapsed(0);
    setIsTestActive(false);
  };

  useEffect(() => {
    resetTest();
  }, [language, level]);

  useEffect(() => {
    let interval;
    if (isTestActive && startTime) {
      interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        setTimeElapsed(elapsed);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTestActive, startTime]);

  useEffect(() => {
    if (userInput.length > 0 && timeElapsed > 0) {
      const words = userInput.length / 5;
      const minutes = timeElapsed / 60;
      const currentWpm = minutes > 0 ? Math.round(words / minutes) : 0;
      setWpm(currentWpm);

      let correctChars = 0;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === currentText[i]) {
          correctChars++;
        }
      }
      const acc = Math.round((correctChars / userInput.length) * 100);
      setAccuracy(isNaN(acc) ? 100 : acc);
    }
  }, [userInput, timeElapsed, currentText]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isTestActive && value.length > 0) {
      setIsTestActive(true);
      setStartTime(Date.now());
    }
    setUserInput(value);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-gutter max-w-container-max mx-auto min-h-screen flex flex-col justify-center">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
        <span className="text-xs font-bold text-primary tracking-widest uppercase">
          GOVERNMENT EXAM PREPARATION
        </span>
        <h1 className="text-2xl sm:text-4xl font-headline font-bold text-on-surface">
          English & Punjabi Typing Assessment
        </h1>
        <p className="text-xs sm:text-base text-on-surface-variant leading-relaxed">
          Master typing speed and accuracy for government exams and corporate office requirements with live WPM tracking.
        </p>
      </div>

      <div className="max-w-3xl mx-auto w-full space-y-6">
        {/* Settings Bar */}
        <div className="bg-white border border-outline-variant rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 shadow-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-on-surface-variant uppercase mr-1">Language:</span>
            <button
              onClick={() => setLanguage("english")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                language === "english"
                  ? "bg-primary text-white"
                  : "bg-surface-container text-on-surface hover:bg-surface-container-high"
              }`}
            >
              ENGLISH
            </button>
            <button
              onClick={() => setLanguage("punjabi")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                language === "punjabi"
                  ? "bg-primary text-white"
                  : "bg-surface-container text-on-surface hover:bg-surface-container-high"
              }`}
            >
              PUNJABI (ਪੰਜਾਬੀ)
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-on-surface-variant uppercase mr-1">Level:</span>
            <button
              onClick={() => setLevel("beginner")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                level === "beginner"
                  ? "bg-secondary text-white"
                  : "bg-surface-container text-on-surface hover:bg-surface-container-high"
              }`}
            >
              BEGINNER
            </button>
            <button
              onClick={() => setLevel("intermediate")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                level === "intermediate"
                  ? "bg-secondary text-white"
                  : "bg-surface-container text-on-surface hover:bg-surface-container-high"
              }`}
            >
              INTERMEDIATE
            </button>
          </div>
        </div>

        {/* Realtime Stats Bar */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
          <div className="bg-white border border-outline-variant p-4 rounded-2xl shadow-xs">
            <p className="text-[10px] sm:text-xs font-bold text-on-surface-variant uppercase">SPEED (WPM)</p>
            <p className="text-2xl sm:text-3xl font-headline font-bold text-primary mt-1">{wpm}</p>
          </div>
          <div className="bg-white border border-outline-variant p-4 rounded-2xl shadow-xs">
            <p className="text-[10px] sm:text-xs font-bold text-on-surface-variant uppercase">ACCURACY</p>
            <p className="text-2xl sm:text-3xl font-headline font-bold text-green-600 mt-1">{accuracy}%</p>
          </div>
          <div className="bg-white border border-outline-variant p-4 rounded-2xl shadow-xs">
            <p className="text-[10px] sm:text-xs font-bold text-on-surface-variant uppercase">TIME</p>
            <p className="text-2xl sm:text-3xl font-headline font-bold text-on-surface mt-1">{timeElapsed}s</p>
          </div>
        </div>

        {/* Text Display Area */}
        <div className="bg-white border border-outline-variant rounded-2xl p-5 sm:p-8 shadow-sm space-y-4">
          <div className="p-4 bg-surface-container-low rounded-xl font-mono text-xs sm:text-sm leading-relaxed text-on-surface select-none border border-outline-variant/60">
            {currentText}
          </div>

          <textarea
            ref={inputRef}
            rows={4}
            value={userInput}
            onChange={handleInputChange}
            placeholder="Start typing here to trigger live speed test..."
            className="w-full bg-white border border-outline p-4 rounded-xl font-mono text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-on-surface"
          />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2">
            <button
              onClick={resetTest}
              className="w-full sm:w-auto px-4 py-2.5 bg-surface-container-high hover:bg-outline-variant text-on-surface rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined text-base">refresh</span>
              RESET TEST
            </button>
            <span className="text-[11px] text-on-surface-variant font-mono text-center sm:text-right">
              Press reset to load new practice passage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypingTest;