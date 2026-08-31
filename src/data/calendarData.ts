import { MonthData, RecurringRule, CalendarEvent } from '../types/calendar';

export const RECURRING_RULES: RecurringRule[] = [
  {
    id: 'skill-sunday',
    title: 'Skill Sunday',
    frequency: 'Every Sunday',
    description: 'Every Sunday, students step away from textbooks for practical life skills — communication, financial literacy, first aid, AI and Technology — the things a syllabus rarely has room for.',
    tag: 'Skill Day',
    iconName: 'Sparkles'
  },
  {
    id: 'teachers-pd',
    title: 'Teachers PD Sessions',
    frequency: 'Every Sunday',
    description: 'Every Sunday, Teachers take part on departmental meetings, professional development, and the academic groundwork.',
    tag: 'Faculty',
    iconName: 'GraduationCap'
  },
  {
    id: 'homework-wrapup',
    title: 'Homework Wrap-Up Day',
    frequency: 'Every Friday',
    description: "Every Friday, the full last week's homework is submitted — a steady weekly rhythm so practice stays consistent instead of piling up before exams.",
    tag: 'Academic Rhythm',
    iconName: 'CheckSquare'
  },
  {
    id: 'three-day-test-rule',
    title: '3-Day Test Rule',
    frequency: 'Post-Unit Completion',
    description: 'Every unit test happens within 3 days of finishing that unit, with results and feedback back in 2 more — fast enough to actually help.',
    tag: 'Assessment',
    iconName: 'Clock'
  },
  {
    id: 'career-readiness',
    title: 'Career Readiness',
    frequency: '3 Days / Week',
    description: 'Three days a week, before class for the Day Shift and after class for the Morning Shift — Pre-Medical & Pre-Engineering Entrance Preparation (Science) and CMAT Preparation Classes, Grade XII (Management).',
    tag: 'Competitive Prep',
    iconName: 'Compass'
  }
];

export const PROCESS_STEPS = [
  { number: 1, title: 'Lesson Plan' },
  { number: 2, title: 'Homework & Practice' },
  { number: 3, title: 'Unit Test' },
  { number: 4, title: 'Class Test' },
  { number: 5, title: 'Terminal Exam' },
  { number: 6, title: 'Reflection' },
  { number: 7, title: 'Academic Support' },
  { number: 8, title: 'Final Exam' },
  { number: 9, title: 'Level of Success' },
];

