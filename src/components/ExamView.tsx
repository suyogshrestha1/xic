import React, { useState, useEffect } from 'react';
import { CalendarEvent } from '../types/calendar';
import { getAllEvents } from '../data/calendarData';
import { Trophy, Clock, Calendar, GraduationCap, CheckCircle2 } from 'lucide-react';

interface ExamViewProps {
  onSelectEvent: (event: CalendarEvent) => void;
}

interface TargetExam {
  id: string;
  title: string;
  nepaliLabel: string;
  gregorianLabel: string;
  grade: string;
  targetDate: string; // ISO format: e.g. "2026-10-06T09:00:00"
  category: string;
}

export const ExamView: React.FC<ExamViewProps> = ({ onSelectEvent }) => {
  const allEvents = getAllEvents();

  // Filter Exam-related events for full list
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

  // All Major Exam Targets for simultaneous countdowns
  const majorExamTargets: TargetExam[] = [
    {
      id: 'target-term1',
      title: 'First Terminal Examination',
      nepaliLabel: '20–28 Aswin 2083',
      gregorianLabel: 'Oct 6 – Oct 14, 2026',
      grade: 'General',
      targetDate: '2026-10-06T09:00:00',
      category: 'Internal Exam'
    },
    {
      id: 'target-term2',
      title: 'Second Terminal Examination',
      nepaliLabel: '15–24 Poush 2083',
      gregorianLabel: 'Dec 30, 2026 – Jan 8, 2027',
      grade: 'General',
      targetDate: '2026-12-30T09:00:00',
      category: 'Internal Exam'
    },
    {
      id: 'target-term3',
      title: 'Term 3 / Pre-Board Examination',
      nepaliLabel: '30 Falgun–10 Chaitra 2083',
      gregorianLabel: 'Mar 14 – Mar 24, 2027',
      grade: 'General',
      targetDate: '2027-03-14T09:00:00',
      category: 'Pre-Board'
    },
    {
      id: 'target-xii-prac',
      title: 'Grade XII Board Practicals',
      nepaliLabel: '16–19 Chaitra 2083',
      gregorianLabel: 'Mar 30 – Apr 2, 2027',
      grade: 'Grade XII',
      targetDate: '2027-03-30T09:00:00',
      category: 'Practical Exam'
    },
    {
      id: 'target-xii-board',
      title: 'Grade XII Board Examination',
      nepaliLabel: '13 Baisakh 2084',
      gregorianLabel: 'Apr 26, 2027',
      grade: 'Grade XII',
      targetDate: '2027-04-26T09:00:00',
      category: 'Board Exam'
    },
    {
      id: 'target-xi-board',
      title: 'Grade XI Board Examination',
      nepaliLabel: '15 Baisakh 2084',
      gregorianLabel: 'Apr 28, 2027',
      grade: 'Grade XI',
      targetDate: '2027-04-28T09:00:00',
      category: 'Board Exam'
    },
    {
      id: 'target-xi-prac',
      title: 'Grade XI Board Practicals',
      nepaliLabel: '28–31 Baisakh 2084',
      gregorianLabel: 'May 11 – May 14, 2027',
      grade: 'Grade XI',
      targetDate: '2027-05-11T09:00:00',
      category: 'Practical Exam'
    }
  ];

  // Tick state for all target countdowns
  const [nowTime, setNowTime] = useState<number>(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setNowTime(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const calculateTimeLeft = (targetDateIso: string) => {
    const diff = new Date(targetDateIso).getTime() - nowTime;
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true };
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds, isPassed: false };
  };

  return (
    <div className="space-y-8">
      
      {/* Live Countdowns Grid Section */}
      <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-5 sm:p-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b border-slate-200 gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-extrabold bg-blue-100 text-blue-800 border border-blue-200 uppercase tracking-widest mb-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              Live Countdown Dashboard
            </div>
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-slate-900">
              Major Examinations Live Countdowns
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              Simultaneous live ticking countdown clocks for all terminal, board, and practical exams.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            7 Synchronized Live Timers
          </div>
        </div>

        {/* Grid of All Countdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {majorExamTargets.map((target) => {
            const time = calculateTimeLeft(target.targetDate);

            return (
              <div
                key={target.id}
                className="bg-gradient-to-br from-slate-900 via-xavier-navy to-slate-900 rounded-2xl shadow-lg border border-slate-800 p-5 text-white flex flex-col justify-between relative overflow-hidden group hover:border-blue-500/50 transition-all"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      {target.category}
                    </span>

                    {target.grade && target.grade !== 'General' && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                        <GraduationCap className="w-3 h-3 text-cyan-400" />
                        {target.grade}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                    {target.title}
                  </h3>

                  <div className="mt-2 text-xs text-blue-200/90 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span><strong>BS:</strong> {target.nepaliLabel}</span>
                    </div>
                    <div className="text-slate-400 text-[11px] mt-0.5 pl-5">
                      {target.gregorianLabel}
                    </div>
                  </div>
                </div>

                {/* 4-Box Countdown Timer */}
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  {time.isPassed ? (
                    <div className="py-2 text-center bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Examination In Session / Completed
                    </div>
                  ) : (
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-2 backdrop-blur-xs">
                        <span className="text-lg sm:text-2xl font-extrabold text-white font-mono">{time.days}</span>
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Days</span>
                      </div>

                      <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-2 backdrop-blur-xs">
                        <span className="text-lg sm:text-2xl font-extrabold text-blue-400 font-mono">{time.hours}</span>
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Hrs</span>
                      </div>

                      <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-2 backdrop-blur-xs">
                        <span className="text-lg sm:text-2xl font-extrabold text-blue-400 font-mono">{time.minutes}</span>
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Mins</span>
                      </div>

                      <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-2 backdrop-blur-xs">
                        <span className="text-lg sm:text-2xl font-extrabold text-cyan-400 font-mono">{time.seconds}</span>
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Secs</span>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Complete Examinations & Assessment Schedule */}
      <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              Complete Assessment & Exam Schedule
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              All terminal exams, pre-boards, board practicals, and monthly class tests.
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
