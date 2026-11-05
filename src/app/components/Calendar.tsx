import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@mui/material';
import { Link } from 'react-router';

// TODO: replace with the AI Club calendar ID (Google Calendar → Settings → Integrate calendar).
// The calendar must be set to "Make available to public" for the embed to load.
const CALENDAR_ID = 'c_02d76bbf8331ddf07bce6bf433bc7e114d4e29e08d58dd3c71e7cdd3f344e343@group.calendar.google.com';

const CALENDAR_SRC =
  `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(CALENDAR_ID)}` +
  '&ctz=America%2FLos_Angeles&mode=MONTH&showTitle=0&showPrint=0';

const CALENDAR_URL = "https://calendar.google.com/calendar/u/0?cid=Y18wMmQ3NmJiZjgzMzFkZGYwN2JjZTZiZjQzM2JjN2UxMTRkNGUyOWUwOGQ1OGRkM2M3MWU3Y2RkM2YzNDRlMzQzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";

export default function Calendar() {
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
          <p className="text-center text-gray-400 mb-12 text-lg">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              Add to your Google Calendar <ExternalLink className="w-4 h-4" />
            </a>
          </p>

          <div className="rounded-2xl overflow-hidden border border-gray-700 bg-white">
            <iframe
              src={CALENDAR_SRC}
              title="SDSU AI Club Calendar"
              className="w-full h-[600px] md:h-[700px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
