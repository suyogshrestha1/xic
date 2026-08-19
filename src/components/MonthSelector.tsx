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
    <div className="bg-white border-b border-slate-200 shadow-xs sticky top-[108px] sm:top-[128px] z-30 transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5">
        
        {/* Controls & Month Title */}
        <div className="flex flex-row items-center justify-between gap-2 mb-2">
          
          {/* Navigation buttons + Current Month */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPrevMonth}
              disabled={currentMonthIndex === 0}
              className={`p-2 rounded-lg border transition-all active:scale-95 ${
                currentMonthIndex === 0
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 hover:bg-slate-100 text-slate-700 shadow-xs'
              }`}
              title="Previous Month"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span 
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full shadow-inner border border-black/10 shrink-0" 
                style={{ backgroundColor: currentMonth.hexColor }} 
              />
              <div>
                <h2 className="text-base sm:text-xl font-serif font-bold text-slate-900 leading-tight">
                  {currentMonth.name}
                </h2>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
                  {currentMonth.gregorianRange}
                </p>
              </div>
            </div>

            <button
              onClick={onNextMonth}
              disabled={currentMonthIndex === MONTHS_DATA.length - 1}
              className={`p-2 rounded-lg border transition-all active:scale-95 ${
                currentMonthIndex === MONTHS_DATA.length - 1
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 hover:bg-slate-100 text-slate-700 shadow-xs'
              }`}
              title="Next Month"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Controls: Dropdown & Today */}
          <div className="flex items-center gap-2">
            <select
              value={currentMonthIndex}
              onChange={(e) => onSelectMonth(Number(e.target.value))}
              className="px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 max-w-[120px] sm:max-w-none truncate"
            >
              {MONTHS_DATA.map((m, idx) => (
                <option key={m.name} value={idx}>
                  {m.name.split(' ')[0]}
                </option>
              ))}
            </select>

            <button
              onClick={onGoToToday}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-900 active:scale-95 text-white rounded-lg text-xs font-semibold shadow-xs transition-all shrink-0 min-h-[34px]"
              title="Jump to Current Academic Date"
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Today</span>
            </button>
          </div>
        </div>

        {/* Month Pills matching PDF Cover Page dots (Touch-Scrollable on mobile) */}
        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 pt-1 no-scrollbar scrollbar-touch border-t border-slate-100">
          {MONTHS_DATA.map((month, idx) => {
            const isSelected = idx === currentMonthIndex;
            return (
              <button
                key={month.name}
                onClick={() => onSelectMonth(idx)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 min-h-[34px] ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs ring-2 ring-slate-400/30 scale-102'
                    : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
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
