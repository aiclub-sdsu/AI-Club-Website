import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Home';
import MeetTheTeam from './components/MeetTheTeam';
import LearningMaterials from './components/LearningMaterials';
import Projects from './components/Projects';
import Calendar from './components/Calendar';
import CurrentProjects from './components/CurrentProjects';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<MeetTheTeam />} />
        <Route path="/materials" element={<LearningMaterials />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/current-projects" element={<CurrentProjects />} />
      </Routes>
    </BrowserRouter>
  );
}
