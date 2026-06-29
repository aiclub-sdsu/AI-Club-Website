import { Users, ArrowLeft } from 'lucide-react';
import { Button } from '@mui/material';
import { Link } from 'react-router';
import photoMandy from '../../photos part 6/Screenshot_2026-06-14_at_7.37.29_PM.png';
import photoPatrick from '../../photos part 5/Screenshot_2026-06-14_at_7.37.19_PM.png';
import photoSalimeh from '../../photos part 5/Screenshot_2026-06-14_at_7.36.41_PM.png';
import photoLaura from '../../photos part 5/Screenshot_2026-06-14_at_7.36.29_PM.png';
import photoAndrei from '../../photos part 5/Screenshot_2026-06-14_at_7.36.16_PM.png';
import photoAadi from '../../photos part 5/Screenshot_2026-06-14_at_7.38.01_PM.png';
import photoAlec from '../../photos part 6/Screenshot_2026-06-24_at_2.13.53_PM.png';
import photoElla from '../../photos part 5/Screenshot_2026-06-14_at_7.37.51_PM.png';
import photoJay from '../../photos part 5/Screenshot_2026-06-14_at_7.37.39_PM.png';

export default function MeetTheTeam() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
      {/* Header */}
      <div className="py-6 px-6">
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

      {/* Meet the Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl text-center mb-16">Meet the Team</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* President */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="rounded-xl w-full h-64 mb-4 overflow-hidden">
                <img src={photoSalimeh} alt="Aadi Bery" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl mb-1">Aadi Bery</h3>
              <p className="text-red-400">President</p>
            </div>

            {/* Vice President */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="rounded-xl w-full h-64 mb-4 overflow-hidden">
                <img src={photoMandy} alt="Jay Mittal" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl mb-1">Jay Mittal</h3>
              <p className="text-red-400">Vice President</p>
            </div>

            {/* Treasurer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="rounded-xl w-full h-64 mb-4 overflow-hidden">
                <img src={photoElla} alt="Patrick Dowell" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl mb-1">Patrick Dowell</h3>
              <p className="text-red-400">Treasurer</p>
            </div>

            {/* Chief Technical Officer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="rounded-xl w-full h-64 mb-4 overflow-hidden">
                <img src={photoLaura} alt="Andrei Dominic Magno" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl mb-1">Andrei Dominic Magno</h3>
              <p className="text-red-400">Chief Technical Officer</p>
            </div>

            {/* Associate Chief Technical Officer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="rounded-xl w-full h-64 mb-4 overflow-hidden">
                <img src={photoAlec} alt="Alec Buhr" className="w-full h-full object-cover" style={{ objectPosition: '50% 15%' }} />
              </div>
              <h3 className="text-xl mb-1">Alec Buhr</h3>
              <p className="text-red-400">Associate Chief Technical Officer</p>
            </div>

            {/* Secretary */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="rounded-xl w-full h-64 mb-4 overflow-hidden">
                <img src={photoAndrei} alt="Laura Wetherhold" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl mb-1">Laura Wetherhold</h3>
              <p className="text-red-400">Secretary</p>
            </div>

            {/* Multimedia Specialist */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="rounded-xl w-full h-64 mb-4 overflow-hidden">
                <img src={photoPatrick} alt="Ella Lamie" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl mb-1">Ella Lamie</h3>
              <p className="text-red-400">Multimedia Specialist</p>
            </div>

            {/* Outreach Officer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="rounded-xl w-full h-64 mb-4 overflow-hidden">
                <img src={photoJay} alt="Mandy Liu" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl mb-1">Mandy Liu</h3>
              <p className="text-red-400">Outreach Officer</p>
            </div>

            {/* Faculty Advisor */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="rounded-xl w-full h-64 mb-4 overflow-hidden">
                <img src={photoAadi} alt="Salimeh Sekeh" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl mb-1">Salimeh Sekeh</h3>
              <p className="text-red-400">Faculty Advisor</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
