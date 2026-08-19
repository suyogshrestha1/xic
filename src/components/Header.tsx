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
      if (window.scrollY > 20) {
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
        className={`bg-white border-b border-slate-200 transition-all duration-300 ease-in-out text-slate-900 ${
          isScrolled ? 'py-2 px-3 sm:px-4 bg-white/95 backdrop-blur-md shadow-md' : 'py-3 sm:py-5 px-3 sm:px-6 lg:px-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          
          {/* Centered Animated Logo */}
          <a 
            href="https://plus.xavier.edu.np/" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Xavier International College +2 Program" 
            className="inline-block transition-transform duration-300 active:scale-98"
          >
            <img 
              src="/logo.png" 
              alt="Xavier International College" 
              className={`w-auto object-contain transition-all duration-300 ease-in-out ${
                isScrolled ? 'h-8 sm:h-10 lg:h-12' : 'h-12 sm:h-16 lg:h-22'
              }`}
            />
          </a>

          {/* Subtitle & Title Section */}
          <div 
            className={`transition-all duration-300 overflow-hidden flex flex-col items-center ${
              isScrolled ? 'max-h-0 opacity-0 mt-0' : 'max-h-28 opacity-100 mt-2 sm:mt-3'
            }`}
          >
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 uppercase tracking-wider max-w-[95%] text-center truncate">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-600 shrink-0" />
              <span className="truncate">Official +2 Academic Portal • BS 2083–84</span>
            </div>

            <h1 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-slate-900 tracking-tight leading-tight mt-1 px-2">
              Student Academic Calendar
            </h1>
            <p className="text-[11px] sm:text-xs lg:text-sm text-slate-500 font-normal mt-0.5">
              Shrawan 2083 – Baisakh 2084 (Jul 2026 – May 2027)
            </p>
          </div>

        </div>
      </div>

      {/* Dark Navigation & Action Bar */}
      <div className="bg-gradient-to-r from-xavier-navy-dark via-xavier-navy to-slate-900 text-white border-b border-slate-800 py-2 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          
          {/* View Switcher Tabs (Scrollable on mobile) */}
          <div className="flex items-center gap-1 sm:gap-2 bg-slate-800/90 p-1 rounded-xl border border-slate-700/80 overflow-x-auto w-full sm:w-auto no-scrollbar scrollbar-touch shadow-inner">
            
            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap flex-1 sm:flex-initial min-h-[38px] ${
                activeTab === 'calendar'
                  ? 'bg-cyan-600 text-white shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Calendar</span>
            </button>

            <button
              onClick={() => setActiveTab('holidays')}
              className={`flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap flex-1 sm:flex-initial min-h-[38px] ${
                activeTab === 'holidays'
                  ? 'bg-rose-600 text-white shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 shrink-0" />
              <span>Holidays</span>
            </button>

            <button
              onClick={() => setActiveTab('exams')}
              className={`flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap flex-1 sm:flex-initial min-h-[38px] ${
                activeTab === 'exams'
                  ? 'bg-blue-600 text-white shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-300 shrink-0" />
              <span>Exams Hub</span>
            </button>

          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2 text-xs sm:text-sm w-full sm:w-auto">
            <button
              onClick={onOpenPdf}
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white rounded-lg border border-slate-700 transition-all font-medium min-h-[36px] flex-1 sm:flex-initial"
              title="View Original Calendar PDF"
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>PDF View</span>
            </button>

            <button
              onClick={onDownloadPdf}
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-white rounded-lg border border-cyan-500/50 transition-all font-semibold shadow-xs min-h-[36px] flex-1 sm:flex-initial"
              title="Download Calendar PDF"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span>Download</span>
            </button>
          </div>

        </div>
      </div>

    </header>
  );
};
