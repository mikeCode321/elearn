import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import CoursesPage from './components/Courses/CoursesPage';
import WorkInProgressPage from './components/WIP/WorkInProgressPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/portfolio" element={<WorkInProgressPage />} />
      </Routes>
    </Router>
  );
};

export default App;