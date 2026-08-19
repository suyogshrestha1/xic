import React, { useState, useEffect } from 'react';
import { Calendar, Download, Eye, Trophy, HeartHandshake, ShieldCheck } from 'lucide-react';
import { ActiveTab } from '../types/calendar';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenPdf: () => void;
  onDownloadPdf: () => void;
  totalEvents: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenPdf,
  onDownloadPdf,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 transition-all duration-300 ease-in-out shadow-lg">
      
      {/* Top White Branding Bar with Centered Animated Shrink Logo */}
      <div 
        className={`bg-white border-b border-slate-200 transition-all duration-300 ease-in-out shadow-xs text-slate-900 ${
          isScrolled ? 'py-2 px-4 bg-white/95 backdrop-blur-md shadow-md' : 'py-4 sm:py-6 px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative">
          
          {/* Centered Animated Logo */}
          <a 
            href="https://plus.xavier.edu.np/" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Xavier International College +2 Program" 
            className="inline-block transition-transform duration-300 hover:scale-102"
          >
            <img 
              src="/logo.png" 
              alt="Xavier International College" 
              className={`w-auto object-contain transition-all duration-300 ease-in-out ${
                isScrolled ? 'h-9 sm:h-11 lg:h-12' : 'h-16 sm:h-20 lg:h-24'
              }`}
            />
          </a>

          {/* Subtitle / Context — Hides or collapses gracefully when scrolled */}
          <div 
            className={`transition-all duration-300 overflow-hidden flex flex-col items-center ${
              isScrolled ? 'max-h-0 opacity-0 mt-0' : 'max-h-24 opacity-100 mt-2 sm:mt-3'
            }`}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
              <span>Official +2 Academic Portal • Bikram Sambat 2083–84</span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-slate-900 tracking-tight leading-tight mt-1">
              Student Academic Calendar
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              Shrawan 2083 – Baisakh 2084 (Jul 2026 – May 2027)
            </p>
          </div>

        </div>
      </div>

      {/* Dark Navigation & Action Bar */}
      <div className="bg-gradient-to-r from-xavier-navy-dark via-xavier-navy to-slate-900 text-white border-b border-slate-800 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* View Switcher Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 bg-slate-800/90 p-1 rounded-xl border border-slate-700/80 overflow-x-auto max-w-full shadow-inner">
            
            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap ${
                activeTab === 'calendar'
                  ? 'bg-cyan-600 text-white shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Monthly Calendar
            </button>

            <button
              onClick={() => setActiveTab('holidays')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap ${
                activeTab === 'holidays'
                  ? 'bg-rose-600 text-white shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <HeartHandshake className="w-4 h-4 text-rose-400" />
              Holidays & Vacations
            </button>

            <button
              onClick={() => setActiveTab('exams')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap ${
                activeTab === 'exams'
                  ? 'bg-blue-600 text-white shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Trophy className="w-4 h-4 text-blue-300" />
              Exams Hub
            </button>

          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <button
              onClick={onOpenPdf}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 transition-all font-medium"
              title="View Original Calendar PDF"
            >
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>Original PDF</span>
            </button>

            <button
              onClick={onDownloadPdf}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg border border-cyan-500/50 transition-all font-semibold shadow-xs"
              title="Download Calendar PDF"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>

        </div>
      </div>

    </header>
  );
};
