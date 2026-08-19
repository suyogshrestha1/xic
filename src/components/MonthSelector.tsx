import React from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { MONTHS_DATA } from '../data/calendarData';

interface MonthSelectorProps {
  currentMonthIndex: number;
  onSelectMonth: (index: number) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onGoToToday: () => void;
}

export const MonthSelector: React.FC<MonthSelectorProps> = ({
  currentMonthIndex,
  onSelectMonth,
  onPrevMonth,
  onNextMonth,
  onGoToToday,
}) => {
  const currentMonth = MONTHS_DATA[currentMonthIndex];

  return (
    <div className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Top bar: Controls & Month Title */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-3">
          
          {/* Navigation buttons + Current Month */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPrevMonth}
              disabled={currentMonthIndex === 0}
              className={`p-2 rounded-lg border transition-all ${
                currentMonthIndex === 0
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 hover:bg-slate-100 text-slate-700 shadow-sm'
              }`}
              title="Previous Month"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <span 
                className="w-3.5 h-3.5 rounded-full shadow-inner border border-black/10 shrink-0" 
                style={{ backgroundColor: currentMonth.hexColor }} 
              />
              <div>
                <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-900 leading-tight">
                  {currentMonth.name}
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  {currentMonth.gregorianRange}
                </p>
              </div>
            </div>

            <button
              onClick={onNextMonth}
              disabled={currentMonthIndex === MONTHS_DATA.length - 1}
              className={`p-2 rounded-lg border transition-all ${
                currentMonthIndex === MONTHS_DATA.length - 1
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 hover:bg-slate-100 text-slate-700 shadow-sm'
              }`}
              title="Next Month"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Controls: Dropdown & Today */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            
            {/* Mobile / Quick Dropdown */}
            <select
              value={currentMonthIndex}
              onChange={(e) => onSelectMonth(Number(e.target.value))}
              className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              {MONTHS_DATA.map((m, idx) => (
                <option key={m.name} value={idx}>
                  {m.name} ({m.gregorianRange})
                </option>
              ))}
            </select>

            {/* Today Button */}
            <button
              onClick={onGoToToday}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs sm:text-sm font-medium shadow-sm transition-all shrink-0"
              title="Jump to Current Academic Date"
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              Today
            </button>
          </div>
        </div>

        {/* Month Pills matching PDF Cover Page dots */}
        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 pt-1 scrollbar-none border-t border-slate-100">
          {MONTHS_DATA.map((month, idx) => {
            const isSelected = idx === currentMonthIndex;
            return (
              <button
                key={month.name}
                onClick={() => onSelectMonth(idx)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-400/30 scale-105'
                    : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: month.hexColor }}
                />
                <span>{month.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
