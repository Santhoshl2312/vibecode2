/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import MusicPlayer from './components/MusicPlayer';
import PomodoroTimer from './components/PomodoroTimer';
import TaskPanel from './components/TaskPanel';
import AmbientSounds from './components/AmbientSounds';
import QuoteDisplay from './components/QuoteDisplay';
import SessionHistory from './components/SessionHistory';
import ShortcutGuide from './components/ShortcutGuide';
import { ThemeType, FocusSession, Task } from './types';
import { THEMES } from './constants';
import { cn } from './lib/utils';
import ReactConfetti from 'react-confetti';
import { Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('rain');
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleInteraction = () => setHasInteracted(true);
    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTimerComplete = () => {
    // Record session
    const tasks = JSON.parse(localStorage.getItem('lofi-tasks') || '[]');
    const completedTasksCount = tasks.filter((t: Task) => t.completed).length;
    
    const newSession: FocusSession = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      duration: 25,
      tasksCompleted: completedTasksCount
    };

    const history = JSON.parse(localStorage.getItem('lofi-history') || '[]');
    const updatedHistory = [...history, newSession];
    localStorage.setItem('lofi-history', JSON.stringify(updatedHistory));
    
    // Trigger custom event for SessionHistory component
    window.dispatchEvent(new Event('lofi-history-updated'));

    // Celebration
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const themeConfig = THEMES.find(t => t.id === currentTheme) || THEMES[0];

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-1000 flex flex-col items-center justify-center p-6 md:p-12",
      themeConfig.bgClass
    )}>
      {showConfetti && <ReactConfetti width={windowSize.width} height={windowSize.height} recycle={false} />}
      
      {/* Background Decorative Glows from user snippet */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] -z-10" />

      {/* Background Overlay for atmosphere */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black" />
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Music & Ambient */}
        <div className="lg:col-span-3 space-y-8 h-full">
          <MusicPlayer hasInteracted={hasInteracted} />
          <AmbientSounds 
            currentTheme={currentTheme} 
            onThemeChange={setCurrentTheme} 
            hasInteracted={hasInteracted}
          />
          <div className="hidden lg:block">
            <QuoteDisplay />
          </div>
        </div>

        {/* Center Column: Timer */}
        <div className="lg:col-span-5 space-y-8">
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">
              Lofi <span className={themeConfig.accentColor}>Focus</span>
            </h1>
            <p className="text-white/40 text-sm font-medium tracking-[0.3em] uppercase">
              Your digital sanctuary for deep work
            </p>
          </div>
          <PomodoroTimer onComplete={handleTimerComplete} />
          <SessionHistory />
        </div>

        {/* Right Column: Tasks */}
        <div className="lg:col-span-4 h-full">
          <TaskPanel />
          <div className="lg:hidden mt-8">
            <QuoteDisplay />
          </div>
        </div>
      </main>

      <ShortcutGuide />

      <AnimatePresence>
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <div className="text-center space-y-6 p-8">
              <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <Music className="text-white" size={40} />
              </div>
              <h2 className="text-3xl font-bold text-white">Ready to Focus?</h2>
              <p className="text-white/60 max-w-xs mx-auto">
                Click anywhere to enter your workspace and enable audio.
              </p>
              <button
                onClick={() => setHasInteracted(true)}
                className="px-8 py-3 bg-white text-indigo-900 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Enter Workspace
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-12 text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold text-center">
        Designed for deep work • Built with AI
      </footer>
    </div>
  );
}
