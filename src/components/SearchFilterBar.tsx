import React from 'react';
import { Search, Filter, SortAsc, X, GraduationCap } from 'lucide-react';

interface SearchFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedGrade: string;
  onGradeChange: (grade: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onClearAll: () => void;
  activeFilterCount: number;
}

export const CATEGORY_OPTIONS: { label: string; value: string }[] = [
  { label: 'All Categories', value: 'All' },
  { label: 'Holidays', value: 'Holiday' },
  { label: 'Class Days', value: 'Class Day' },
  { label: 'Skill Days', value: 'Skill Day' },
  { label: 'Exams', value: 'Exams' },
  { label: 'Class Tests', value: 'Class Test Day' },
  { label: 'Academic Events', value: 'Academic Events' },
  { label: 'Workshops', value: 'Workshops' },
  { label: 'Competitions', value: 'Competitions' },
  { label: 'Vacations', value: 'Vacations' },
  { label: 'Registration / Deadlines', value: 'Registration/Deadlines' },
  { label: 'Results & Parent Meets', value: 'Results/Parent Meetings' },
  { label: 'Awards', value: 'Awards' },
  { label: 'Practical Exams', value: 'Practical Exams' },
  { label: 'Board Exams', value: 'Board Exams' },
];

export const GRADE_OPTIONS: { label: string; value: string }[] = [
  { label: 'All Grades', value: 'All' },
  { label: 'Grade XI', value: 'Grade XI' },
  { label: 'Grade XII', value: 'Grade XII' },
  { label: 'Science', value: 'Science' },
  { label: 'Management', value: 'Management' },
  { label: 'General', value: 'General' },
];

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedGrade,
  onGradeChange,
  sortBy,
  onSortChange,
  onClearAll,
  activeFilterCount,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-3 sm:p-4 mb-4 sm:mb-6 transition-all">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
        
        {/* Search Input */}
        <div className="relative w-full lg:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search events, e.g. Dashain, Exam, AI..."
            className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all min-h-[38px]"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filters Group (Grid on Mobile, Flex on Desktop) */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 w-full lg:w-auto">
          
          {/* Category Filter */}
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 col-span-1 min-h-[36px]">
            <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="bg-transparent text-xs font-semibold focus:outline-none cursor-pointer w-full truncate"
            >
              {CATEGORY_OPTIONS.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Grade Filter */}
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 col-span-1 min-h-[36px]">
            <GraduationCap className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <select
              value={selectedGrade}
              onChange={(e) => onGradeChange(e.target.value)}
              className="bg-transparent text-xs font-semibold focus:outline-none cursor-pointer w-full truncate"
            >
              {GRADE_OPTIONS.map((g) => (
                <option key={g.value} value={g.value}>
                  {g.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 col-span-2 sm:col-span-1 min-h-[36px]">
            <SortAsc className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-transparent text-xs font-semibold focus:outline-none cursor-pointer w-full truncate"
            >
              <option value="date-asc">Earliest → Latest</option>
              <option value="date-desc">Latest → Earliest</option>
              <option value="name-asc">Event Name (A-Z)</option>
              <option value="category">Category</option>
            </select>
          </div>

          {/* Clear Filters Button */}
          {activeFilterCount > 0 && (
            <button
              onClick={onClearAll}
              className="flex items-center justify-center gap-1 px-3 py-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-lg text-xs font-semibold border border-rose-200 transition-all col-span-2 sm:col-span-1 min-h-[36px]"
            >
              <X className="w-3.5 h-3.5" />
              Reset ({activeFilterCount})
            </button>
          )}

        </div>

      </div>
    </div>
  );
};
