import React from 'react';
import { PROCESS_STEPS } from '../data/calendarData';

export const ProcessBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-xavier-teal-dark via-xavier-teal to-cyan-800 text-white rounded-xl shadow-md p-4 sm:p-5 border border-cyan-700/50 my-6">
      <div className="text-center mb-3">
        <h4 className="text-xs font-extrabold uppercase tracking-widest text-cyan-200">
          THE XAVIER ACADEMIC LIFECYCLE
        </h4>
        <p className="text-xs text-white/80 font-medium mt-0.5">
          9-Step Learning & Progress Framework
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all border border-white/10 text-center backdrop-blur-xs group"
          >
            <div className="w-6 h-6 rounded-full bg-cyan-300 text-slate-900 font-bold text-xs flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
              {step.number}
            </div>
            <span className="text-[11px] font-semibold text-white leading-tight">
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
