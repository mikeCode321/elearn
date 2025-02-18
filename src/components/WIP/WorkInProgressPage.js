import React from 'react';
import { Link } from 'react-router-dom';
import '../Courses/CoursesPage.css';

const WorkInProgressPage = () => {

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-start mb-4">
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>

      <h2 className="h3 font-weight-bold mb-4">This page is a work in progress...</h2>
      <h4 className="h4 mb-4">Please check back in when more fun things appear!</h4>
    </div>
  );
};

export default WorkInProgressPage;
