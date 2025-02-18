import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';
import mathImage from '../../assets/math.png';
import statsImage from '../../assets/curve.png';
import programmingImage from '../../assets/programming.png';
import mcuImage from '../../assets/microcontroller.png';
import deepLearningImage from '../../assets/deep-learning.png';

const CoursesPage = () => {
  const categories = [
    { name: 'Mathematics', description: 'Learn advanced mathematics concepts, from calculus to algebra.', image: mathImage },
    { name: 'Statistics', description: 'Dive into data analysis, probability theory, and more.', image: statsImage },
    { name: 'Programming Languages', description: 'Choose from a wide variety of programming languages to master.', image: programmingImage },
    { name: 'Embedded Systems', description: 'Learn how to build embedded systems for real-world applications.', image: mcuImage },
    { name: 'Deep Learning', description: 'Master the techniques of neural networks and artificial intelligence.', image: deepLearningImage },
  ];

  return (
    <div className="container my-5">
      {/* Back to Home button */}
      <div className="d-flex justify-content-start mb-4">
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>

      <h2 className="h3 font-weight-bold mb-4">Select a Category to Learn</h2>

      <div className="grid-container">
        {categories.map((category, index) => (
          <div key={index} className="grid-item">
            <div className="card shadow-lg">
              <div className="card-img-container">
                <img src={category.image} className="card-img-top" alt={category.name} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <p className="card-text">{category.description}</p>
                <Link to='#/' className="btn btn-primary">Start Learning</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
