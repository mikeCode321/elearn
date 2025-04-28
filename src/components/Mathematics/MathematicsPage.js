import React from 'react';

const MathematicsPage = () => {
  const categories = [
    { name: 'Calculus I: Engineering Calculations with Python', 
      description: 'Explore advanced calculus through real-world engineering problems and hands-on Python implementations.',  
      link: 'https://mikecode321.github.io/ebook-calculus-1/intro.html' },
  ];
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-start mb-4">
        <a href="#/courses" className="btn btn-secondary">Back to Courses</a>
      </div>

      <h2 className="h3 font-weight-bold mb-4">Select a Category to Learn</h2>

      <div className="grid-container">
        {categories.map((category, index) => (
          <div key={index} className="grid-item">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <p className="card-text">{category.description}</p>
                <a href={category.link} className="btn btn-primary">Start Learning</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathematicsPage;
