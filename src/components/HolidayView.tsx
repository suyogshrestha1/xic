import React from 'react';
import { CalendarEvent } from '../types/calendar';
import { getAllEvents } from '../data/calendarData';
import { HeartHandshake, Calendar, Sparkles, AlertCircle } from 'lucide-react';

interface HolidayViewProps {
  onSelectEvent: (event: CalendarEvent) => void;
}

export const HolidayView: React.FC<HolidayViewProps> = ({ onSelectEvent }) => {
  const allEvents = getAllEvents();
  
  // Filter only Holidays and Vacations
  const holidayEvents = allEvents.filter(
    e => e.mainCategory === 'Holiday' || e.category === 'Vacations' || e.category === 'Holiday'
  ).sort((a, b) => {
    if (a.monthIndex !== b.monthIndex) return a.monthIndex - b.monthIndex;
    return a.nepaliDate - b.nepaliDate;
  });

  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 mb-8">
      
      {/* Header */}
      <div className="flex items-center gap-3 pb-5 border-b border-slate-200 mb-6">
        <div className="w-12 h-12 rounded-xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600">
          <HeartHandshake className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            Holidays & Vacations — Academic Year 2083–84
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Complete schedule of official college holidays, festive breaks, and seasonal vacations.
          </p>
        </div>
      </div>

      {/* Grid of Holidays */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {holidayEvents.map((holiday) => (
          <div
            key={holiday.id}
            onClick={() => onSelectEvent(holiday)}
            className="bg-rose-50/60 hover:bg-rose-50 border border-rose-200/80 hover:border-rose-300 rounded-xl p-5 transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-200 text-rose-800">
                  {holiday.category}
                </span>

                <span className="text-xs font-semibold text-rose-700 font-mono">
                  {holiday.gregorianDate}
                </span>
              </div>

              <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-rose-700 transition-colors mt-1">
                {holiday.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-rose-800 font-semibold mt-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>
                  {holiday.isMultiDay && holiday.nepaliDateEnd
                    ? `${holiday.nepaliDate} – ${holiday.nepaliDateEnd} ${holiday.nepaliMonth}`
                    : `${holiday.nepaliDate} ${holiday.nepaliMonth}`}
                </span>
              </div>

              <p className="text-xs text-slate-600 font-normal leading-relaxed mt-3 line-clamp-3">
                {holiday.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-rose-200/50 flex items-center justify-between text-[11px] text-rose-600 font-semibold">
              <span>View details</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
