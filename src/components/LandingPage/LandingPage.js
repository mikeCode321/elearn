import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './LandingPage.css';  // Import the custom CSS file

const LandingPage = () => {

    // Function to handle scroll for "About" and "Contact"
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });  // Smooth scroll to section
        }
    };

    return (
        <div>
            {/* Header with custom gradient background and white text */}
            <header className="p-3 text-center" style={{ background: 'linear-gradient(135deg, #4e54c8, #8f94fb)' }}>
                <h1 className="display-4 font-weight-bold mb-3 text-white">Welcome to My E-Learning Platform and Portfolio</h1>
                <p className="lead mb-3 text-white">I hope this site provides you inspiration and an opportunity to learn!</p>
                <nav>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/courses">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            {/* Prevent the default anchor behavior and scroll to About section */}
                            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                        </li>
                        <li className="nav-item">
                            {/* Prevent the default anchor behavior and scroll to Contact section */}
                            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Main content section */}
            <main className="container my-5">
                <section id="wip" className="mb-5 p-4 border rounded-lg shadow-lg bg-white">
                    <h2 className="h3 font-weight-bold mb-3">Important Read! Construction Zone ahead :)</h2>
                    <p>This is a work in progress. More will be added very very soon. For now, click the 'courses' link above to see what the future holds!</p>
                </section>

                <section id="about" className="mb-5 p-4 border rounded-lg shadow-lg bg-white">
                    <h2 className="h3 font-weight-bold mb-3">About Us</h2>
                    <p>This site will offer high-quality e-learning resources, combining expertise and real-world experience to help you succeed.</p>
                </section>

                <section id="contact" className="p-4 border rounded-lg shadow-lg bg-light">
                    <h2 className="h3 font-weight-bold mb-3">Contact Us</h2>
                    <p>Contact information coming soon!</p>
                </section>
            </main>

            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2025 My E-Learning Platform. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
