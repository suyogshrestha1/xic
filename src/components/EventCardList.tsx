import React from 'react';
import { MonthData, CalendarEvent } from '../types/calendar';
import { Calendar, Tag, ChevronRight, Award } from 'lucide-react';

interface EventCardListProps {
  month: MonthData;
  events: CalendarEvent[];
  onSelectEvent: (event: CalendarEvent) => void;
  selectedEventId?: string;
}

export const EventCardList: React.FC<EventCardListProps> = ({
  month,
  events,
  onSelectEvent,
  selectedEventId,
}) => {
  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => a.nepaliDate - b.nepaliDate);

  const getBadgeColor = (event: CalendarEvent) => {
    switch (event.mainCategory) {
      case 'Holiday':
        return 'bg-rose-500 text-white';
      case 'Exams':
        return 'bg-blue-600 text-white';
      case 'Class Test Day':
        return 'bg-emerald-600 text-white';
      case 'Skill Day':
        return 'bg-amber-500 text-white';
      default:
        return 'bg-purple-600 text-white';
    }
  };

  const getCategoryBadge = (event: CalendarEvent) => {
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
    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5 flex flex-col h-full">
      
      {/* Header matching PDF "KEY EVENTS" */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
            KEY EVENTS
          </h3>
          <p className="text-sm font-bold text-slate-800 font-serif">
            {month.name} ({sortedEvents.length} Events)
          </p>
        </div>

        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
          <Calendar className="w-4 h-4" />
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-3.5 overflow-y-auto flex-1 pr-1 max-h-[600px] sm:max-h-none">
        {sortedEvents.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-sm">
            No events found for this filter in {month.name}.
          </div>
        ) : (
          sortedEvents.map((event) => {
            const isSelected = selectedEventId === event.id;

            return (
              <div
                key={event.id}
                onClick={() => onSelectEvent(event)}
                className={`p-4 rounded-xl border transition-all cursor-pointer group relative ${
                  isSelected
                    ? 'border-cyan-500 bg-cyan-50/50 shadow-md ring-1 ring-cyan-500'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  
                  {/* Number Badge (Matching original PDF circular date numbers) */}
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shadow-sm shrink-0 mt-0.5 ${getBadgeColor(event)}`}>
                    {event.nepaliDate}
                  </div>

                  <div className="flex-1 min-w-0">
                    
                    {/* Date Subtitle */}
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                      {event.isMultiDay && event.nepaliDateEnd
                        ? `${event.nepaliDate}–${event.nepaliDateEnd} ${event.nepaliMonth.split(' ')[0].toUpperCase()}`
                        : `${event.nepaliDate} ${event.nepaliMonth.split(' ')[0].toUpperCase()}`}
                      {' '} • {event.gregorianDate}
                    </div>

                    {/* Title */}
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors leading-snug">
                      {event.title}
                    </h4>

                    {/* Category & Grade Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${getCategoryBadge(event)}`}>
                        {event.category}
                      </span>

                      {event.grade && event.grade !== 'General' && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-200 text-slate-700 border border-slate-300">
                          {event.grade}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 mt-2 font-normal leading-relaxed line-clamp-3">
                      {event.description}
                    </p>

                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-600 transition-colors shrink-0 self-center" />

                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
