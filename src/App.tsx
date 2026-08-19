import React, { useState, useMemo } from 'react';
import { MONTHS_DATA, getAllEvents } from './data/calendarData';
import { CalendarEvent, ActiveTab } from './types/calendar';
import { Header } from './components/Header';
import { MonthSelector } from './components/MonthSelector';
import { SearchFilterBar } from './components/SearchFilterBar';
import { CalendarGrid } from './components/CalendarGrid';
import { EventCardList } from './components/EventCardList';
import { EventModal } from './components/EventModal';
import { HolidayView } from './components/HolidayView';
import { ExamView } from './components/ExamView';
import { ProcessBar } from './components/ProcessBar';
import { RecurringRules } from './components/RecurringRules';
import { PdfViewerModal } from './components/PdfViewerModal';
import { Footer } from './components/Footer';
import { Info, Sparkles, Calendar as CalendarIcon, ChevronRight } from 'lucide-react';

export function App() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<ActiveTab>('calendar');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedGrade, setSelectedGrade] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('date-asc');

  // Modal State
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [selectedDateNum, setSelectedDateNum] = useState<number | null>(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState<boolean>(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);

  const currentMonth = MONTHS_DATA[currentMonthIndex];
  const allEvents = useMemo(() => getAllEvents(), []);

  // Filter & Search Logic
  const filteredEventsForMonth = useMemo(() => {
    let result = currentMonth.events;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = allEvents.filter(ev =>
        ev.title.toLowerCase().includes(q) ||
        ev.description.toLowerCase().includes(q) ||
        ev.category.toLowerCase().includes(q) ||
        ev.nepaliMonth.toLowerCase().includes(q) ||
        ev.gregorianDate.toLowerCase().includes(q) ||
        ev.grade.toLowerCase().includes(q) ||
        ev.nepaliDate.toString().includes(q)
      );
    }

    // Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter(ev => 
        ev.category === selectedCategory || 
        ev.mainCategory === selectedCategory
      );
    }

    // Grade Filter
    if (selectedGrade !== 'All') {
      result = result.filter(ev => ev.grade === selectedGrade || ev.grade === 'General');
    }

    // Sorting
    result = [...result].sort((a, b) => {
      if (sortBy === 'date-asc') {
        if (a.monthIndex !== b.monthIndex) return a.monthIndex - b.monthIndex;
        return a.nepaliDate - b.nepaliDate;
      }
      if (sortBy === 'date-desc') {
        if (a.monthIndex !== b.monthIndex) return b.monthIndex - a.monthIndex;
        return b.nepaliDate - a.nepaliDate;
      }
      if (sortBy === 'name-asc') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

    return result;
  }, [currentMonth, searchQuery, selectedCategory, selectedGrade, sortBy, allEvents]);

  // Active filter count calculation
  const activeFilterCount = (searchQuery ? 1 : 0) + (selectedCategory !== 'All' ? 1 : 0) + (selectedGrade !== 'All' ? 1 : 0);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedGrade('All');
    setSortBy('date-asc');
  };

  // Date Click Handler
  const handleSelectDate = (day: number) => {
    setSelectedDateNum(day);
    const dayEvents = currentMonth.events.filter(e => {
      if (e.isMultiDay && e.nepaliDateEnd) {
        return day >= e.nepaliDate && day <= e.nepaliDateEnd;
      }
      return e.nepaliDate === day;
    });
    setSelectedEvent(dayEvents[0] || null);
    setIsEventModalOpen(true);
  };

  // Event Click Handler
  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setSelectedDateNum(event.nepaliDate);
    setIsEventModalOpen(true);
  };

  const handleGoToToday = () => {
    // Jump to Shrawan 2083 default
    setCurrentMonthIndex(0);
    handleSelectDate(1);
  };

  const handleDownloadPdf = () => {
    // Triggers download alert / window print or sample PDF
    window.print();
  };

  // Calculate events for selected modal date
  const modalEvents = useMemo(() => {
    if (!selectedDateNum) return selectedEvent ? [selectedEvent] : [];
    return currentMonth.events.filter(e => {
      if (e.isMultiDay && e.nepaliDateEnd) {
        return selectedDateNum >= e.nepaliDate && selectedDateNum <= e.nepaliDateEnd;
      }
      return e.nepaliDate === selectedDateNum;
    });
  }, [selectedDateNum, selectedEvent, currentMonth]);

  // Today Banner status
  const nextImportantEvent = useMemo(() => {
    return allEvents.find(e => e.mainCategory === 'Exams' || e.mainCategory === 'Holiday') || allEvents[0];
  }, [allEvents]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* College Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPdf={() => setIsPdfModalOpen(true)}
        onDownloadPdf={handleDownloadPdf}
        totalEvents={allEvents.length}
      />

      {/* Month Navigation Strip */}
      <MonthSelector
        currentMonthIndex={currentMonthIndex}
        onSelectMonth={(idx) => setCurrentMonthIndex(idx)}
        onPrevMonth={() => setCurrentMonthIndex(i => Math.max(0, i - 1))}
        onNextMonth={() => setCurrentMonthIndex(i => Math.min(MONTHS_DATA.length - 1, i + 1))}
        onGoToToday={handleGoToToday}
      />

      {/* Main App Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Today Status Bar */}
        <div className="bg-gradient-to-r from-slate-900 to-xavier-navy text-white rounded-xl shadow-sm border border-slate-800 p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px] block">
                Today's Status:
              </span>
              <span className="font-bold text-white text-sm">
                No special event today.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/80 px-3.5 py-2 rounded-lg border border-slate-700/60 text-slate-200">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Next Major Event:</strong> {nextImportantEvent.title} ({nextImportantEvent.nepaliDate} {nextImportantEvent.nepaliMonth.split(' ')[0]})
            </span>
            <button
              onClick={() => handleSelectEvent(nextImportantEvent)}
              className="text-cyan-400 font-semibold hover:underline flex items-center gap-0.5 ml-1"
            >
              Details <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Global Search & Filter Bar */}
        <SearchFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedGrade={selectedGrade}
          onGradeChange={setSelectedGrade}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onClearAll={handleClearFilters}
          activeFilterCount={activeFilterCount}
        />

        {/* Tab View: Calendar View (Default) */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              
              {/* Monthly Interactive Calendar Grid (2 Cols Desktop) */}
              <div className="lg:col-span-2">
                <CalendarGrid
                  month={currentMonth}
                  onSelectDate={handleSelectDate}
                  onSelectEvent={handleSelectEvent}
                  selectedDay={selectedDateNum}
                  filteredEvents={filteredEventsForMonth}
                />
              </div>

              {/* Key Events Right Sidebar (1 Col Desktop) */}
              <div className="lg:col-span-1">
                <EventCardList
                  month={currentMonth}
                  events={filteredEventsForMonth}
                  onSelectEvent={handleSelectEvent}
                  selectedEventId={selectedEvent?.id}
                />
              </div>

            </div>

            {/* 9-Step Lifecycle Bar */}
            <ProcessBar />

            {/* Persistent Recurring Rules Section */}
            <RecurringRules />
          </div>
        )}

        {/* Tab View: Holidays & Vacations */}
        {activeTab === 'holidays' && (
          <HolidayView onSelectEvent={handleSelectEvent} />
        )}

        {/* Tab View: Exams Hub */}
        {activeTab === 'exams' && (
          <ExamView onSelectEvent={handleSelectEvent} />
        )}

      </main>

      {/* Date & Event Details Modal */}
      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        events={modalEvents}
        selectedDateNum={selectedDateNum || undefined}
        monthName={currentMonth.name}
      />

      {/* Original PDF Document Viewer Modal */}
      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        onDownload={handleDownloadPdf}
      />

      {/* Creator Credit Footer */}
      <Footer />

    </div>
  );
}
