import { ArrowLeft, Code, Target } from 'lucide-react';
import { Button } from '@mui/material';
import { Link } from 'react-router';

type Project = {
  title: string;
  difficulty: string;
  problem: string;
  goal: string;
};

const projects: Project[] = [
  {
    title: 'PRD to MCP Tool Generator',
    difficulty: 'Medium - Hard',
    problem:
      'Writing an MCP server is mostly boilerplate. Someone describes what they want a tool to do in plain English, and a developer spends a day translating that into schemas, handlers, and tests. The description already contains almost everything needed.',
    goal:
      'Take a product requirements doc written in plain English and output a working MCP server that compiles, starts, and answers protocol calls. The code generation is not the interesting part. The checker that verifies the output without a human reading it is the interesting part.',
  },
  {
    title: 'Dependency Vulnerability Scanner',
    difficulty: 'Medium - Hard',
    problem:
      'Every existing scanner dumps a list of vulnerable packages, and most of those findings are noise because the vulnerable function never gets called. Security teams get 400 alerts and act on 6.',
    goal:
      'Point it at a repo and get back only the vulnerabilities your code can actually reach. Reachability is the differentiator, and it is what makes this a semester project instead of a weekend one.',
  },
  {
    title: 'Personalized Knowledge Base',
    difficulty: 'Easy - Medium',
    problem:
      'Organizations sit on piles of documents that go stale, contradict each other, and nobody notices until someone acts on the wrong version.',
    goal:
      'Build an agent that ingests a document set and keeps it usable over time. It indexes, spots contradictions between documents, and flags information that has expired.',
  },
  {
    title: 'Driver Drowsiness Detection',
    difficulty: 'Easy - Medium',
    problem:
      'Drowsy driving kills thousands of people a year. Detection systems ship in luxury cars and almost nowhere else.',
    goal:
      'A camera watches a face and raises an alert when the driver is falling asleep. The hard part is that drowsiness happens over seconds, not in a single frame. One closed-eye frame is a blink. Two seconds of closed eyes is the alert.',
  },
  {
    title: 'Trash / Recycling Classifier',
    difficulty: 'Easy - Medium',
    problem:
      'Contaminated recycling loads get diverted to landfill. One greasy pizza box in the wrong bin costs a facility real money, and most people are guessing.',
    goal:
      'Hold an object up to a camera and get told which bin, using the actual published rules of one specific city.',
  },
  {
    title: 'Resume / JD Gap Analyzer',
    difficulty: 'Easy - Medium',
    problem:
      'Applicants get rejected with no feedback and no idea what was missing. The tools that claim to help return a match percentage, which tells you nothing you can act on.',
    goal:
      'Paste a resume and a job posting, get back the specific skills the posting asks for that the resume does not show, with evidence for every claim.',
  },
  {
    title: 'Custom Medical Chatbot',
    difficulty: 'Medium',
    problem:
      'Medical information online is hard to read and full of misinformation, and general purpose LLMs will confidently answer questions they have no business answering.',
    goal:
      'A question answering system over trusted medical sources that cites every claim and refuses what it should refuse.',
  },
  {
    title: 'Sports Game Outcome Prediction',
    difficulty: 'Easy - Medium',
    problem:
      'Everyone builds a model that beats the spread on backtest, and almost none of them survive contact with a live season. The failure is usually leakage, not modeling.',
    goal:
      'Build a well calibrated predictor. When it says 70%, that team should win about 70% of the time. The goal is not to beat the market. The goal is to know exactly how confident you are and be right about that.',
  },
  {
    title: 'Sketch Showdown',
    difficulty: 'Medium',
    problem:
      'Sketch recognition demos all work the same way. Draw the whole thing, hit submit, get a label. That is not how anyone plays Pictionary, and it is not where the recognition is useful.',
    goal:
      'A drawing game where the model guesses while you are still drawing. Guessing from 20% of the strokes and updating live is the entire project. Every design decision follows from that.',
  },
  {
    title: 'Ambient Audio Generator',
    difficulty: 'Medium - Hard',
    problem:
      'Sound design for games, film, and accessibility tools is slow and expensive, and stock libraries never quite match the scene you have.',
    goal:
      'Describe a scene in text, or hand it a photo, and get matching ambient audio back.',
  },
  {
    title: 'Poker Agent',
    difficulty: 'Medium',
    problem:
      'Poker is the standard testbed for imperfect information games, where you never see the full state and your opponent is actively hiding it. The techniques that solved chess and Go do not work here.',
    goal:
      'An agent that learns poker by playing itself, starting in a game small enough that you can prove it is improving rather than hoping.',
  },
  {
    title: 'Chess Agent',
    difficulty: 'Medium - Hard',
    problem:
      'Every team wants to build full chess. AlphaZero used thousands of TPUs. The semester ends before self-play converges and the demo is an agent that hangs its queen on move nine.',
    goal:
      'Pick one of three scoped versions in week one and build that one properly. All three produce a real result. Full chess does not.',
  },
  {
    title: 'Cross-Media Recommender',
    difficulty: 'Medium',
    problem:
      'You finish a novel you loved and want something that hits the same way, but every recommender only knows one medium. Goodreads recommends books, MyAnimeList recommends anime, and neither one talks to the other.',
    goal:
      'You loved a book, it recommends an anime. You finished a show, it recommends a novel.',
  },
];

export default function InHouseProjects() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/current-projects">
            <Button
              variant="outlined"
              className="border-2 border-white text-white hover:bg-white/10"
              startIcon={<ArrowLeft />}
            >
              Back to Current Projects
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-black text-white px-6 pb-20 pt-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-6">
            In-House Projects
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the AI Club's current in-house project ideas and find a
            project that matches your interests and experience level.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
              >
                <div
                  className={`h-2 ${
                    index % 2 === 0 ? 'bg-red-600' : 'bg-black'
                  }`}
                />

                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-50 p-3 rounded-xl">
                        <Code className="w-6 h-6 text-red-600" />
                      </div>

                      <h2 className="text-2xl font-semibold text-black">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="inline-block bg-black text-white text-sm px-4 py-2 rounded-full">
                      {project.difficulty}
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-red-600" />
                        <h3 className="text-lg font-semibold text-black">
                          Problem
                        </h3>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="w-5 h-5 text-red-600" />
                        <h3 className="text-lg font-semibold text-black">
                          Project Goal
                        </h3>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        {project.goal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            SDSU AI Club — Building, learning, and exploring AI together.
          </p>
        </div>
      </footer>
    </div>
  );
}
