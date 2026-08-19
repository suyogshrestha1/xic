export type MainCategory = 
  | 'Holiday' 
  | 'Class Day' 
  | 'Skill Day' 
  | 'Exams' 
  | 'Class Test Day';

export type SubCategory = 
  | 'Academic Review' 
  | 'Registration/Deadlines' 
  | 'Results/Parent Meetings' 
  | 'Awards' 
  | 'Practical Exams' 
  | 'Board Exams' 
  | 'Vacations' 
  | 'Workshops' 
  | 'Competitions'
  | 'Academic Events';

export type CategoryType = MainCategory | SubCategory;

export type GradeType = 'Grade XI' | 'Grade XII' | 'Science' | 'Management' | 'General';

export interface CalendarEvent {
  id: string;
  nepaliMonth: string;        // e.g. "Shrawan 2083"
  monthIndex: number;         // 0 to 9
  nepaliDate: number;         // start day number (1..31)
  nepaliDateEnd?: number;     // end day number if multi-day within same month
  nepaliMonthEnd?: string;    // if multi-day spans into next month (e.g., "Kartik 2083")
  gregorianDate: string;      // e.g., "Jul 17" or "Oct 15 – Nov 5"
  title: string;
  category: CategoryType;
  mainCategory: MainCategory; // Maps to one of the 5 core legends (Holiday, Class Day, Skill Day, Exams, Class Test Day)
  grade: GradeType;
  description: string;
  isMultiDay?: boolean;
}

export interface DayCell {
  nepaliDate: number;
  gregorianDate: string;
  dayOfWeek: number; // 0=SUN, 1=MON, 2=TUE, 3=WED, 4=THU, 5=FRI, 6=SAT
  isHoliday: boolean;
  events: CalendarEvent[];
}

export interface MonthData {
  name: string;              // "Shrawan 2083"
  index: number;             // 0..9
  year: number;              // 2083 or 2084
  gregorianRange: string;    // "Jul/Aug 2026"
  themeColor: 'teal' | 'gold' | 'slate' | 'maroon';
  hexColor: string;          // `#148078`, `#b38b4d`, `#7d8c9e`, `#a24857`
  badgeColor: string;
  totalDays: number;
  startDayOfWeek: number;    // 0=SUN..6=SAT
  gregorianStart: { month: string; day: number; year: number };
  events: CalendarEvent[];
}

export interface RecurringRule {
  id: string;
  title: string;
  frequency: string;
  description: string;
  tag?: string;
  iconName: string;
}

export type ActiveTab = 'calendar' | 'holidays' | 'exams' | 'pdfView';
