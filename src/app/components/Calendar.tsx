import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@mui/material';
import { Link } from 'react-router';
import { useState } from 'react';

const MONTHS = [
  { year: 2026, month: 8 },  // September 2026
  { year: 2026, month: 9 },  // October 2026
  { year: 2026, month: 10 }, // November 2026
  { year: 2026, month: 11 }, // December 2026
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// key: "YYYY-MM-DD", value: event label(s)
const EVENTS: Record<string, string[]> = {
  '2026-09-11': ['Project Introductions', 'Python + ML Workshop'],
  '2026-09-18': ['Group Formation', 'Social'],
  '2026-09-25': ['Speaker'],
  '2026-10-02': ['Social', 'Project Worktime'],
  '2026-10-09': ['Workshop'],
  '2026-10-16': ['Project Worktime', 'Social'],
  '2026-10-23': ['Midterm Presentations'],
  '2026-10-30': ['Workshop'],
  '2026-11-06': ['Hackathon', 'Project Worktime'],
  '2026-11-13': ['Speaker'],
  '2026-11-20': ['Workshop', 'Project Worktime'],
  '2026-12-04': ['Final Presentations'],
};

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function MonthGrid({ year, month }: { year: number; month: number }) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
      <div className="bg-red-600 px-6 py-4">
        <h3 className="text-xl text-white text-center">{MONTH_NAMES[month]} {year}</h3>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-7 mb-2">
          {DAY_NAMES.map(d => (
            <div key={d} className="text-center text-xs text-gray-400 font-medium py-1">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((day, i) => {
            const key = day ? `${year}-${pad(month + 1)}-${pad(day)}` : null;
            const events = key ? EVENTS[key] : null;
            return (
              <div
                key={i}
                className={`rounded-lg h-24 p-1 flex flex-col ${
                  day
                    ? events
                      ? 'border border-red-500/50 bg-red-900/20'
                      : 'border border-gray-700/50'
                    : ''
                }`}
              >
                {day && (
                  <>
                    <span className="text-xs font-medium text-gray-300 leading-none mb-1">{day}</span>
                    {events && (
                      <div className="flex flex-col gap-0.5 overflow-hidden">
                        {events.map((e, idx) => (
                          <span key={idx} className="text-red-300 leading-tight" style={{ fontSize: '9px' }}>
                            {e}
                          </span>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Calendar() {
  const [page, setPage] = useState(0);
  const monthsPerPage = 2;
  const totalPages = Math.ceil(MONTHS.length / monthsPerPage);
  const visible = MONTHS.slice(page * monthsPerPage, page * monthsPerPage + monthsPerPage);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-black text-white py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button
              variant="outlined"
              className="border-2 border-white text-white hover:bg-white/10"
              startIcon={<ArrowLeft />}
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl text-center mb-4 text-white">Calendar</h1>
          <p className="text-center text-gray-400 mb-16 text-lg">September – December 2026</p>

          {/* Month grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {visible.map(({ year, month }) => (
              <MonthGrid key={`${year}-${month}`} year={year} month={month} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === page ? 'bg-red-400 w-6' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-4">
            {(() => {
              const start = MONTHS[page * monthsPerPage];
              const endIdx = Math.min(page * monthsPerPage + monthsPerPage - 1, MONTHS.length - 1);
              const end = MONTHS[endIdx];
              if (start === end) return `${MONTH_NAMES[start.month]} ${start.year}`;
              return `${MONTH_NAMES[start.month]} ${start.year} – ${MONTH_NAMES[end.month]} ${end.year}`;
            })()}
          </p>
        </div>
      </section>
    </div>
  );
}
