import React, { useState } from 'react';
import { X, Download, ChevronLeft, ChevronRight, FileText, Maximize2 } from 'lucide-react';
import { MONTHS_DATA } from '../data/calendarData';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  isOpen,
  onClose,
  onDownload,
}) => {
  if (!isOpen) return null;

  const [activePage, setActivePage] = useState(1);
  const totalPages = 11;

  const pageLabels = [
    'Cover Page — Student Academic Calendar 2083-84',
    'Shrawan 2083 (Jul/Aug 2026)',
    'Bhadra 2083 (Aug/Sep 2026)',
    'Aswin 2083 (Sep/Oct 2026)',
    'Kartik 2083 (Oct/Nov 2026)',
    'Mangsir 2083 (Nov/Dec 2026)',
    'Poush 2083 (Dec 2026/Jan 2027)',
    'Magh 2083 (Jan/Feb 2027)',
    'Falgun 2083 (Feb/Mar 2027)',
    'Chaitra 2083 (Mar/Apr 2027)',
    'Baisakh 2084 (Apr/May 2027)',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 w-full max-w-5xl h-[92vh] flex flex-col overflow-hidden text-white animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-600/20 text-cyan-400 rounded-lg border border-cyan-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-white">
                Original Academic Calendar PDF Viewer
              </h3>
              <p className="text-xs text-slate-400">
                Page {activePage} of {totalPages} — {pageLabels[activePage - 1]}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-all"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Thumbnail Selector Strip */}
        <div className="bg-slate-950/60 px-4 py-2 border-b border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {pageLabels.map((label, idx) => {
            const pageNum = idx + 1;
            const isSelected = pageNum === activePage;
            return (
              <button
                key={pageNum}
                onClick={() => setActivePage(pageNum)}
                className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-cyan-600 text-white font-bold ring-1 ring-cyan-400'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300'
                }`}
              >
                {pageNum}. {pageNum === 1 ? 'Cover' : label.split(' ')[0]}
              </button>
            );
          })}
        </div>

        {/* Main Document Content Canvas */}
        <div className="flex-1 bg-slate-950 p-4 overflow-y-auto flex items-center justify-center relative">
          
          <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-6 sm:p-10 text-slate-900 min-h-[600px] flex flex-col justify-between border border-slate-700">
            
            {activePage === 1 ? (
              /* Cover Page Mock */
              <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-xl text-center flex flex-col items-center justify-center my-auto min-h-[500px]">
                <img 
                  src="/logo.png" 
                  alt="Xavier International College Logo" 
                  className="h-20 sm:h-24 w-auto object-contain bg-white/95 p-3 rounded-2xl mb-4 shadow-md" 
                />
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-cyan-400 mt-2">
                  Academic Year 2083–84
                </h2>
                <p className="text-sm font-bold tracking-widest uppercase text-slate-400 mt-2">
                  STUDENT ACADEMIC CALENDAR
                </p>
                <p className="text-xs text-slate-300 max-w-md mt-6 italic">
                  A month-by-month guide to classes, exams, festivals, and everything in between — from the first day back to graduation.
                </p>
                <div className="mt-8 px-6 py-2 bg-white/10 rounded-full text-xs font-semibold border border-white/20">
                  Shrawan 2083 – Baisakh 2084
                </div>
              </div>
            ) : (
              /* Monthly Page Mock matching PDF page */
              <div className="flex flex-col h-full">
                <div 
                  className="p-4 rounded-t-xl text-white flex items-center justify-between"
                  style={{ backgroundColor: MONTHS_DATA[activePage - 2]?.hexColor || '#148078' }}
                >
                  <div>
                    <h2 className="text-2xl font-serif font-bold">
                      {MONTHS_DATA[activePage - 2]?.name}
                    </h2>
                    <p className="text-xs opacity-90">
                      {MONTHS_DATA[activePage - 2]?.gregorianRange}
                    </p>
                  </div>
                  <div className="text-right font-serif font-bold text-sm">
                    XAVIER INTERNATIONAL COLLEGE
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200 rounded-b-xl my-auto space-y-4">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400">
                    Official Events Summary — Page {activePage}
                  </h3>
                  <div className="space-y-3">
                    {MONTHS_DATA[activePage - 2]?.events.map(ev => (
                      <div key={ev.id} className="p-3 bg-white border border-slate-200 rounded-lg text-xs">
                        <div className="font-bold text-slate-900 text-sm">
                          {ev.nepaliDate} {MONTHS_DATA[activePage - 2]?.name.split(' ')[0]} — {ev.title}
                        </div>
                        <div className="text-slate-500 font-medium mt-0.5">{ev.gregorianDate} • {ev.category}</div>
                        <p className="text-slate-600 mt-1">{ev.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="text-center text-xs text-slate-400 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span>Xavier International College Official Document</span>
              <span>Page {activePage} of {totalPages}</span>
            </div>

          </div>

        </div>

        {/* Bottom Pagination Controls */}
        <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => setActivePage(p => Math.max(1, p - 1))}
            disabled={activePage === 1}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activePage === 1
                ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                : 'bg-slate-800 hover:bg-slate-700 text-white'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Page
          </button>

          <span className="text-xs text-slate-400 font-medium">
            Page {activePage} / {totalPages}
          </span>

          <button
            onClick={() => setActivePage(p => Math.min(totalPages, p + 1))}
            disabled={activePage === totalPages}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activePage === totalPages
                ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                : 'bg-slate-800 hover:bg-slate-700 text-white'
            }`}
          >
            Next Page
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
