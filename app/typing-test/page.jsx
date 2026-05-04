"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Clock, RotateCcw, Target, Zap, Award, Globe, Keyboard } from 'lucide-react';

// Sample texts for typing - Beginner friendly with simple words
const sampleTexts = {
  english: {
    beginner: [
      "the cat sat on the mat. a dog ran in the park. birds fly in the sky. fish swim in the water.",
      "i like to eat apples and bananas. my mom makes good food. we go to school every day. books help us learn new things.",
      "the sun is bright today. children play with their toys. we can walk to the store. trees give us fresh air to breathe.",
      "type these words slowly and carefully. practice makes you better at typing. keep your fingers on the home row keys.",
      "start typing with both hands. look at the screen not the keyboard. take breaks when you feel tired. good posture helps you type better.",
      "simple words like cat dog run jump help new typists. use all your fingers when you type. do not hunt and peck with two fingers only."
    ],
    intermediate: [
      "Professional Development: Continuous learning and skill enhancement are fundamental requirements for career advancement in today's competitive marketplace. Organizations prioritize employees who demonstrate adaptability, critical thinking, and technological proficiency.",
      "Digital Communication: Email etiquette, video conferencing protocols, and collaborative platform management have become essential competencies. Effective virtual collaboration requires sophisticated understanding of multiple software applications and communication channels.",
      "Project Management Methodologies: Agile frameworks, Scrum ceremonies, and Kanban visualization techniques optimize workflow efficiency. Cross-functional team coordination demands comprehensive knowledge of project lifecycle management and stakeholder engagement strategies.",
      "Data Analytics & Visualization: Statistical interpretation, trend analysis, and predictive modeling capabilities drive evidence-based decision making. Business intelligence tools, dashboard creation, and performance metrics monitoring are increasingly valuable professional skills.",
      "Cybersecurity Awareness: Threat identification, password management, multi-factor authentication, and data privacy compliance protect organizational assets. Understanding social engineering tactics, phishing schemes, and security best practices is mandatory for all professionals."
    ]
  },
  punjabi: {
    beginner: [
      "ਇਹ ਅਸਾਨ ਸ਼ਬਦ ਹਨ। ਮਾਂ ਬਾਪ ਘਰ ਪਾਣੀ ਦੁੱਧ ਰੋਟੀ ਖਾਣਾ। ਮੈਂ ਤੂੰ ਅਸੀਂ ਤੁਸੀਂ ਉਹ ਇਹ।",
      "ਸਕੂਲ ਕਿਤਾਬ ਪੜ੍ਹਨਾ ਲਿਖਣਾ ਖੇਡਣਾ ਹੱਸਣਾ। ਅਧਿਆਪਕ ਵਿਦਿਆਰਥੀ ਕਲਾਸ ਪਾਠ।",
      "ਦਿਨ ਰਾਤ ਸਵੇਰ ਸ਼ਾਮ ਸੂਰਜ ਚੰਦ ਤਾਰੇ। ਗਰਮੀ ਸਰਦੀ ਮੀਂਹ ਬਰਫ਼।",
      "ਆਮ ਸੇਬ ਕੇਲਾ ਸੰਤਰਾ ਫਲ ਸਬਜ਼ੀ। ਚਾਹ ਕਾਫੀ ਪਾਣੀ ਜੂਸ ਪੀਣਾ।",
      "ਕੱਲ੍ਹ ਅੱਜ ਕੱਲ ਦਿਨ ਹਫ਼ਤਾ ਮਹੀਨਾ ਸਾਲ। ਜਲਦੀ ਧੀਰੇ ਤੇਜ਼ ਹੌਲੀ।",
      "ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ ਸਿੱਖੋ। ਆਸਾਨ ਸ਼ਬਦਾਂ ਨਾਲ ਸ਼ੁਰੂਆਤ ਕਰੋ। ਅਭਿਆਸ ਕਰਦੇ ਰਹੋ।"
    ],
    intermediate: [
      "ਆਧੁਨਿਕ ਤਕਨੀਕੀ ਵਿਕਾਸ: ਕੰਪਿਊਟਰ ਸਾਇੰਸ, ਇੰਜੀਨੀਅਰਿੰਗ, ਅਤੇ ਸਾਫਟਵੇਅਰ ਡਿਵੈਲਪਮੈਂਟ ਦੇ ਖੇਤਰ ਵਿੱਚ ਉਨਨਤੀ ਨੇ ਮਾਨਵੀ ਸਭਿਆਚਾਰ ਨੂੰ ਮੂਲਭੂਤ ਰੂਪ ਵਿੱਚ ਬਦਲ ਦਿੱਤਾ ਹੈ।",
      "ਸਿੱਖਿਆ ਪ੍ਰਣਾਲੀ ਸੁਧਾਰ: ਪਰੰਪਰਾਗਤ ਅਧਿਆਪਨ ਵਿਧੀਆਂ ਤੋਂ ਡਿਜੀਟਲ ਮਾਧਿਅਮਾਂ ਵੱਲ ਤਬਦੀਲੀ ਨੇ ਗਿਆਨ ਪ੍ਰਾਪਤੀ ਦੇ ਨਵੇਂ ਆਯਾਮ ਸਿਰਜੇ ਹਨ। ਇਲੈਕਟ੍ਰਾਨਿਕ ਕਿਤਾਬਾਂ, ਔਨਲਾਈਨ ਕੋਰਸਿਜ਼, ਅਤੇ ਵਰਚੁਅਲ ਕਲਾਸਰੂਮ ਸਿਸਟਮ।",
      "ਵਾਤਾਵਰਣ ਸੰਰਕਸ਼ਣ ਰਣਨੀਤੀ: ਜਲਵਾਯੂ ਪਰਿਵਰਤਨ, ਹਵਾ ਪ੍ਰਦੂਸ਼ਣ, ਤੇ ਕੁਦਰਤੀ ਸਰੋਤਾਂ ਦੀ ਸੁਰੱਖਿਆ ਲਈ ਸਮੁਦਾਇਕ ਯਤਨ। ਰੀਸਾਈਕਲਿੰਗ, ਨਵਿਆਉਣਯੋਗ ਊਰਜਾ, ਅਤੇ ਸਸਟੇਨੇਬਲ ਲਿਵਿੰਗ ਪ੍ਰੈਕਟਿਸਿਸ।",
      "ਸਮਾਜਿਕ ਮੀਡੀਆ ਪ੍ਰਭਾਵ: ਫੇਸਬੁੱਕ, ਇੰਸਟਾਗ੍ਰਾਮ, ਟਵਿੱਟਰ, ਅਤੇ ਯੂਟਿਊਬ ਪਲੇਟਫਾਰਮਸ ਨੇ ਸੰਚਾਰ ਪੱਧਤੀ ਵਿੱਚ ਕ੍ਰਾਂਤੀਕਾਰੀ ਬਦਲਾਅ ਲਿਆਂਦਾ ਹੈ। ਸੂਚਨਾ ਸਾਂਝਾਕਰਨ, ਵਿਆਪਾਰਿਕ ਮਾਰਕੀਟਿੰਗ, ਅਤੇ ਸਮਾਜਿਕ ਰਾਜਨੀਤਿਕ ਚੇਤਨਾ ਦੇ ਨਵੇਂ ਰੂਪ।",
      "ਆਰਥਿਕ ਵਿਕਾਸ ਮਾਡਲ: ਸਟਾਰਟਅਪ ਕਲਚਰ, ਈ-ਕਾਮਰਸ ਪਲੇਟਫਾਰਮ, ਅਤੇ ਡਿਜੀਟਲ ਪੇਮੈਂਟ ਸਿਸਟਮ ਨੇ ਪਰੰਪਰਾਗਤ ਵਪਾਰਿਕ ਢਾਂਚੇ ਨੂੰ ਤਬਦੀਲ ਕਰ ਦਿੱਤਾ ਹੈ। ਫਿਨਟੈਕ ਇਨੋਵੇਸ਼ਨ, ਬਲਾਕਚੇਨ ਟੈਕਨਾਲਜੀ, ਅਤੇ ਕ੍ਰਿਪਟੋਕਰੰਸੀ।"
    ]
  }
};

