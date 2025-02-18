import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
import LandingPage from './components/LandingPage';
import CoursesPage from './components/CoursesPage';

const App = () => {
  return (
    <Router>
      <Routes>  {/* Use Routes here */}
        <Route exact path="/" element={<LandingPage />} />  {/* Use 'element' prop in Route */}
        <Route exact path="/courses" element={<CoursesPage />} />  {/* Use 'element' prop in Route */}
      </Routes>
    </Router>
  );
};

export default App;
