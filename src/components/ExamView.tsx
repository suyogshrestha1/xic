import React, { useState, useEffect } from 'react';
import { CalendarEvent } from '../types/calendar';
import { getAllEvents } from '../data/calendarData';
import { Trophy, Clock, Calendar, GraduationCap, CheckCircle } from 'lucide-react';

interface ExamViewProps {
  onSelectEvent: (event: CalendarEvent) => void;
}

export const ExamView: React.FC<ExamViewProps> = ({ onSelectEvent }) => {
  const allEvents = getAllEvents();

  // Filter Exam-related events
  const examEvents = allEvents.filter(
    e => e.mainCategory === 'Exams' || 
         e.mainCategory === 'Class Test Day' || 
         e.category === 'Exams' || 
         e.category === 'Class Test Day' ||
         e.category === 'Practical Exams' ||
         e.category === 'Board Exams'
  ).sort((a, b) => {
    if (a.monthIndex !== b.monthIndex) return a.monthIndex - b.monthIndex;
    return a.nepaliDate - b.nepaliDate;
  });

  // Major exams for countdown target selection
  const majorExams = [
    { title: 'First Terminal Examination', dateStr: '2083-06-20', label: '20–28 Aswin 2083' },
    { title: 'Second Terminal Examination', dateStr: '2083-09-15', label: '15–24 Poush 2083' },
    { title: 'Term 3 / Pre-Board Exam', dateStr: '2083-11-30', label: '30 Falgun–10 Chaitra' },
    { title: 'Grade XII Board Examination', dateStr: '2084-01-13', label: '13 Baisakh 2084' },
    { title: 'Grade XI Board Examination', dateStr: '2084-01-15', label: '15 Baisakh 2084' },
  ];

  const [selectedTarget, setSelectedTarget] = useState(majorExams[3]); // Grade XII Board Exam as default
  const [timeLeft, setTimeLeft] = useState({ days: 245, hours: 14, minutes: 22, seconds: 40 });

  useEffect(() => {
    // Simple simulated countdown ticker
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6">
      
      {/* Countdown Card Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl shadow-xl border border-blue-800/40 p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold border border-blue-400/30 mb-3">
              <Clock className="w-3.5 h-3.5" />
              Major Examination Countdown Timer
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {selectedTarget.title}
            </h2>
            <p className="text-sm text-blue-200 mt-1 font-medium">
              Scheduled Date: <span className="text-white font-bold">{selectedTarget.label}</span>
            </p>

            {/* Target Exam Selector Dropdown */}
            <div className="mt-4 inline-block">
              <select
                value={selectedTarget.title}
                onChange={(e) => {
                  const target = majorExams.find(m => m.title === e.target.value);
                  if (target) setSelectedTarget(target);
                }}
                className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs font-semibold text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {majorExams.map(m => (
                  <option key={m.title} value={m.title}>
                    Target: {m.title} ({m.label})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Countdown Clock Display */}
          <div className="flex items-center gap-3 sm:gap-4 text-center">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-3 sm:p-4 min-w-[70px] sm:min-w-[85px] backdrop-blur-sm">
              <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono">{timeLeft.days}</span>
              <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Days</span>
            </div>

            <span className="text-xl sm:text-2xl font-bold text-slate-600">:</span>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-3 sm:p-4 min-w-[70px] sm:min-w-[85px] backdrop-blur-sm">
              <span className="text-2xl sm:text-4xl font-extrabold text-blue-400 font-mono">{timeLeft.hours}</span>
              <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Hours</span>
            </div>

            <span className="text-xl sm:text-2xl font-bold text-slate-600">:</span>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-3 sm:p-4 min-w-[70px] sm:min-w-[85px] backdrop-blur-sm">
              <span className="text-2xl sm:text-4xl font-extrabold text-blue-400 font-mono">{timeLeft.minutes}</span>
              <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Mins</span>
            </div>

            <span className="text-xl sm:text-2xl font-bold text-slate-600">:</span>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-3 sm:p-4 min-w-[70px] sm:min-w-[85px] backdrop-blur-sm">
              <span className="text-2xl sm:text-4xl font-extrabold text-cyan-400 font-mono">{timeLeft.seconds}</span>
              <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Secs</span>
            </div>
          </div>

        </div>
      </div>

      {/* Examinations Schedule Header & Grid */}
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              Examination & Assessment Schedule
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              All internal term exams, pre-boards, board practicals, and monthly class tests.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {examEvents.map((exam) => (
            <div
              key={exam.id}
              onClick={() => onSelectEvent(exam)}
              className="bg-blue-50/50 hover:bg-blue-50 border border-blue-200/80 hover:border-blue-300 rounded-xl p-5 transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-200 text-blue-900">
                    {exam.category}
                  </span>

                  {exam.grade && exam.grade !== 'General' && (
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-200 text-slate-700">
                      <GraduationCap className="w-3 h-3" />
                      {exam.grade}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-blue-700 transition-colors mt-1">
                  {exam.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-blue-800 font-semibold mt-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>
                    {exam.isMultiDay && exam.nepaliDateEnd
                      ? `${exam.nepaliDate} – ${exam.nepaliDateEnd} ${exam.nepaliMonth}`
                      : `${exam.nepaliDate} ${exam.nepaliMonth}`}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500 font-normal">{exam.gregorianDate}</span>
                </div>

                <p className="text-xs text-slate-600 font-normal leading-relaxed mt-3 line-clamp-3">
                  {exam.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-blue-200/50 flex items-center justify-between text-[11px] text-blue-600 font-semibold">
                <span>View examination details</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
