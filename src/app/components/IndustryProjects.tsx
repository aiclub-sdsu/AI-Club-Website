import {
  ArrowLeft,
  Building2,
  Target,
  Code,
  BriefcaseBusiness,
} from 'lucide-react';
import { Button } from '@mui/material';
import { Link } from 'react-router';

type IndustryProject = {
  company: string;
  title: string;
  problem: string;
  goal: string;
};

const projects: IndustryProject[] = [
  {
    company: 'Data Net Solutions Group',
    title: 'Jobsite Safety Intelligence',
    problem:
      'Safety documentation across construction job sites is scattered across paper forms, spreadsheets, and photos, making it hard to catch compliance gaps or trends before they become violations or incidents.',
    goal:
      'Build an AI system that extracts and cross-references safety data (hazard assessments, certifications, incident reports) to flag compliance risks and surface safety trends automatically.',
  },
  {
    company: 'Cohyric',
    title: 'AI-Enabled Change Order Management',
    problem:
      'Subcontractors lose significant revenue each year because field-reported change orders are captured inconsistently and estimated without the context needed to make fast, accurate decisions.',
    goal:
      'Develop an AI tool that turns voice and photo field reports into structured change order data with automated cost estimates (subject to human review), management interface, and timely notifications.',
  },
  {
    company: 'Bright Sky Recruiting',
    title: 'Construction Talent Discovery Engine',
    problem:
      'Traditional keyword-based candidate search fails in construction recruiting, where job titles are inconsistent and strong candidates often have thin online profiles.',
    goal:
      'Create an AI-powered discovery engine that identifies and evaluates promising candidates from public sources using patterns beyond simple title or keyword matching when given a target position and its requirements.',
  },
];

export default function IndustryProjects() {
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
          <div className="flex justify-center mb-6">
            <div className="bg-red-600 p-4 rounded-2xl">
              <Building2 className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl mb-6">
            Industry Partner Projects
          </h1>

          <h2 className="text-xl md:text-2xl text-red-500 mb-6">
            Building Industry Association (BIA) AI Subcommittee
            × SDSU AI Club
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The Building Industry Association AI Subcommittee and SDSU AI
            Club are partnering to connect BIA member businesses with
            student teams for a semester-long applied AI collaboration.
          </p>
        </div>
      </section>

      {/* Program Information */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <BriefcaseBusiness className="w-7 h-7 text-red-600" />

              <h2 className="text-3xl font-semibold text-black">
                Applied AI Program
              </h2>
            </div>

            <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
              <p>
                The program provides students with meaningful, real-world
                technical experience solving business challenges while
                helping companies evaluate and implement practical AI and
                automation solutions.
              </p>

              <p>
                Student teams work directly with selected BIA member
                companies to identify a meaningful workflow or business
                process, design a practical AI/ML or automation solution,
                and deliver a professional project report, code repository,
                and demo by the end of the Fall 2026 semester.
              </p>

              <p>
                Teams will present their findings in front of BIA leadership,
                giving students the opportunity to build technical skills,
                industry experience, and professional connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-black mb-4">
              Industry Projects
            </h2>

            <p className="text-lg text-gray-600">
              Explore the Fall 2026 projects offered by participating
              industry partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={`${project.company}-${project.title}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
              >
                <div
                  className={`h-2 ${
                    index % 2 === 0 ? 'bg-red-600' : 'bg-black'
                  }`}
                />

                <div className="p-8">
                  <div className="mb-5">
                    <span className="inline-block bg-black text-white text-sm px-4 py-2 rounded-full mb-4">
                      {project.company}
                    </span>

                    <h2 className="text-2xl font-semibold text-black">
                      {project.title}
                    </h2>
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
