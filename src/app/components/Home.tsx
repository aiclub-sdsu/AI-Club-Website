import {
  MapPin,
  Users,
  BookOpen,
  Code,
  Mic,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { Button } from '@mui/material';
import { Link } from 'react-router';
import { useState, useEffect, useCallback } from 'react';

import workshop1 from '../../imports/Screenshot_2026-05-22_at_11.30.39_PM.png';
import workshop3 from '../../imports/Screenshot_2026-05-22_at_11.25.50_PM.png';
import seminar from '../../imports/Screenshot_2026-05-22_at_11.25.12_PM.png';
import competition from '../../imports/Screenshot_2026-05-22_at_11.21.27_PM.png';
import logo from '../../imports/Screenshot_2026-05-22_at_11.59.43_PM.png';
import aiSubdomains from '../../imports/ai-subdomains.jpg';

import collage1 from '../../imports/Screenshot_2026-06-14_at_4.34.06_PM.png';
import collage2 from '../../imports/Screenshot_2026-06-14_at_4.35.16_PM.png';
import collage3 from '../../imports/Screenshot_2026-06-14_at_4.39.07_PM.png';
import collage4 from '../../imports/Screenshot_2026-06-14_at_4.44.25_PM.png';
import collage5 from '../../imports/Screenshot_2026-06-14_at_4.46.22_PM.png';
import collage6 from '../../imports/Screenshot_2026-06-14_at_4.47.10_PM.png';
import collage7 from '../../imports/Screenshot_2026-06-14_at_4.56.36_PM.png';
import collage8 from '../../imports/Screenshot_2026-06-14_at_4.57.36_PM.png';
import collage9 from '../../imports/Screenshot_2026-06-14_at_4.58.08_PM.png';
import collage10 from '../../imports/Screenshot_2026-06-14_at_5.02.01_PM.png';
import collage11 from '../../imports/Screenshot_2026-06-14_at_5.04.34_PM.png';
import collage12 from '../../imports/Screenshot_2026-06-14_at_5.06.37_PM.png';
import collage13 from '../../imports/Screenshot_2026-06-14_at_5.07.47_PM.png';
import collage14 from '../../imports/Screenshot_2026-06-14_at_5.09.24_PM.png';
import collage15 from '../../imports/Screenshot_2026-06-14_at_5.11.13_PM.png';
import collage16 from '../../imports/Screenshot_2026-06-14_at_5.12.35_PM.png';
import collage17 from '../../imports/Screenshot_2026-06-14_at_5.14.01_PM.png';
import collage18 from '../../imports/Screenshot_2026-06-14_at_5.15.45_PM.png';
import collage19 from '../../imports/Screenshot_2026-06-14_at_5.17.14_PM.png';
import collage20 from '../../imports/Screenshot_2026-06-14_at_4.39.40_PM.png';
import collage21 from '../../imports/Screenshot_2026-06-14_at_4.40.40_PM.png';
import collage22 from '../../imports/Screenshot_2026-06-14_at_4.41.58_PM.png';
import collage23 from '../../imports/Screenshot_2026-06-14_at_4.43.54_PM.png';
import collage24 from '../../imports/Screenshot_2026-06-14_at_4.48.58_PM.png';
import collage25 from '../../imports/Screenshot_2026-06-14_at_4.52.05_PM.png';
import collage26 from '../../imports/Screenshot_2026-06-14_at_4.54.45_PM.png';
import collage27 from '../../imports/Screenshot_2026-06-14_at_4.55.31_PM.png';

const slideshowPhotos = [
  collage1,
  collage2,
  collage3,
  collage4,
  collage5,
  collage6,
  collage7,
  collage8,
  collage9,
  collage10,
  collage11,
  collage12,
  collage13,
  collage14,
  collage15,
  collage16,
  collage17,
  collage18,
  collage19,
  collage20,
  collage21,
  collage22,
  collage23,
  collage24,
  collage25,
  collage26,
  collage27,
];

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

const MONTH_NAMES = [
  'September',
  'October',
  'November',
  'December',
];

const MONTH_INDEXES = [8, 9, 10, 11];

const DAY_NAMES = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Calendar:
  // 0 = September
  // 1 = October
  // 2 = November
  // 3 = December
  const [calendarMonth, setCalendarMonth] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev + 1) % slideshowPhotos.length
    );
  }, []);

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + slideshowPhotos.length) %
        slideshowPhotos.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  const monthIndex = MONTH_INDEXES[calendarMonth];
  const calendarYear = 2026;

  const firstDay = new Date(
    calendarYear,
    monthIndex,
    1
  ).getDay();

  const daysInMonth = new Date(
    calendarYear,
    monthIndex + 1,
    0
  ).getDate();

  const calendarCells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from(
      { length: daysInMonth },
      (_, i) => i + 1
    ),
  ];

  while (calendarCells.length % 7 !== 0) {
    calendarCells.push(null);
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="bg-black text-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src={logo}
              alt="SDSU AI Club Logo"
              className="w-96 h-auto"
            />
          </div>

          <p className="text-2xl text-red-400 mb-16">
            Since 2017
          </p>

          {/* WHO WE ARE */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">

            <h2 className="text-3xl mb-6 text-red-400">
              Who We Are
            </h2>

            <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8">
              The AI Club at SDSU brings together innovative and
              motivated students to learn about artificial
              intelligence, machine learning, and data science in a
              collaborative environment. Join us for workshops,
              conferences, competitions, and project development!
            </p>

            {/* PHOTO SLIDESHOW */}
            <div className="max-w-3xl mx-auto relative group">

              <div className="rounded-xl overflow-hidden shadow-2xl aspect-video relative">

                {slideshowPhotos.map((photo, i) => (
                  <img
                    key={i}
                    src={photo}
                    alt={`AI Club photo ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      i === currentSlide
                        ? 'opacity-100'
                        : 'opacity-0'
                    }`}
                  />
                ))}

              </div>

              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slideshow Dots */}
              <div className="flex justify-center gap-2 mt-4">

                {slideshowPhotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentSlide
                        ? 'bg-red-400 w-5'
                        : 'bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}

              </div>

            </div>

          </div>

          {/* WHERE AND WHEN */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <div className="bg-red-600/90 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-center">

              <div className="flex items-center justify-center gap-3 mb-4">

                <MapPin className="w-8 h-8" />

                <h3 className="text-2xl">
                  Where &amp; When We Meet
                </h3>

              </div>

              <p className="text-xl">
                Fridays from 1:00-3:00 PM
              </p>

            </div>

            <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-center">

              <div className="flex items-center justify-center gap-3 mb-4">

                <Users className="w-8 h-8" />

                <h3 className="text-2xl">
                  Who Can Join
                </h3>

              </div>

              <p className="text-xl">
                Open to all majors!
              </p>

              <p className="text-xl">
                No experience required!
              </p>

            </div>

          </div>

          {/* ACTION BUTTONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">

            <Button
              variant="contained"
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-all hover:scale-105"
              onClick={() =>
                window.open(
                  'https://discord.gg/wvAn6Gj3Q',
                  '_blank'
                )
              }
            >
              Join us on Discord
            </Button>

            <Link to="/team">
              <Button
                variant="outlined"
                className="border-2 border-white text-white hover:bg-white/10 py-3 px-6 rounded-lg transition-all hover:scale-105 w-full h-full"
              >
                Meet the Team
              </Button>
            </Link>

            <Link to="/projects">
              <Button
                variant="outlined"
                className="border-2 border-white text-white hover:bg-white/10 py-3 px-6 rounded-lg transition-all hover:scale-105 w-full h-full"
              >
                Explore Projects
              </Button>
            </Link>

            <Link to="/current-projects">
              <Button
                variant="outlined"
                className="border-2 border-white text-white hover:bg-white/10 py-3 px-6 rounded-lg transition-all hover:scale-105 w-full h-full"
              >
                Current Projects
              </Button>
            </Link>

          </div>

          {/* CALENDAR */}
          <div className="mt-12 max-w-3xl mx-auto">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">

              {/* Month Header */}
              <div className="flex items-center justify-between bg-red-600 px-6 py-4">

                <button
                  onClick={() =>
                    setCalendarMonth((m) =>
                      Math.max(0, m - 1)
                    )
                  }
                  disabled={calendarMonth === 0}
                  className="p-1 rounded-full hover:bg-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-white"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <h3 className="text-xl text-white">
                  {MONTH_NAMES[calendarMonth]} 2026
                </h3>

                <button
                  onClick={() =>
                    setCalendarMonth((m) =>
                      Math.min(3, m + 1)
                    )
                  }
                  disabled={calendarMonth === 3}
                  className="p-1 rounded-full hover:bg-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-white"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

              </div>

              {/* Day Names */}
              <div className="grid grid-cols-7 px-4 pt-4">

                {DAY_NAMES.map((dayName) => (
                  <div
                    key={dayName}
                    className="text-center text-xs text-white/50 font-medium py-2"
                  >
                    {dayName}
                  </div>
                ))}

              </div>

              {/* Calendar Cells */}
              <div className="grid grid-cols-7 px-4 pb-6 gap-1">

                {calendarCells.map((day, i) => {

                  const dateKey = day
                    ? `${calendarYear}-${pad(
                        monthIndex + 1
                      )}-${pad(day)}`
                    : null;

                  const events = dateKey
                    ? EVENTS[dateKey]
                    : undefined;

                  return (
                    <div
                      key={i}
                      className={`min-h-24 rounded-lg p-1 flex flex-col transition-colors ${
                        day
                          ? events
                            ? 'bg-red-900/40 border border-red-400/50'
                            : 'hover:bg-white/10'
                          : ''
                      }`}
                    >

                      {day && (
                        <>
                          <span className="text-xs text-white/80 font-medium">
                            {day}
                          </span>

                          {events && (
                            <div className="flex flex-col gap-1 mt-1">

                              {events.map(
                                (event, index) => (
                                  <span
                                    key={index}
                                    className="text-red-200 leading-tight"
                                    style={{
                                      fontSize: '9px',
                                    }}
                                  >
                                    {event}
                                  </span>
                                )
                              )}

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

        </div>

      </section>

      {/* WHAT WE OFFER */}
      <section className="py-20 px-6 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl text-center mb-16 text-black">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Tutorials */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">

              <div className="flex items-center gap-3 mb-4">

                <BookOpen className="w-10 h-10 text-red-600" />

                <h3 className="text-2xl text-black">
                  Tutorials
                </h3>

              </div>

              <div className="rounded-xl overflow-hidden mb-6">

                <img
                  src={workshop1}
                  alt="Students learning during AI Club tutorial session"
                  className="w-full h-48 object-cover"
                />

              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Build a foundation in Artificial Intelligence,
                Machine Learning, Deep Learning by attending
                workshops presented by the club, which include
                lectures or hands-on learning every meeting.
              </p>

              <Link to="/materials">

                <Button
                  variant="contained"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Learning Materials
                </Button>

              </Link>

            </div>

            {/* Projects */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-black">

              <div className="flex items-center gap-3 mb-4">

                <Code className="w-10 h-10 text-black" />

                <h3 className="text-2xl text-black">
                  Projects
                </h3>

              </div>

              <div className="rounded-xl overflow-hidden mb-6">

                <img
                  src={workshop3}
                  alt="Students collaborating on AI projects in computer lab"
                  className="w-full h-48 object-cover"
                />

              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Gain hands on experience tackling real world
                problems with a team of motivated students! Check
                out our github for examples and inspiration!
              </p>

              <Link to="/projects">

                <Button
                  variant="contained"
                  className="bg-black hover:bg-gray-800 text-white"
                >
                  Past and Current Projects
                </Button>

              </Link>

            </div>

            {/* Seminars */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">

              <div className="flex items-center gap-3 mb-4">

                <Mic className="w-10 h-10 text-red-600" />

                <h3 className="text-2xl text-black">
                  Seminars
                </h3>

              </div>

              <div className="rounded-xl overflow-hidden mb-6">

                <img
                  src={seminar}
                  alt="Guest speaker presenting at AI Club seminar"
                  className="w-full h-48 object-cover"
                />

              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Join us in listening to various guest speakers from
                the industry speak about the field of AI and the many
                things it has to offer.
              </p>

            </div>

            {/* Competitions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-black">

              <div className="flex items-center gap-3 mb-4">

                <Trophy className="w-10 h-10 text-black" />

                <h3 className="text-2xl text-black">
                  Competitions
                </h3>

              </div>

              <div className="rounded-xl overflow-hidden mb-6">

                <img
                  src={competition}
                  alt="Students competing in AI coding competition"
                  className="w-full h-48 object-cover"
                />

              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Learn the latest techniques and gain hands-on
                experience by competing in coding competitions.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHAT IS AI */}
      <section className="py-20 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl text-center mb-12 text-black">
            What is AI?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6 text-gray-700 leading-relaxed">

              <p>
                Artificial Intelligence (AI) is the field of
                computer science that focuses on creating systems
                that perform tasks that would typically require
                "human intelligence" or adaptability. Some of these
                tasks might include things like recognizing images,
                understanding language, making complex decisions,
                or learning from experience.
              </p>

              <p>
                Much of today's AI is{' '}
                <strong>narrow AI</strong>, meaning it's designed to
                excel at a specific task, such as a voice assistant,
                a recommendation system, or a chess engine. In the
                AI Club, you will typically design and create systems
                that fall under this category.
              </p>

              <p>
                The ultimate goal of AI research is{' '}
                <strong>general AI</strong>. These systems are able
                to think, adapt, and solve problems across a wide
                range of areas without specifically being trained on
                any one particular area. While we're not there yet,
                AI has already shaped much of our daily lives, and
                we can't wait to have you explore the field with us!
              </p>

            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">

              <img
                src={aiSubdomains}
                alt="AI subdomains diagram"
                className="w-full h-auto object-contain"
              />

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <div className="mb-6 flex justify-center">

            <img
              src={logo}
              alt="SDSU AI Club Logo"
              className="w-48 h-auto"
            />

          </div>

          <p className="text-gray-400 mb-6">
            Empowering students to explore artificial intelligence
            since 2017
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="https://discord.gg/wvAn6Gj3Q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              Discord
            </a>

            <a
              href="https://github.com/aiclub-sdsu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.instagram.com/sdsuaiclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              Instagram
            </a>

            <a
              href="mailto:SDSUAIClub@gmail.com"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              Email
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}
