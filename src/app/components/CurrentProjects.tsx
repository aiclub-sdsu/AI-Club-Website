import { ArrowLeft, Code, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@mui/material';
import { Link } from 'react-router';

export default function CurrentProjects() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white px-6 py-8">
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
      </section>

      {/* Hero */}
      <section className="bg-black text-white px-6 pb-20 pt-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-6">
            Current Projects
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the AI Club's current projects, from student-led
            initiatives to real-world collaborations with industry partners.
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">

            {/* In-House Projects */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-200">
              <div className="h-2 bg-red-600" />

              <div className="p-10">
                <div className="bg-red-50 w-fit p-4 rounded-xl mb-6">
                  <Code className="w-8 h-8 text-red-600" />
                </div>

                <h2 className="text-3xl font-semibold text-black mb-4">
                  In-House Projects
                </h2>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Explore projects developed within the SDSU AI Club.
                  These projects cover areas including machine learning,
                  computer vision, generative AI, recommendation systems,
                  agents, and more.
                </p>

                <Link to="/current-projects/in-house">
                  <Button
                    variant="contained"
                    endIcon={<ArrowRight />}
                    sx={{
                      backgroundColor: '#dc2626',
                      '&:hover': {
                        backgroundColor: '#b91c1c',
                      },
                    }}
                  >
                    Explore In-House Projects
                  </Button>
                </Link>
              </div>
            </div>

            {/* Industry Projects */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-200">
              <div className="h-2 bg-black" />

              <div className="p-10">
                <div className="bg-gray-100 w-fit p-4 rounded-xl mb-6">
                  <Building2 className="w-8 h-8 text-black" />
                </div>

                <h2 className="text-3xl font-semibold text-black mb-4">
                  Industry Partner Projects
                </h2>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Work directly with industry partners on real-world
                  business challenges through applied AI, machine learning,
                  and automation projects.
                </p>

                <Link to="/current-projects/industry">
                  <Button
                    variant="contained"
                    endIcon={<ArrowRight />}
                    sx={{
                      backgroundColor: '#000000',
                      '&:hover': {
                        backgroundColor: '#27272a',
                      },
                    }}
                  >
                    Explore Industry Projects
                  </Button>
                </Link>
              </div>
            </div>

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
