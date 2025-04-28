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
    {
      status: 'active',
      categories: [
        {
          name: 'Mathematics',
          description: 'Learn advanced mathematics concepts; Calculus and Linear Algebra.',
          image: mathImage,
          link: '#/mathematics'
        }
      ]
    },
    {
      status: 'inactive',
      categories: [
        {
          name: 'Statistics',
          description: 'Dive into data analysis, probability theory, and more.',
          image: statsImage,
          link: null
        },
        {
          name: 'Programming Languages',
          description: 'Choose from a wide variety of programming languages to master.',
          image: programmingImage,
          link: null
        },
        {
          name: 'Embedded Systems',
          description: 'Learn how to build embedded systems for real-world applications.',
          image: mcuImage,
          link: null
        },
        {
          name: 'Deep Learning',
          description: 'Master the techniques of neural networks and artificial intelligence.',
          image: deepLearningImage,
          link: null
        }
      ]
    }
  ];

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-start mb-4">
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>

      <h2 className="h3 font-weight-bold mb-4">Select a Category to Learn</h2>

      <div className="grid-container">
        {categories.map((group, groupIndex) =>
          group.categories.map((category, categoryIndex) => (
            <div
              key={`${groupIndex}-${categoryIndex}`}
              className={`grid-item ${group.status}`}
            >
              <div className="card shadow-lg">
                <div className="card-img-container">
                  <img src={category.image} className="card-img-top" alt={category.name} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{category.name}</h5>
                  <p className="card-text">{category.description}</p>
                  {category.link ? (
                    <a href={category.link} className="btn btn-primary">Start Learning</a>
                  ) : (
                    <button className="btn btn-secondary" disabled>Coming Soon</button>
                  )}
                  
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
