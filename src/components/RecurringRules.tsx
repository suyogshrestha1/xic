import React from 'react';
import { RECURRING_RULES } from '../data/calendarData';
import { Sparkles, GraduationCap, CheckSquare, Clock, Compass } from 'lucide-react';

export const RecurringRules: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-purple-500" />;
      case 'CheckSquare':
        return <CheckSquare className="w-4 h-4 text-emerald-500" />;
      case 'Clock':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-cyan-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5 mt-6">
      
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
            RECURRING ACADEMIC ACTIVITIES & RULES
          </h3>
          <p className="text-sm font-serif font-bold text-slate-800">
            Weekly Routines & Assessment Principles
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {RECURRING_RULES.map((rule) => (
          <div
            key={rule.id}
            className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-100/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                    {getIcon(rule.iconName)}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-serif">
                    {rule.title}
                  </h4>
                </div>

                {rule.tag && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-700">
                    {rule.tag}
                  </span>
                )}
              </div>

              <div className="text-[11px] font-bold text-cyan-700 uppercase tracking-wider mb-2">
                {rule.frequency}
              </div>

              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                {rule.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