export const MONTHS_DATA: MonthData[] = [
  // 1. SHRAWAN 2083
  {
    name: 'Shrawan 2083',
    index: 0,
    year: 2083,
    gregorianRange: 'Jul/Aug 2026',
    themeColor: 'teal',
    hexColor: '#148078',
    badgeColor: 'bg-teal-700 text-white',
    totalDays: 31,
    startDayOfWeek: 5, // Starts on Friday (Jul 17)
    gregorianStart: { month: 'Jul', day: 17, year: 2026 },
    events: [
      {
        id: 'shr-1',
        nepaliMonth: 'Shrawan 2083',
        monthIndex: 0,
        nepaliDate: 1,
        gregorianDate: 'Jul 17',
        title: 'Academic Review Day — Ashadh Report',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Academic managers formally review and report on Ashadh's teaching progress, attendance, and assessment records before the new month begins."
      },
      {
        id: 'shr-13',
        nepaliMonth: 'Shrawan 2083',
        monthIndex: 0,
        nepaliDate: 13,
        gregorianDate: 'Jul 29',
        title: 'Guru Purnima',
        category: 'Holiday',
        mainCategory: 'Holiday',
        grade: 'General',
        description: 'A traditional day of gratitude toward teachers and mentors, marked with respect, blessings, and reflection on the guru student bond.'
      },
      {
        id: 'shr-24',
        nepaliMonth: 'Shrawan 2083',
        monthIndex: 0,
        nepaliDate: 24,
        gregorianDate: 'Aug 9',
        title: 'Mock Test — Pre-Medical & Pre-Engineering Entrance',
        category: 'Exams',
        mainCategory: 'Exams',
        grade: 'Science',
        description: 'A practice entrance test for Science students preparing for medical and engineering admissions.'
      },
      {
        id: 'shr-29-1',
        nepaliMonth: 'Shrawan 2083',
        monthIndex: 0,
        nepaliDate: 29,
        gregorianDate: 'Aug 14',
        title: 'Project Proposal Day',
        category: 'Workshops',
        mainCategory: 'Skill Day',
        grade: 'General',
        description: 'Students present their initial project ideas to teachers, outlining objectives and approach — the first formal step of independent, research-driven learning.'
      },
      {
        id: 'shr-29-2',
        nepaliMonth: 'Shrawan 2083',
        monthIndex: 0,
        nepaliDate: 29,
        gregorianDate: 'Aug 14',
        title: 'Monthly Class Test Day',
        category: 'Class Test Day',
        mainCategory: 'Class Test Day',
        grade: 'General',
        description: "A short class test in every subject, giving teachers and students an early read on how well the month's lessons have landed."
      },
      {
        id: 'shr-29-3',
        nepaliMonth: 'Shrawan 2083',
        monthIndex: 0,
        nepaliDate: 29,
        gregorianDate: 'Aug 14',
        title: 'Teachers Report Day',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: 'Teachers compile and submit their academic report for Shrawan — syllabus coverage, assessments, and classroom remarks.'
      },
      {
        id: 'shr-31-1',
        nepaliMonth: 'Shrawan 2083',
        monthIndex: 0,
        nepaliDate: 31,
        gregorianDate: 'Aug 16',
        title: 'AI Prompting Workshop',
        category: 'Workshops',
        mainCategory: 'Skill Day',
        grade: 'General',
        description: 'A hands-on session teaching students to use AI tools responsibly — structuring prompts for research, writing, and productivity without shortcutting learning.'
      },
      {
        id: 'shr-31-2',
        nepaliMonth: 'Shrawan 2083',
        monthIndex: 0,
        nepaliDate: 31,
        gregorianDate: 'Aug 16',
        title: 'Academic Strategy Session',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Teachers chart Bhadra's direction — finalizing the unit test schedule, lesson plans, and homework calendar before the month starts."
      }
    ]
  },

  // 2. BHADRA 2083
  {
    name: 'Bhadra 2083',
    index: 1,
    year: 2083,
    gregorianRange: 'Aug/Sep 2026',
    themeColor: 'teal',
    hexColor: '#148078',
    badgeColor: 'bg-teal-700 text-white',
    totalDays: 31,
    startDayOfWeek: 1, // Starts on Monday (Aug 17)
    gregorianStart: { month: 'Aug', day: 17, year: 2026 },
    events: [
      {
        id: 'bhd-1',
        nepaliMonth: 'Bhadra 2083',
        monthIndex: 1,
        nepaliDate: 1,
        gregorianDate: 'Aug 17',
        title: 'NEB Registration Begins — Grade XI',
        category: 'Registration/Deadlines',
        mainCategory: 'Exams',
        grade: 'Grade XI',
        description: 'National Examinations Board registration opens for Grade XI and remains open through the submission deadline.'
      },
      {
        id: 'bhd-5',
        nepaliMonth: 'Bhadra 2083',
        monthIndex: 1,
        nepaliDate: 5,
        gregorianDate: 'Aug 21',
        title: 'Academic Review Day — Shrawan Report',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Academic managers formally review Shrawan's teaching, attendance, and assessment records, closing the loop on the month gone by."
      },
      {
        id: 'bhd-7',
        nepaliMonth: 'Bhadra 2083',
        monthIndex: 1,
        nepaliDate: 7,
        gregorianDate: 'Aug 23',
        title: 'Mental Health Awareness',
        category: 'Workshops',
        mainCategory: 'Skill Day',
        grade: 'General',
        description: 'Guided sessions on emotional wellbeing, stress management, and resilience — building a classroom culture where students feel safe to ask for support.'
      },
      {
        id: 'bhd-12',
        nepaliMonth: 'Bhadra 2083',
        monthIndex: 1,
        nepaliDate: 12,
        gregorianDate: 'Aug 28',
        title: 'Janai Purnima',
        category: 'Holiday',
        mainCategory: 'Holiday',
        grade: 'General',
        description: 'Sacred-thread festival, observed as a holiday.'
      },
      {
        id: 'bhd-14',
        nepaliMonth: 'Bhadra 2083',
        monthIndex: 1,
        nepaliDate: 14,
        gregorianDate: 'Aug 30',
        title: 'Summer Fest',
        category: 'Academic Events',
        mainCategory: 'Skill Day',
        grade: 'General',
        description: 'A campus-wide recreational event blending games, performances, and informal bonding — a lively, mid-term break from routine.'
      },
      {
        id: 'bhd-28',
        nepaliMonth: 'Bhadra 2083',
        monthIndex: 1,
        nepaliDate: 28,
        gregorianDate: 'Sep 13',
        title: 'Academic Strategy Session',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Teachers finalize Aswin's plan — unit test dates, lesson sequencing, and homework deadlines — ahead of the exam term."
      },
      {
        id: 'bhd-29',
        nepaliMonth: 'Bhadra 2083',
        monthIndex: 1,
        nepaliDate: 29,
        gregorianDate: 'Sep 14',
        title: 'Teej',
        category: 'Holiday',
        mainCategory: 'Holiday',
        grade: 'General',
        description: 'Hindu festival marked by traditional fasting and prayers to Shiva-Parvati for family well-being.'
      },
      {
        id: 'bhd-31-1',
        nepaliMonth: 'Bhadra 2083',
        monthIndex: 1,
        nepaliDate: 31,
        gregorianDate: 'Sep 16',
        title: 'Monthly Class Test Day',
        category: 'Class Test Day',
        mainCategory: 'Class Test Day',
        grade: 'General',
        description: "A short, all-subject class test to check how well the month's teaching has been absorbed before Aswin's terminal exams begin."
      },
      {
        id: 'bhd-31-2',
        nepaliMonth: 'Bhadra 2083',
        monthIndex: 1,
        nepaliDate: 31,
        gregorianDate: 'Sep 16',
        title: 'Teachers Report Day',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Teachers submit Bhadra's academic report — syllabus progress, test performance, and classroom observations — closing out the month."
      }
    ]
  },

  // 3. ASWIN 2083
  {
    name: 'Aswin 2083',
    index: 2,
    year: 2083,
    gregorianRange: 'Sep/Oct 2026',
    themeColor: 'gold',
    hexColor: '#b38b4d',
    badgeColor: 'bg-amber-700 text-white',
    totalDays: 31,
    startDayOfWeek: 4, // Starts on Thursday (Sep 17)
    gregorianStart: { month: 'Sep', day: 17, year: 2026 },
    events: [
      {
        id: 'asw-2',
        nepaliMonth: 'Aswin 2083',
        monthIndex: 2,
        nepaliDate: 2,
        gregorianDate: 'Sep 18',
        title: 'Academic Review Day — Bhadra Report',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Academic managers review and report on Bhadra's academic performance and classroom operations."
      },
      {
        id: 'asw-3',
        nepaliMonth: 'Aswin 2083',
        monthIndex: 2,
        nepaliDate: 3,
        gregorianDate: 'Sep 19',
        title: 'Constitutional Day',
        category: 'Holiday',
        mainCategory: 'Holiday',
        grade: 'General',
        description: "A national observance marking the promulgation of Nepal's constitution, honouring the democratic values and civic identity it enshrines."
      },
      {
        id: 'asw-4',
        nepaliMonth: 'Aswin 2083',
        monthIndex: 2,
        nepaliDate: 4,
        gregorianDate: 'Sep 20',
        title: 'Civic Duty Session',
        category: 'Workshops',
        mainCategory: 'Skill Day',
        grade: 'General',
        description: 'A session on legal literacy, rights, and citizenship — helping students understand consent, responsibility, and their place as informed citizens.'
      },
      {
        id: 'asw-11-1',
        nepaliMonth: 'Aswin 2083',
        monthIndex: 2,
        nepaliDate: 11,
        gregorianDate: 'Sep 27',
        title: 'E-Sports Carnival',
        category: 'Competitions',
        mainCategory: 'Skill Day',
        grade: 'General',
        description: 'An inter-house gaming and e-sports competition.'
      },
      {
        id: 'asw-11-lab',
        nepaliMonth: 'Aswin 2083',
        monthIndex: 2,
        nepaliDate: 11,
        nepaliDateEnd: 16,
        gregorianDate: 'Sep 27 – Oct 2',
        title: 'Lab File Submission Week',
        category: 'Registration/Deadlines',
        mainCategory: 'Exams',
        grade: 'General',
        isMultiDay: true,
        description: 'Students finalize and submit practical lab records for internal grading, ensuring every experiment is documented before terminal exams start.'
      },
      {
        id: 'asw-20-exam',
        nepaliMonth: 'Aswin 2083',
        monthIndex: 2,
        nepaliDate: 20,
        nepaliDateEnd: 28,
        gregorianDate: 'Oct 6 – Oct 14',
        title: 'First Terminal Examination',
        category: 'Exams',
        mainCategory: 'Exams',
        grade: 'General',
        isMultiDay: true,
        description: "The year's first major internal assessment, testing everything covered since the commencement of classes and setting the baseline for the rest of the year."
      },
      {
        id: 'asw-25',
        nepaliMonth: 'Aswin 2083',
        monthIndex: 2,
        nepaliDate: 25,
        gregorianDate: 'Oct 11',
        title: 'Academic Strategy Session',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Teachers plan Kartik's path — balancing post-Dashain catch-up, unit tests, and homework — even as exams are underway."
      },
      {
        id: 'asw-28',
        nepaliMonth: 'Aswin 2083',
        monthIndex: 2,
        nepaliDate: 28,
        gregorianDate: 'Oct 14',
        title: 'Teachers Report Day',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: 'Teachers close out Aswin with a report — exam invigilation, syllabus completion, and student performance trends.'
      },
      {
        id: 'asw-29-dashain',
        nepaliMonth: 'Aswin 2083',
        monthIndex: 2,
        nepaliDate: 29,
        nepaliDateEnd: 31,
        nepaliMonthEnd: 'Kartik 2083',
        gregorianDate: 'Oct 15 – Nov 5',
        title: 'Dashain Vacation',
        category: 'Vacations',
        mainCategory: 'Holiday',
        grade: 'General',
        isMultiDay: true,
        description: "Nepal's biggest festival — families reunite, tika is received from elders, and students take a well-earned break after the term's first exams."
      }
    ]
  },

  // 4. KARTIK 2083
  {
    name: 'Kartik 2083',
    index: 3,
    year: 2083,
    gregorianRange: 'Oct/Nov 2026',
    themeColor: 'slate',
    hexColor: '#7d8c9e',
    badgeColor: 'bg-slate-700 text-white',
    totalDays: 30,
    startDayOfWeek: 0, // Starts on Sunday (Oct 18)
    gregorianStart: { month: 'Oct', day: 18, year: 2026 },
    events: [
      {
        id: 'kar-1-dashain',
        nepaliMonth: 'Kartik 2083',
        monthIndex: 3,
        nepaliDate: 1,
        nepaliDateEnd: 8,
        gregorianDate: 'Oct 18 – Oct 25',
        title: 'Dashain Vacation (Continuation)',
        category: 'Vacations',
        mainCategory: 'Holiday',
        grade: 'General',
        isMultiDay: true,
        description: "Nepal's biggest festival — families reunite, tika is received from elders, and students take a well-earned break."
      },
      {
        id: 'kar-6',
        nepaliMonth: 'Kartik 2083',
        monthIndex: 3,
        nepaliDate: 6,
        gregorianDate: 'Oct 23',
        title: 'Academic Review Day — Aswin Report',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Academic managers review Aswin's First Terminal results and overall academic operations, even as Dashain break continues."
      },
      {
        id: 'kar-9',
        nepaliMonth: 'Kartik 2083',
        monthIndex: 3,
        nepaliDate: 9,
        gregorianDate: 'Oct 26',
        title: 'Classes Resume',
        category: 'Class Day',
        mainCategory: 'Class Day',
        grade: 'General',
        description: 'Classes restart after Dashain, with teachers easing students back into the syllabus before Tihar arrives.'
      },
      {
        id: 'kar-14',
        nepaliMonth: 'Kartik 2083',
        monthIndex: 3,
        nepaliDate: 14,
        gregorianDate: 'Oct 31',
        title: 'Term 1 Results & Parent Meet',
        category: 'Results/Parent Meetings',
        mainCategory: 'Exams',
        grade: 'General',
        description: 'First Terminal results are handed out, and parents meet teachers the same day to discuss performance and plan support together.'
      },
      {
        id: 'kar-15',
        nepaliMonth: 'Kartik 2083',
        monthIndex: 3,
        nepaliDate: 15,
        gregorianDate: 'Nov 1',
        title: 'STEM Idea Works',
        category: 'Workshops',
        mainCategory: 'Skill Day',
        grade: 'General',
        description: 'A hands-on innovation session where students turn early ideas into working prototypes and solutions using science and engineering thinking.'
      },
      {
        id: 'kar-22-tihar',
        nepaliMonth: 'Kartik 2083',
        monthIndex: 3,
        nepaliDate: 22,
        nepaliDateEnd: 29,
        gregorianDate: 'Nov 8 – Nov 15',
        title: 'Tihar Vacation',
        category: 'Vacations',
        mainCategory: 'Holiday',
        grade: 'General',
        isMultiDay: true,
        description: 'The festival of lights — homes are decorated, siblings honoured, and communities celebrate together during this well-loved break.'
      },
      {
        id: 'kar-29',
        nepaliMonth: 'Kartik 2083',
        monthIndex: 3,
        nepaliDate: 29,
        gregorianDate: 'Nov 15',
        title: 'Academic Strategy Session',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Teachers plan Mangsir's month — a return to full teaching rhythm after two festival breaks — setting tests, lessons, and homework in advance."
      },
      {
        id: 'kar-30-1',
        nepaliMonth: 'Kartik 2083',
        monthIndex: 3,
        nepaliDate: 30,
        gregorianDate: 'Nov 16',
        title: 'Classes Resume',
        category: 'Class Day',
        mainCategory: 'Class Day',
        grade: 'General',
        description: 'Students return from Tihar to a full academic schedule, with teachers realigning pace to make up for lost class time.'
      },
      {
        id: 'kar-30-2',
        nepaliMonth: 'Kartik 2083',
        monthIndex: 3,
        nepaliDate: 30,
        gregorianDate: 'Nov 16',
        title: 'Teachers Report Day',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: 'Teachers submit Kartik\'s report — a month split between festivals, results, and a fresh restart.'
      }
    ]
  },

  // 5. MANGSIR 2083
  {
    name: 'Mangsir 2083',
    index: 4,
    year: 2083,
    gregorianRange: 'Nov/Dec 2026',
    themeColor: 'teal',
    hexColor: '#148078',
    badgeColor: 'bg-teal-700 text-white',
    totalDays: 29,
    startDayOfWeek: 2, // Starts on Tuesday (Nov 17)
    gregorianStart: { month: 'Nov', day: 17, year: 2026 },
    events: [
      {
        id: 'mng-4',
        nepaliMonth: 'Mangsir 2083',
        monthIndex: 4,
        nepaliDate: 4,
        gregorianDate: 'Nov 20',
        title: 'Academic Review Day — Kartik Report',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Academic managers assess Kartik's disrupted-but-recovering academic rhythm and confirm the term is back on track."
      },
      {
        id: 'mng-6-1',
        nepaliMonth: 'Mangsir 2083',
        monthIndex: 4,
        nepaliDate: 6,
        gregorianDate: 'Nov 22',
        title: 'Digital Citizenship & AI Safety',
        category: 'Workshops',
        mainCategory: 'Skill Day',
        grade: 'General',
        description: 'Guidance on responsible, safe use of technology and AI — covering privacy, misinformation, and healthy digital habits for students.'
      },
      {
        id: 'mng-6-2',
        nepaliMonth: 'Mangsir 2083',
        monthIndex: 4,
        nepaliDate: 6,
        gregorianDate: 'Nov 22',
        title: 'Term 1 Award Distribution Day',
        category: 'Awards',
        mainCategory: 'Class Day',
        grade: 'General',
        description: 'Top-performing students from the First Terminal are recognized and awarded in front of their peers, celebrating effort and setting the bar for the term ahead.'
      },
      {
        id: 'mng-11-ximun',
        nepaliMonth: 'Mangsir 2083',
        monthIndex: 4,
        nepaliDate: 11,
        nepaliDateEnd: 13,
        gregorianDate: 'Nov 27 – Nov 29',
        title: 'XIMUN Model UN',
        category: 'Competitions',
        mainCategory: 'Skill Day',
        grade: 'General',
        isMultiDay: true,
        description: 'A three-day Model United Nations conference where students debate global issues, draft resolutions, and practice diplomacy and public speaking.'
      },
      {
        id: 'mng-20',
        nepaliMonth: 'Mangsir 2083',
        monthIndex: 4,
        nepaliDate: 20,
        gregorianDate: 'Dec 6',
        title: 'Research Skills Workshop',
        category: 'Workshops',
        mainCategory: 'Skill Day',
        grade: 'General',
        description: 'A workshop building structured research habits — framing questions, evaluating sources, and organizing findings for stronger assignments and projects.'
      },
      {
        id: 'mng-27-1',
        nepaliMonth: 'Mangsir 2083',
        monthIndex: 4,
        nepaliDate: 27,
        gregorianDate: 'Dec 13',
        title: 'Olympiads (Physics, Math and Chemistry)',
        category: 'Competitions',
        mainCategory: 'Skill Day',
        grade: 'Science',
        description: 'A single-day competitive event challenging students to solve advanced problems across physics, math and chemistry, beyond the standard classroom syllabus.'
      },
      {
        id: 'mng-27-2',
        nepaliMonth: 'Mangsir 2083',
        monthIndex: 4,
        nepaliDate: 27,
        gregorianDate: 'Dec 13',
        title: 'Academic Strategy Session',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Teachers finalize Poush's plan — a busy month with two rounds of exams and a long winter break to plan around."
      },
      {
        id: 'mng-29-1',
        nepaliMonth: 'Mangsir 2083',
        monthIndex: 4,
        nepaliDate: 29,
        gregorianDate: 'Dec 15',
        title: 'Monthly Class Test Day',
        category: 'Class Test Day',
        mainCategory: 'Class Test Day',
        grade: 'General',
        description: 'A short class test in every subject, a final check before the Second Terminal Examination begins next month.'
      },
      {
        id: 'mng-29-2',
        nepaliMonth: 'Mangsir 2083',
        monthIndex: 4,
        nepaliDate: 29,
        gregorianDate: 'Dec 15',
        title: 'Teachers Report Day',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: 'Teachers submit Mangsir\'s report — a full month of uninterrupted teaching, competitions, and skill-building events.'
      }
    ]
  },

  // 6. POUSH 2083
  {
    name: 'Poush 2083',
    index: 5,
    year: 2083,
    gregorianRange: 'Dec 2026/Jan 2027',
    themeColor: 'gold',
    hexColor: '#b38b4d',
    badgeColor: 'bg-amber-700 text-white',
    totalDays: 30,
    startDayOfWeek: 3, // Starts on Wednesday (Dec 16)
    gregorianStart: { month: 'Dec', day: 16, year: 2026 },
    events: [
      {
        id: 'psh-3',
        nepaliMonth: 'Poush 2083',
        monthIndex: 5,
        nepaliDate: 3,
        gregorianDate: 'Dec 18',
        title: 'Academic Review Day — Mangsir Report',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Academic managers review Mangsir's full month of classes, workshops, and competitions."
      },
      {
        id: 'psh-5',
        nepaliMonth: 'Poush 2083',
        monthIndex: 5,
        nepaliDate: 5,
        gregorianDate: 'Dec 20',
        title: 'RTX — Rising Talent of Xavier',
        category: 'Competitions',
        mainCategory: 'Skill Day',
        grade: 'General',
        description: 'A talent hunt open to every student — singing, dancing, art, and other hidden talents take the stage in the quest to find Xavier\'s rising stars.'
      },
      {
        id: 'psh-6-lab',
        nepaliMonth: 'Poush 2083',
        monthIndex: 5,
        nepaliDate: 6,
        nepaliDateEnd: 10,
        gregorianDate: 'Dec 21 – Dec 25',
        title: 'Lab File Submission Week',
        category: 'Registration/Deadlines',
        mainCategory: 'Exams',
        grade: 'General',
        isMultiDay: true,
        description: "Final practical lab records are submitted ahead of the Second Terminal Examination, closing out the term's laboratory work."
      },
      {
        id: 'psh-10',
        nepaliMonth: 'Poush 2083',
        monthIndex: 5,
        nepaliDate: 10,
        gregorianDate: 'Dec 25',
        title: 'Christmas Celebration',
        category: 'Holiday',
        mainCategory: 'Holiday',
        grade: 'General',
        description: 'A festive celebration open to all, combined with student-led club activities promoting inclusivity and community spirit.'
      },
      {
        id: 'psh-12',
        nepaliMonth: 'Poush 2083',
        monthIndex: 5,
        nepaliDate: 12,
        gregorianDate: 'Dec 27',
        title: 'Climate Resilience & Green Entrepreneurship',
        category: 'Workshops',
        mainCategory: 'Skill Day',
        grade: 'General',
        description: 'A session exploring sustainability, climate awareness, and green business ideas — encouraging students to think like responsible innovators.'
      },
      {
        id: 'psh-15-neb',
        nepaliMonth: 'Poush 2083',
        monthIndex: 5,
        nepaliDate: 15,
        gregorianDate: 'Dec 30',
        title: 'NEB Exam Form Registration Begins — Grade XII',
        category: 'Registration/Deadlines',
        mainCategory: 'Exams',
        grade: 'Grade XII',
        description: 'National Examinations Board exam form registration opens for Grade XII and remains open through the submission deadline.'
      },
      {
        id: 'psh-15-exam',
        nepaliMonth: 'Poush 2083',
        monthIndex: 5,
        nepaliDate: 15,
        nepaliDateEnd: 24,
        gregorianDate: 'Dec 30 – Jan 8',
        title: 'Second Terminal Examination',
        category: 'Exams',
        mainCategory: 'Exams',
        grade: 'General',
        isMultiDay: true,
        description: "The year's mid-point assessment, testing the syllabus covered since Aswin and shaping each student's revision priorities going forward."
      },
      {
        id: 'psh-24',
        nepaliMonth: 'Poush 2083',
        monthIndex: 5,
        nepaliDate: 24,
        gregorianDate: 'Jan 8',
        title: 'Teachers Report Day',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Teachers submit Poush's report right after the Second Terminal Examination — results, coverage, and classroom notes."
      },
      {
        id: 'psh-26-strat',
        nepaliMonth: 'Poush 2083',
        monthIndex: 5,
        nepaliDate: 26,
        gregorianDate: 'Jan 10',
        title: 'Academic Strategy Session',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Teachers plan Magh's comeback from Winter Vacation — sequencing revision, new topics, and upcoming events."
      },
      {
        id: 'psh-26-vac',
        nepaliMonth: 'Poush 2083',
        monthIndex: 5,
        nepaliDate: 26,
        nepaliDateEnd: 30,
        gregorianDate: 'Jan 10 – Jan 14',
        title: 'Winter Vacation',
        category: 'Vacations',
        mainCategory: 'Holiday',
        grade: 'General',
        isMultiDay: true,
        description: "A seasonal break for rest and reflection, giving students time to recharge before the year's final academic stretch begins."
      }
    ]
  },

  // 7. MAGH 2083
  {
    name: 'Magh 2083',
    index: 6,
    year: 2083,
    gregorianRange: 'Jan/Feb 2027',
    themeColor: 'teal',
    hexColor: '#148078',
    badgeColor: 'bg-teal-700 text-white',
    totalDays: 29,
    startDayOfWeek: 5, // Starts on Friday (Jan 15)
    gregorianStart: { month: 'Jan', day: 15, year: 2027 },
    events: [
      {
        id: 'mgh-1',
        nepaliMonth: 'Magh 2083',
        monthIndex: 6,
        nepaliDate: 1,
        gregorianDate: 'Jan 15',
        title: 'Academic Review Day — Poush Report',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Academic managers assess Poush's Second Terminal results and overall academic performance."
      },
      {
        id: 'mgh-4',
        nepaliMonth: 'Magh 2083',
        monthIndex: 6,
        nepaliDate: 4,
        gregorianDate: 'Jan 18',
        title: 'Classes Resume',
        category: 'Class Day',
        mainCategory: 'Class Day',
        grade: 'General',
        description: 'Classes restart after Winter Vacation, with teachers shifting focus toward revision and more advanced topics.'
      },
      {
        id: 'mgh-8-bb',
        nepaliMonth: 'Magh 2083',
        monthIndex: 6,
        nepaliDate: 8,
        nepaliDateEnd: 11,
        gregorianDate: 'Jan 22 – Jan 25',
        title: 'XIU19 — Xavier International Under-19 Basketball Championship',
        category: 'Competitions',
        mainCategory: 'Skill Day',
        grade: 'General',
        isMultiDay: true,
        description: 'An under-19 basketball championship featuring international teams and teams from across Nepal.'
      },
      {
        id: 'mgh-10',
        nepaliMonth: 'Magh 2083',
        monthIndex: 6,
        nepaliDate: 10,
        gregorianDate: 'Jan 24',
        title: 'Presentation Competition',
        category: 'Competitions',
        mainCategory: 'Skill Day',
        grade: 'General',
        description: 'Students formally present research, projects, or ideas to an audience — building confidence, structure, and public-speaking skill.'
      },
      {
        id: 'mgh-16',
        nepaliMonth: 'Magh 2083',
        monthIndex: 6,
        nepaliDate: 16,
        gregorianDate: 'Jan 30',
        title: 'Term 2 Results & Parent Meet',
        category: 'Results/Parent Meetings',
        mainCategory: 'Exams',
        grade: 'General',
        description: 'Second Terminal results are shared, with parents and teachers meeting the same day to review progress and plan next steps.'
      },
      {
        id: 'mgh-22',
        nepaliMonth: 'Magh 2083',
        monthIndex: 6,
        nepaliDate: 22,
        gregorianDate: 'Feb 5',
        title: 'Xavier Level Up Expo',
        category: 'Academic Events',
        mainCategory: 'Skill Day',
        grade: 'General',
        description: 'A showcase of student innovation across Science, IT, and Management — a chance to exhibit real projects to the wider community.'
      },
      {
        id: 'mgh-24-1',
        nepaliMonth: 'Magh 2083',
        monthIndex: 6,
        nepaliDate: 24,
        gregorianDate: 'Feb 7',
        title: 'Academic Strategy Session',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Teachers finalize Falgun's plan — a demanding month with course completion, another parent meeting, and pre-boards ahead."
      },
      {
        id: 'mgh-24-2',
        nepaliMonth: 'Magh 2083',
        monthIndex: 6,
        nepaliDate: 24,
        gregorianDate: 'Feb 7',
        title: 'Term 2 Award Distribution Day',
        category: 'Awards',
        mainCategory: 'Class Day',
        grade: 'General',
        description: 'Top-performing students from the Second Terminal are recognized and awarded in front of their peers, celebrating effort and setting the bar for the term ahead.'
      },
      {
        id: 'mgh-28',
        nepaliMonth: 'Magh 2083',
        monthIndex: 6,
        nepaliDate: 28,
        gregorianDate: 'Feb 11',
        title: 'Saraswati Pooja',
        category: 'Holiday',
        mainCategory: 'Holiday',
        grade: 'General',
        description: 'A celebration honouring the goddess of knowledge and learning, marked with prayers, music, and blessings for academic success.'
      },
      {
        id: 'mgh-29-1',
        nepaliMonth: 'Magh 2083',
        monthIndex: 6,
        nepaliDate: 29,
        gregorianDate: 'Feb 12',
        title: 'Monthly Class Test Day',
        category: 'Class Test Day',
        mainCategory: 'Class Test Day',
        grade: 'General',
        description: 'A short class test in every subject, rounding off Magh before the final stretch toward pre-boards begins.'
      },
      {
        id: 'mgh-29-2',
        nepaliMonth: 'Magh 2083',
        monthIndex: 6,
        nepaliDate: 29,
        gregorianDate: 'Feb 12',
        title: 'Teachers Report Day',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Teachers submit Magh's report — a strong month of results, showcases, and competitions — as the year heads into its final phase."
      }
    ]
  },

  // 8. FALGUN 2083
  {
    name: 'Falgun 2083',
    index: 7,
    year: 2083,
    gregorianRange: 'Feb/Mar 2027',
    themeColor: 'gold',
    hexColor: '#b38b4d',
    badgeColor: 'bg-amber-700 text-white',
    totalDays: 30,
    startDayOfWeek: 6, // Starts on Saturday (Feb 13)
    gregorianStart: { month: 'Feb', day: 13, year: 2027 },
    events: [
      {
        id: 'flg-7-1',
        nepaliMonth: 'Falgun 2083',
        monthIndex: 7,
        nepaliDate: 7,
        gregorianDate: 'Feb 19',
        title: 'Academic Review Day — Magh Report',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Academic managers assess Magh's Second Terminal follow-through and the month's heavy events calendar."
      },
      {
        id: 'flg-7-oly',
        nepaliMonth: 'Falgun 2083',
        monthIndex: 7,
        nepaliDate: 7,
        nepaliDateEnd: 9,
        gregorianDate: 'Feb 19 – Feb 21',
        title: 'Xavier Olympics',
        category: 'Competitions',
        mainCategory: 'Skill Day',
        grade: 'General',
        isMultiDay: true,
        description: 'A three-day multi-sport tournament building fitness, teamwork, and school spirit through friendly inter-house competition.'
      },
      {
        id: 'flg-16',
        nepaliMonth: 'Falgun 2083',
        monthIndex: 7,
        nepaliDate: 16,
        gregorianDate: 'Feb 28',
        title: 'Gig Economy & Side-Hustle Safety',
        category: 'Workshops',
        mainCategory: 'Skill Day',
        grade: 'General',
        description: 'An awareness session on modern earning opportunities and their risks — helping students build safe, informed financial habits early.'
      },
      {
        id: 'flg-20',
        nepaliMonth: 'Falgun 2083',
        monthIndex: 7,
        nepaliDate: 20,
        gregorianDate: 'Mar 4',
        title: 'Mahashivratri Celebration',
        category: 'Academic Events',
        mainCategory: 'Holiday',
        grade: 'General',
        description: 'A cultural celebration ahead of Mahashivratri.'
      },
      {
        id: 'flg-21',
        nepaliMonth: 'Falgun 2083',
        monthIndex: 7,
        nepaliDate: 21,
        gregorianDate: 'Mar 5',
        title: 'Grade XII Course Completion',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'Grade XII',
        description: "Grade XII's syllabus is formally complete — marking the shift from new content to focused, structured revision for boards."
      },
      {
        id: 'flg-22',
        nepaliMonth: 'Falgun 2083',
        monthIndex: 7,
        nepaliDate: 22,
        gregorianDate: 'Mar 6',
        title: 'Mahashivratri',
        category: 'Holiday',
        mainCategory: 'Holiday',
        grade: 'General',
        description: 'Religious holiday observing Mahashivratri.'
      },
      {
        id: 'flg-23-lab',
        nepaliMonth: 'Falgun 2083',
        monthIndex: 7,
        nepaliDate: 23,
        nepaliDateEnd: 28,
        gregorianDate: 'Mar 7 – Mar 12',
        title: 'Lab File Submission',
        category: 'Registration/Deadlines',
        mainCategory: 'Exams',
        grade: 'General',
        isMultiDay: true,
        description: "Final practical records are submitted ahead of board-related assessments, ensuring every subject's lab work is complete and evaluated."
      },
      {
        id: 'flg-28',
        nepaliMonth: 'Falgun 2083',
        monthIndex: 7,
        nepaliDate: 28,
        gregorianDate: 'Mar 12',
        title: 'Teachers Report Day',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Teachers submit Falgun's report just as pre-board exams begin — a critical checkpoint before the final academic push."
      },
      {
        id: 'flg-30-strat',
        nepaliMonth: 'Falgun 2083',
        monthIndex: 7,
        nepaliDate: 30,
        gregorianDate: 'Mar 14',
        title: 'Academic Strategy Session',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Teachers plan Chaitra's path through the tail end of pre-boards, board practicals, and Grade XI's return to class."
      },
      {
        id: 'flg-30-preboard',
        nepaliMonth: 'Falgun 2083',
        monthIndex: 7,
        nepaliDate: 30,
        nepaliDateEnd: 30,
        nepaliMonthEnd: 'Chaitra 2083',
        gregorianDate: 'Mar 14 – Mar 24',
        title: 'Term 3 / Pre-Board Exam Begins',
        category: 'Exams',
        mainCategory: 'Exams',
        grade: 'General',
        isMultiDay: true,
        description: 'The final internal exam before boards — a Pre-Board for Grade XII and Third Terminal for Grade XI — running into Chaitra.'
      }
    ]
  },

  // 9. CHAITRA 2083
  {
    name: 'Chaitra 2083',
    index: 8,
    year: 2083,
    gregorianRange: 'Mar/Apr 2027',
    themeColor: 'gold',
    hexColor: '#b38b4d',
    badgeColor: 'bg-amber-700 text-white',
    totalDays: 30,
    startDayOfWeek: 1, // Starts on Monday (Mar 15)
    gregorianStart: { month: 'Mar', day: 15, year: 2027 },
    events: [
      {
        id: 'chr-1-preboard',
        nepaliMonth: 'Chaitra 2083',
        monthIndex: 8,
        nepaliDate: 1,
        nepaliDateEnd: 10,
        gregorianDate: 'Mar 15 – Mar 24',
        title: 'Term 3 / Pre-Board Exam (Continuation)',
        category: 'Exams',
        mainCategory: 'Exams',
        grade: 'General',
        isMultiDay: true,
        description: 'The final internal exam before boards — a Pre-Board for Grade XII and Third Terminal for Grade XI.'
      },
      {
        id: 'chr-5',
        nepaliMonth: 'Chaitra 2083',
        monthIndex: 8,
        nepaliDate: 5,
        gregorianDate: 'Mar 19',
        title: 'Academic Review Day — Falgun Report',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Academic managers review Falgun's course completions and the start of pre-board examinations."
      },
      {
        id: 'chr-7',
        nepaliMonth: 'Chaitra 2083',
        monthIndex: 8,
        nepaliDate: 7,
        gregorianDate: 'Mar 21',
        title: 'Holi',
        category: 'Holiday',
        mainCategory: 'Holiday',
        grade: 'General',
        description: 'Festival of colors holiday.'
      },
      {
        id: 'chr-11',
        nepaliMonth: 'Chaitra 2083',
        monthIndex: 8,
        nepaliDate: 11,
        gregorianDate: 'Mar 25',
        title: 'Grade XI Classes Resume',
        category: 'Class Day',
        mainCategory: 'Class Day',
        grade: 'Grade XI',
        description: 'Grade XI returns to regular classes after their Third Terminal Examination, shifting focus to revision and consolidation.'
      },
      {
        id: 'chr-14',
        nepaliMonth: 'Chaitra 2083',
        monthIndex: 8,
        nepaliDate: 14,
        gregorianDate: 'Mar 28',
        title: 'Excursion Day (Grade XI)',
        category: 'Academic Events',
        mainCategory: 'Skill Day',
        grade: 'Grade XI',
        description: 'A field visit for Grade XI connecting classroom learning to real industries and workplaces, giving students hands-on exposure beyond textbooks.'
      },
      {
        id: 'chr-16-prac',
        nepaliMonth: 'Chaitra 2083',
        monthIndex: 8,
        nepaliDate: 16,
        nepaliDateEnd: 19,
        gregorianDate: 'Mar 30 – Apr 2',
        title: 'Grade XII Board Practicals',
        category: 'Practical Exams',
        mainCategory: 'Exams',
        grade: 'Grade XII',
        isMultiDay: true,
        description: 'Official practical examinations conducted by the board, assessing hands-on skills and lab competence ahead of theory papers.'
      },
      {
        id: 'chr-20',
        nepaliMonth: 'Chaitra 2083',
        monthIndex: 8,
        nepaliDate: 20,
        gregorianDate: 'Apr 3',
        title: 'Term 3 Results & Parent Meet',
        category: 'Results/Parent Meetings',
        mainCategory: 'Exams',
        grade: 'General',
        description: 'Final internal results are shared, with parents and teachers meeting the same day for one last review before board exams begin.'
      },
      {
        id: 'chr-28-1',
        nepaliMonth: 'Chaitra 2083',
        monthIndex: 8,
        nepaliDate: 28,
        gregorianDate: 'Apr 11',
        title: 'Academic Strategy Session',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Teachers plan Baisakh's path — a month defined almost entirely by board examinations for both grades."
      },
      {
        id: 'chr-28-2',
        nepaliMonth: 'Chaitra 2083',
        monthIndex: 8,
        nepaliDate: 28,
        gregorianDate: 'Apr 11',
        title: 'Term 3 Award Distribution Day',
        category: 'Awards',
        mainCategory: 'Class Day',
        grade: 'General',
        description: 'Top-performing students from the Third Terminal are recognized and awarded in front of their peers, celebrating a year of effort before board exams begin.'
      },
      {
        id: 'chr-30',
        nepaliMonth: 'Chaitra 2083',
        monthIndex: 8,
        nepaliDate: 30,
        gregorianDate: 'Apr 13',
        title: 'Teachers Report Day',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Teachers submit Chaitra's report, marking the close of regular academic activity before the board exam season takes over."
      }
    ]
  },

  // 10. BAISAKH 2084
  {
    name: 'Baisakh 2084',
    index: 9,
    year: 2084,
    gregorianRange: 'Apr/May 2027',
    themeColor: 'maroon',
    hexColor: '#a24857',
    badgeColor: 'bg-rose-800 text-white',
    totalDays: 31,
    startDayOfWeek: 3, // Starts on Wednesday (Apr 14)
    gregorianStart: { month: 'Apr', day: 14, year: 2027 },
    events: [
      {
        id: 'bsk-1',
        nepaliMonth: 'Baisakh 2084',
        monthIndex: 9,
        nepaliDate: 1,
        gregorianDate: 'Apr 14',
        title: 'Nepali New Year',
        category: 'Holiday',
        mainCategory: 'Holiday',
        grade: 'General',
        description: 'Marks the start of the new Bikram Sambat year.'
      },
      {
        id: 'bsk-3',
        nepaliMonth: 'Baisakh 2084',
        monthIndex: 9,
        nepaliDate: 3,
        gregorianDate: 'Apr 16',
        title: 'Academic Review Day — Chaitra Report',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: "Academic managers review Chaitra's final preparations and confirm readiness for the board examinations ahead."
      },
      {
        id: 'bsk-10',
        nepaliMonth: 'Baisakh 2084',
        monthIndex: 9,
        nepaliDate: 10,
        gregorianDate: 'Apr 23',
        title: 'Grade XI Course Completion',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'Grade XI',
        description: "Grade XI's syllabus is formally complete, marking their transition into focused board exam preparation."
      },
      {
        id: 'bsk-13',
        nepaliMonth: 'Baisakh 2084',
        monthIndex: 9,
        nepaliDate: 13,
        gregorianDate: 'Apr 26',
        title: 'Grade XII Board Exam Begins',
        category: 'Board Exams',
        mainCategory: 'Exams',
        grade: 'Grade XII',
        description: 'The Grade XII board examinations begin — the culmination of two years of academic preparation and effort.'
      },
      {
        id: 'bsk-15',
        nepaliMonth: 'Baisakh 2084',
        monthIndex: 9,
        nepaliDate: 15,
        gregorianDate: 'Apr 28',
        title: 'Grade XI Board Exam Begins',
        category: 'Board Exams',
        mainCategory: 'Exams',
        grade: 'Grade XI',
        description: "The Grade XI board examinations begin, testing a full year's worth of learning under official board conditions."
      },
      {
        id: 'bsk-26',
        nepaliMonth: 'Baisakh 2084',
        monthIndex: 9,
        nepaliDate: 26,
        gregorianDate: 'May 9',
        title: 'Academic Strategy Session',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: 'Teachers look ahead to the new academic year, laying groundwork even as board exams for both grades are underway.'
      },
      {
        id: 'bsk-28-prac',
        nepaliMonth: 'Baisakh 2084',
        monthIndex: 9,
        nepaliDate: 28,
        nepaliDateEnd: 31,
        gregorianDate: 'May 11 – May 14',
        title: 'Grade XI Board Practicals',
        category: 'Practical Exams',
        mainCategory: 'Exams',
        grade: 'Grade XI',
        isMultiDay: true,
        description: 'Official practical examinations for Grade XI, assessing applied skills and lab competence as the board exam season closes.'
      },
      {
        id: 'bsk-31',
        nepaliMonth: 'Baisakh 2084',
        monthIndex: 9,
        nepaliDate: 31,
        gregorianDate: 'May 14',
        title: 'Teachers Report Day',
        category: 'Academic Review',
        mainCategory: 'Class Day',
        grade: 'General',
        description: 'Teachers submit the final report of the academic year, closing the loop on twelve months of teaching, testing, and growth.'
      }
    ]
  }
];

