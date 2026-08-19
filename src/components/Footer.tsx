import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* College & Session Info */}
        <div className="text-center sm:text-left">
          <div className="font-serif font-semibold text-slate-200 text-sm">
            Xavier International College
          </div>
          <div className="text-slate-400 text-[11px] mt-0.5">
            Student Academic Calendar — Bikram Sambat 2083–84 (Shrawan 2083 – Baisakh 2084)
          </div>
        </div>

        {/* Mandatory Creator Credit */}
        <div className="text-center sm:text-right">
          <div className="text-slate-300 font-medium">
            Designed & Developed by{' '}
            <span className="text-cyan-400 font-semibold hover:underline cursor-pointer">
              Suyog Shrestha
            </span>
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">
            Official Interactive Web Edition • All rights reserved
          </div>
        </div>

      </div>
    </footer>
  );
};
