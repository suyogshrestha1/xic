import React, { useState, useMemo } from 'react';
import { MONTHS_DATA, getAllEvents, getCurrentAcademicDate } from './data/calendarData';
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
import { Sparkles, Calendar as CalendarIcon, ChevronRight } from 'lucide-react';

export function App() {
  // Get today's academic date info (e.g. 3 Bhadra 2083 / Aug 19)
  const todayInfo = useMemo(() => getCurrentAcademicDate(), []);

  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(todayInfo.monthIndex);
  const [selectedDateNum, setSelectedDateNum] = useState<number | null>(todayInfo.day);

  const [activeTab, setActiveTab] = useState<ActiveTab>('calendar');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedGrade, setSelectedGrade] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('date-asc');

  // Modal State
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState<boolean>(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);

  const currentMonth = MONTHS_DATA[currentMonthIndex];
  const allEvents = useMemo(() => getAllEvents(), []);

  // Events for today's date
  const todayEvents = useMemo(() => {
    const month = MONTHS_DATA[todayInfo.monthIndex];
    if (!month) return [];
    return month.events.filter(e => {
      if (e.isMultiDay && e.nepaliDateEnd) {
        return todayInfo.day >= e.nepaliDate && todayInfo.day <= e.nepaliDateEnd;
      }
      return e.nepaliDate === todayInfo.day;
    });
  }, [todayInfo]);

  // Filter & Search Logic
  const filteredEventsForMonth = useMemo(() => {
    let result = currentMonth.events;

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

    if (selectedCategory !== 'All') {
      result = result.filter(ev => 
        ev.category === selectedCategory || 
        ev.mainCategory === selectedCategory
      );
    }

    if (selectedGrade !== 'All') {
      result = result.filter(ev => ev.grade === selectedGrade || ev.grade === 'General');
    }

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

  const activeFilterCount = (searchQuery ? 1 : 0) + (selectedCategory !== 'All' ? 1 : 0) + (selectedGrade !== 'All' ? 1 : 0);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedGrade('All');
    setSortBy('date-asc');
  };

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

  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setSelectedDateNum(event.nepaliDate);
    setCurrentMonthIndex(event.monthIndex);
    setIsEventModalOpen(true);
  };

  const handleGoToToday = () => {
    const t = getCurrentAcademicDate();
    setCurrentMonthIndex(t.monthIndex);
    setSelectedDateNum(t.day);
  };

  const handleDownloadPdf = () => {
    window.print();
  };

  const modalEvents = useMemo(() => {
    if (!selectedDateNum) return selectedEvent ? [selectedEvent] : [];
    return currentMonth.events.filter(e => {
      if (e.isMultiDay && e.nepaliDateEnd) {
        return selectedDateNum >= e.nepaliDate && selectedDateNum <= e.nepaliDateEnd;
      }
      return e.nepaliDate === selectedDateNum;
    });
  }, [selectedDateNum, selectedEvent, currentMonth]);

  const nextImportantEvent = useMemo(() => {
    return allEvents.find(e => 
      e.monthIndex > todayInfo.monthIndex || 
      (e.monthIndex === todayInfo.monthIndex && e.nepaliDate > todayInfo.day)
    ) || allEvents[0];
  }, [allEvents, todayInfo]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500 selection:text-white">
      
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPdf={() => setIsPdfModalOpen(true)}
        onDownloadPdf={handleDownloadPdf}
        totalEvents={allEvents.length}
      />

      <MonthSelector
        currentMonthIndex={currentMonthIndex}
        onSelectMonth={(idx) => setCurrentMonthIndex(idx)}
        onPrevMonth={() => setCurrentMonthIndex(i => Math.max(0, i - 1))}
        onNextMonth={() => setCurrentMonthIndex(i => Math.min(MONTHS_DATA.length - 1, i + 1))}
        onGoToToday={handleGoToToday}
      />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Today Status Bar */}
        <div className="bg-gradient-to-r from-slate-900 to-xavier-navy text-white rounded-xl shadow-sm border border-slate-800 p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 flex items-center justify-center font-bold shrink-0">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-cyan-400 font-bold uppercase tracking-wider text-[11px] block">
                Today's Date: {todayInfo.nepaliDateStr} ({todayInfo.gregorianDateStr})
              </span>
              <span className="font-semibold text-white text-sm">
                {todayEvents.length > 0
                  ? `Today's Event: ${todayEvents[0].title}`
                  : 'No special event today.'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/80 px-3.5 py-2 rounded-lg border border-slate-700/60 text-slate-200">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Next Upcoming Event:</strong> {nextImportantEvent.title} ({nextImportantEvent.nepaliDate} {nextImportantEvent.nepaliMonth.split(' ')[0]})
            </span>
            <button
              onClick={() => handleSelectEvent(nextImportantEvent)}
              className="text-cyan-400 font-semibold hover:underline flex items-center gap-0.5 ml-1"
            >
              Details <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

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

        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-2">
                <CalendarGrid
                  month={currentMonth}
                  onSelectDate={handleSelectDate}
                  onSelectEvent={handleSelectEvent}
                  selectedDay={selectedDateNum}
                  filteredEvents={filteredEventsForMonth}
                  todayMonthIndex={todayInfo.monthIndex}
                  todayDay={todayInfo.day}
                />
              </div>

              <div className="lg:col-span-1">
                <EventCardList
                  month={currentMonth}
                  events={filteredEventsForMonth}
                  onSelectEvent={handleSelectEvent}
                  selectedEventId={selectedEvent?.id}
                />
              </div>
            </div>

            <ProcessBar />
            <RecurringRules />
          </div>
        )}

        {activeTab === 'holidays' && (
          <HolidayView onSelectEvent={handleSelectEvent} />
        )}

        {activeTab === 'exams' && (
          <ExamView onSelectEvent={handleSelectEvent} />
        )}

      </main>

      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        events={modalEvents}
        selectedDateNum={selectedDateNum || undefined}
        monthName={currentMonth.name}
      />

      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        onDownload={handleDownloadPdf}
      />

      <Footer />

    </div>
  );
}
