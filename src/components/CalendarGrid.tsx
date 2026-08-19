import React from 'react';
import { MonthData, CalendarEvent } from '../types/calendar';
import { getGregorianForNepaliDate } from '../data/calendarData';

interface CalendarGridProps {
  month: MonthData;
  onSelectDate: (day: number) => void;
  onSelectEvent: (event: CalendarEvent) => void;
  selectedDay: number | null;
  filteredEvents: CalendarEvent[];
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  month,
  onSelectDate,
  onSelectEvent,
  selectedDay,
  filteredEvents,
}) => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const eventsByDay: { [day: number]: CalendarEvent[] } = {};
  const displayEvents = filteredEvents.length > 0 ? filteredEvents : month.events;

  displayEvents.forEach(event => {
    if (event.monthIndex === month.index) {
      if (event.isMultiDay && event.nepaliDateEnd) {
        for (let d = event.nepaliDate; d <= event.nepaliDateEnd; d++) {
          if (!eventsByDay[d]) eventsByDay[d] = [];
          if (!eventsByDay[d].some(e => e.id === event.id)) {
            eventsByDay[d].push(event);
          }
        }
      } else {
        const d = event.nepaliDate;
        if (!eventsByDay[d]) eventsByDay[d] = [];
        if (!eventsByDay[d].some(e => e.id === event.id)) {
          eventsByDay[d].push(event);
        }
      }
    }
  });

  const leadingEmptyCells = month.startDayOfWeek;
  const totalGridCells = leadingEmptyCells + month.totalDays;
  const trailingEmptyCells = (7 - (totalGridCells % 7)) % 7;

  const getCategoryStyles = (event: CalendarEvent) => {
    switch (event.mainCategory) {
      case 'Holiday':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'Exams':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Class Test Day':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Skill Day':
        return 'bg-amber-100 text-amber-900 border-amber-200';
      default:
        return 'bg-purple-100 text-purple-800 border-purple-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden flex flex-col h-full">
      
      {/* Month Banner Header */}
      <div 
        className="px-4 sm:px-6 py-3.5 sm:py-4 text-white flex items-center justify-between shadow-inner"
        style={{ backgroundColor: month.hexColor }}
      >
        <div>
          <h2 className="text-xl sm:text-3xl font-serif font-bold tracking-tight">
            {month.name}
          </h2>
          <p className="text-[11px] sm:text-sm text-white/80 font-medium mt-0.5">
            {month.gregorianRange}
          </p>
        </div>

        <div className="text-right flex flex-col items-end">
          <img 
            src="/logo.png" 
            alt="Xavier International College Logo" 
            className="h-7 sm:h-10 w-auto object-contain bg-white/95 p-1 sm:p-1.5 rounded-lg shadow-xs"
          />
        </div>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 bg-slate-100 border-b border-slate-200 text-center text-[10px] sm:text-xs font-extrabold text-slate-600 py-2 uppercase tracking-wider">
        {daysOfWeek.map((day, idx) => (
          <div key={day} className={idx === 6 ? 'text-rose-600 font-extrabold' : ''}>
            {day}
          </div>
        ))}
      </div>

      {/* Monthly Days Grid */}
      <div className="grid grid-cols-7 flex-1 auto-rows-fr bg-slate-200 gap-px p-px">
        
        {/* Leading empty cells */}
        {Array.from({ length: leadingEmptyCells }).map((_, i) => (
          <div key={`empty-lead-${i}`} className="bg-slate-50/60 min-h-[55px] sm:min-h-[90px]" />
        ))}

        {/* Day Cells */}
        {Array.from({ length: month.totalDays }).map((_, i) => {
          const dayNum = i + 1;
          const dayOfWeek = (leadingEmptyCells + i) % 7;
          const isSaturday = dayOfWeek === 6;
          const dayEvents = eventsByDay[dayNum] || [];
          const isSelected = selectedDay === dayNum;

          const hasHoliday = isSaturday || dayEvents.some(e => e.mainCategory === 'Holiday');
          const hasExam = dayEvents.some(e => e.mainCategory === 'Exams');
          const hasClassTest = dayEvents.some(e => e.mainCategory === 'Class Test Day');

          let cellBg = 'bg-white hover:bg-slate-50';
          if (isSelected) {
            cellBg = 'bg-amber-50 ring-2 ring-amber-500 z-10';
          } else if (hasHoliday) {
            cellBg = 'bg-rose-50/70 hover:bg-rose-100/60';
          } else if (hasExam) {
            cellBg = 'bg-blue-50/70 hover:bg-blue-100/60';
          } else if (hasClassTest) {
            cellBg = 'bg-emerald-50/70 hover:bg-emerald-100/60';
          }

          const gregorianStr = getGregorianForNepaliDate(month.index, dayNum);

          return (
            <div
              key={`day-${dayNum}`}
              onClick={() => onSelectDate(dayNum)}
              className={`${cellBg} min-h-[55px] sm:min-h-[95px] p-1 sm:p-2 cursor-pointer transition-all flex flex-col justify-between group relative active:bg-slate-100`}
            >
              {/* Top Row: Nepali Date + Gregorian Date */}
              <div className="flex items-start justify-between">
                <span className={`text-sm sm:text-xl font-bold font-serif leading-none ${
                  hasHoliday ? 'text-rose-600' : 'text-slate-800'
                }`}>
                  {dayNum}
                </span>

                <span className="text-[8px] sm:text-xs text-slate-400 font-medium tracking-tight truncate max-w-[28px] sm:max-w-none">
                  {gregorianStr}
                </span>
              </div>

              {/* Middle: Event Badges */}
              <div className="my-0.5 sm:my-1 space-y-0.5 sm:space-y-1 overflow-hidden max-h-[38px] sm:max-h-[48px]">
                {dayEvents.slice(0, 2).map((event) => (
                  <div
                    key={event.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectEvent(event);
                    }}
                    className={`px-1 py-0.5 rounded text-[9px] sm:text-xs font-medium truncate border shadow-2xs ${getCategoryStyles(event)}`}
                    title={`${event.title} (${event.category})`}
                  >
                    <span className="hidden sm:inline">{event.title}</span>
                    <span className="sm:hidden">{event.title.length > 7 ? event.title.substring(0, 6) + '..' : event.title}</span>
                  </div>
                ))}

                {dayEvents.length > 2 && (
                  <div className="text-[8px] sm:text-[9px] font-bold text-slate-500 px-0.5">
                    +{dayEvents.length - 2}
                  </div>
                )}
              </div>

              {/* Bottom Dot Indicator for mobile quick scanning */}
              {dayEvents.length > 0 && (
                <div className="flex items-center gap-0.5 sm:gap-1 mt-auto">
                  {dayEvents.map((ev, idx) => {
                    let dotColor = 'bg-purple-500';
                    if (ev.mainCategory === 'Holiday') dotColor = 'bg-rose-500';
                    else if (ev.mainCategory === 'Exams') dotColor = 'bg-blue-500';
                    else if (ev.mainCategory === 'Class Test Day') dotColor = 'bg-emerald-500';
                    else if (ev.mainCategory === 'Skill Day') dotColor = 'bg-amber-500';
                    return (
                      <span
                        key={`dot-${idx}`}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${dotColor}`}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Trailing empty cells */}
        {Array.from({ length: trailingEmptyCells }).map((_, i) => (
          <div key={`empty-trail-${i}`} className="bg-slate-50/60 min-h-[55px] sm:min-h-[90px]" />
        ))}
      </div>

      {/* Legend Footer */}
      <div className="bg-slate-50 px-3 sm:px-4 py-2.5 sm:py-3 border-t border-slate-200 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-[10px] sm:text-xs font-semibold text-slate-700">
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500 shadow-2xs" />
          <span>Holiday</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-400 shadow-2xs" />
          <span>Class Day</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500 shadow-2xs" />
          <span>Skill Day</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-600 shadow-2xs" />
          <span>Exams</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-600 shadow-2xs" />
          <span>Class Test Day</span>
        </div>
      </div>

    </div>
  );
};
