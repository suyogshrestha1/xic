import React from 'react';
import { X, Calendar, Tag, GraduationCap, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { CalendarEvent } from '../types/calendar';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  events: CalendarEvent[];
  selectedDateNum?: number;
  monthName?: string;
  gregorianDateStr?: string;
}

export const EventModal: React.FC<EventModalProps> = ({
  isOpen,
  onClose,
  events,
  selectedDateNum,
  monthName,
  gregorianDateStr,
}) => {
  if (!isOpen) return null;

  const [activeEventIndex, setActiveEventIndex] = React.useState(0);
  const currentEvent = events[activeEventIndex] || events[0];

  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case 'Holiday':
      case 'Vacations':
        return 'bg-rose-100 text-rose-800 border-rose-300';
      case 'Exams':
      case 'Board Exams':
      case 'Practical Exams':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Class Test Day':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Skill Day':
      case 'Workshops':
      case 'Competitions':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      default:
        return 'bg-purple-100 text-purple-800 border-purple-300';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-xavier-navy to-slate-800 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-bold font-serif text-lg">
              {selectedDateNum || (currentEvent ? currentEvent.nepaliDate : '')}
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-white leading-tight">
                {monthName || (currentEvent ? currentEvent.nepaliMonth : 'Event Details')}
              </h3>
              <p className="text-xs text-cyan-300 font-medium">
                {gregorianDateStr || (currentEvent ? currentEvent.gregorianDate : '')}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {/* If no events on this date */}
          {(!events || events.length === 0) ? (
            <div className="py-8 text-center">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="text-base font-bold text-slate-700">No Special Event Listed</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                This is a regular class day according to the Xavier International College Academic Calendar.
              </p>
            </div>
          ) : (
            <>
              {/* Multiple Events Tab Switcher */}
              {events.length > 1 && (
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">
                    Events on this date ({events.length}):
                  </span>
                  {events.map((ev, idx) => (
                    <button
                      key={ev.id}
                      onClick={() => setActiveEventIndex(idx)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                        activeEventIndex === idx
                          ? 'bg-slate-900 text-white shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {ev.title.length > 20 ? ev.title.substring(0, 18) + '...' : ev.title}
                    </button>
                  ))}
                </div>
              )}

              {/* Event Title & Badges */}
              {currentEvent && (
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getCategoryBadgeStyle(currentEvent.category)}`}>
                      {currentEvent.category}
                    </span>

                    {currentEvent.grade && currentEvent.grade !== 'General' && (
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-300">
                        <GraduationCap className="w-3 h-3 text-slate-500" />
                        {currentEvent.grade}
                      </span>
                    )}

                    {currentEvent.isMultiDay && (
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                        <Clock className="w-3 h-3" />
                        Multi-Day Event
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-serif font-bold text-slate-900 leading-snug">
                    {currentEvent.title}
                  </h3>

                  {/* Multi-day date span detail */}
                  <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-700" />
                      <span>
                        <strong>Nepali Date:</strong> {currentEvent.isMultiDay && currentEvent.nepaliDateEnd
                          ? `${currentEvent.nepaliDate} – ${currentEvent.nepaliDateEnd} ${currentEvent.nepaliMonth}`
                          : `${currentEvent.nepaliDate} ${currentEvent.nepaliMonth}`}
                      </span>
                    </div>

                    <div className="text-slate-500">
                      <strong>Gregorian:</strong> {currentEvent.gregorianDate}
                    </div>
                  </div>

                  {/* Official Description */}
                  <div className="mt-4">
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Event Overview
                    </h5>
                    <p className="text-sm text-slate-700 font-normal leading-relaxed bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                      {currentEvent.description}
                    </p>
                  </div>

                  {/* Institutional context note */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Verified entry from official Xavier International College Calendar PDF</span>
                  </div>
                </div>
              )}
            </>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold shadow-sm transition-all"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