// Helper functions for date calculations
export function getGregorianForNepaliDate(monthIndex: number, nepaliDate: number): string {
  const month = MONTHS_DATA[monthIndex];
  if (!month) return '';

  const { month: gMonth, day: gDay, year: gYear } = month.gregorianStart;
  const monthLengthMap: { [key: string]: number } = {
    Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31, Jan: 31, Feb: 28, Mar: 31, Apr: 30, May: 31
  };

  const dayOffset = nepaliDate - 1;
  let currentDay = gDay + dayOffset;
  let currentMonthStr = gMonth;
  let currentYear = gYear;

  const monthOrder = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
  let currentMonthIdx = monthOrder.indexOf(gMonth);

  while (currentMonthIdx < monthOrder.length && currentDay > (monthLengthMap[currentMonthStr] || 30)) {
    currentDay -= monthLengthMap[currentMonthStr] || 30;
    currentMonthIdx++;
    if (currentMonthIdx < monthOrder.length) {
      currentMonthStr = monthOrder[currentMonthIdx];
      if (currentMonthStr === 'Jan') currentYear++;
    }
  }

  return `${currentMonthStr} ${currentDay}`;
}

export function getAllEvents(): CalendarEvent[] {
  return MONTHS_DATA.flatMap(m => m.events);
}

export function getCurrentAcademicDate(): { monthIndex: number; day: number; nepaliDateStr: string; gregorianDateStr: string } {
  const now = new Date();
  
  const jsMonthMap: { [key: string]: number } = {
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11, Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4
  };

  for (let i = 0; i < MONTHS_DATA.length; i++) {
    const mData = MONTHS_DATA[i];
    const { month: gMonthStr, day: gDay, year: gYear } = mData.gregorianStart;
    const jsMonth = jsMonthMap[gMonthStr];
    
    if (jsMonth !== undefined) {
      const startDate = new Date(gYear, jsMonth, gDay);
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + mData.totalDays - 1);

      if (now >= startDate && now <= endDate) {
        const diffDays = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
        const dayNum = diffDays + 1;
        const gregorianStr = getGregorianForNepaliDate(i, dayNum);
        return {
          monthIndex: i,
          day: dayNum,
          nepaliDateStr: `${dayNum} ${mData.name}`,
          gregorianDateStr: gregorianStr
        };
      }
    }
  }

  // Default to today's date: 3 Bhadra 2083 (Aug 19)
  return {
    monthIndex: 1,
    day: 3,
    nepaliDateStr: '3 Bhadra 2083',
    gregorianDateStr: 'Aug 19'
  };
}