const TypingTest = () => {
  const [language, setLanguage] = useState('english');
  const [level, setLevel] = useState('beginner');
  const [currentText, setCurrentText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isTestActive, setIsTestActive] = useState(false);
  const inputRef = useRef(null);
  const textDisplayRef = useRef(null);

  // Generate endless text by repeating and mixing texts
  const generateEndlessText = () => {
    const texts = sampleTexts[language][level];
    let endlessText = '';

    // Generate at least 2000 characters of text
    while (endlessText.length < 2000) {
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      endlessText += randomText + ' ';
    }

    return endlessText.trim();
  };

  // Initialize test
  useEffect(() => {
    resetTest();
  }, [language, level]);

  // Timer - runs every second when test is active
  useEffect(() => {
    let interval;
    if (isTestActive && startTime && !endTime) {
      interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        setTimeElapsed(elapsed);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTestActive, startTime, endTime]);

  // Calculate WPM and accuracy in real-time
  useEffect(() => {
    if (userInput.length > 0 && timeElapsed > 0) {
      // Calculate words (every 5 characters = 1 word)
      const words = userInput.length / 5;
      const minutes = timeElapsed / 60;
      const currentWpm = minutes > 0 ? Math.round(words / minutes) : 0;
      setWpm(currentWpm);

      // Calculate accuracy
      let correctChars = 0;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === currentText[i]) {
          correctChars++;
        }
      }
      const currentAccuracy = userInput.length > 0 ? Math.round((correctChars / userInput.length) * 100) : 100;
      setAccuracy(currentAccuracy);
    }
  }, [userInput, timeElapsed, currentText]);

  const resetTest = () => {
    const endlessText = generateEndlessText();
    setCurrentText(endlessText);
    setUserInput('');
    setCurrentIndex(0);
    setStartTime(null);
    setEndTime(null);
    setIsCompleted(false);
    setIsTestActive(false);
    setMistakes(0);
    setWpm(0);
    setAccuracy(100);
    setTimeElapsed(0);
    setShowResults(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Start test on first keystroke
    if (!isTestActive && value.length === 1) {
      setStartTime(Date.now());
      setIsTestActive(true);
    }

    // Prevent input longer than current text
    if (value.length <= currentText.length) {
      setUserInput(value);
      setCurrentIndex(value.length);

      // Count mistakes in real-time
      let mistakeCount = 0;
      for (let i = 0; i < value.length; i++) {
        if (value[i] !== currentText[i]) {
          mistakeCount++;
        }
      }
      setMistakes(mistakeCount);

      // Check if user wants to complete test (when they've typed significant amount)
      if (value.length >= 200 && value.endsWith(' ')) {
        // Option to complete test after 200 characters
        // For now, let it continue endlessly
      }
    }
  };

  const completeTest = () => {
    setEndTime(Date.now());
    setIsCompleted(true);
    setIsTestActive(false);
    setShowResults(true);
  };

  const getCharacterClass = (index) => {
    if (index < userInput.length) {
      return userInput[index] === currentText[index] 
        ? 'text-green-600 bg-green-100' 
        : 'text-red-600 bg-red-100';
    } else if (index === currentIndex) {
      return 'bg-blue-300 animate-pulse';
    }
    return 'text-gray-600';
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getFontFamily = () => {
    return language === 'punjabi' 
      ? { fontFamily: 'Noto Sans Gurmukhi, Mukta, sans-serif' }
      : { fontFamily: 'Montserrat, sans-serif' };
  };

  // Get visible text portion for display
  const getVisibleText = () => {
    const start = Math.max(0, currentIndex - 50);
    const end = Math.min(currentText.length, currentIndex + 200);
    return {
      text: currentText.slice(start, end),
      offset: start
    };
  };

  const visibleText = getVisibleText();

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Noto+Sans+Gurmukhi:wght@300;400;500;600&family=Mukta:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Typing Test
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Improve your typing speed and accuracy with our endless typing challenge
          </p>
        </div>

        {!showResults ? (
          <div className="max-w-5xl mx-auto">
            {/* Controls */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Language Selection */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    <Globe className="w-4 h-4 inline mr-2" />
                    Language
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    disabled={isTestActive}
                  >
                    <option value="english">English</option>
                    <option value="punjabi">ਪੰਜਾਬੀ (Punjabi)</option>
                  </select>
                </div>

                {/* Level Selection */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    <Target className="w-4 h-4 inline mr-2" />
                    Level
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    disabled={isTestActive}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                  </select>
                </div>

                {/* Reset Button */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    <RotateCcw className="w-4 h-4 inline mr-2" />
                    Action
                  </label>
                  <button
                    onClick={resetTest}
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    New Test
                  </button>
                </div>

                {/* Complete Test Button */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    <Award className="w-4 h-4 inline mr-2" />
                    Finish
                  </label>
                  <button
                    onClick={completeTest}
                    disabled={!isTestActive || userInput.length < 50}
                    className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Complete Test
                  </button>
                </div>
              </div>
            </div>



            {/* Progress Indicator */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="mb-4">
                <div className="flex justify-between text-sm text-slate-600 mb-2">
                  <span>Characters Typed</span>
                  <span>{userInput.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((userInput.length / 100) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Typing Area */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Text Display - Shows current portion of text */}
              <div
                ref={textDisplayRef}
                className="mb-6 p-6 bg-gray-50 rounded-xl border-2 border-gray-200 min-h-[200px] text-xl leading-relaxed overflow-hidden"
                style={getFontFamily()}
              >
                {visibleText.text.split('').map((char, index) => {
                  const absoluteIndex = visibleText.offset + index;
                  return (
                    <span
                      key={absoluteIndex}
                      className={`${getCharacterClass(absoluteIndex)} transition-all duration-150 ${
                        char === ' ' ? 'mx-1' : ''
                      }`}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  );
                })}
              </div>

              {/* Input Area */}
              <div className="relative">
                <Keyboard className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                <textarea
                  ref={inputRef}
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder={language === 'punjabi' ? 'ਇੱਥੇ ਟਾਈਪ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰੋ...' : 'Start typing here...'}
                  className="w-full pl-12 pr-4 py-4 text-xl border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
                  style={{
                    ...getFontFamily(),
                    lineHeight: '1.6'
                  }}
                  rows="6"
                  disabled={isCompleted}
                />
              </div>

              {/* Live Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 mt-4">
                <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {formatTime(timeElapsed)}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">Time</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {wpm}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">WPM</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {accuracy}%
                  </div>
                  <div className="text-sm text-slate-600 font-medium">Accuracy</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {mistakes}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">Mistakes</div>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>Type the text above. The test will continue endlessly until you click "Complete Test".</p>
                <p className="mt-2">Minimum 50 characters required to complete the test.</p>
              </div>
            </div>
          </div>

        ) : (
          /* Results Dashboard */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
              <div className="mb-8">
                <Award className="w-20 h-20 text-yellow-500 mx-auto mb-4 animate-bounce" />
                <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Test Completed!
                </h2>
                <p className="text-xl text-slate-600">Great job! Here are your final results:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {wpm}
                  </div>
                  <div className="text-sm text-blue-700 font-semibold">Words Per Minute</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-green-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {accuracy}%
                  </div>
                  <div className="text-sm text-green-700 font-semibold">Accuracy</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {formatTime(timeElapsed)}
                  </div>
                  <div className="text-sm text-purple-700 font-semibold">Time Taken</div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-red-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {mistakes}
                  </div>
                  <div className="text-sm text-red-700 font-semibold">Mistakes</div>
                </div>
              </div>

              {/* Additional Stats */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-slate-800">{userInput.length}</div>
                    <div className="text-sm text-slate-600">Characters Typed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-800">{Math.round(userInput.length / 5)}</div>
                    <div className="text-sm text-slate-600">Words Typed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-800">{timeElapsed > 0 ? Math.round(userInput.length / timeElapsed) : 0}</div>
                    <div className="text-sm text-slate-600">Chars Per Second</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowResults(false)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <RotateCcw className="w-5 h-5 inline mr-2" />
                  Continue Typing
                </button>
                <button
                  onClick={resetTest}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  New Test
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default TypingTest;