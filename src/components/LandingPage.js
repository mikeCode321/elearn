import React from 'react';
import './LandingPage.css';  // Import the custom CSS file

const LandingPage = () => {
    return (
        <div>
            {/* Header with custom gradient background and white text */}
            <header className="p-3 text-center" style={{ background: 'linear-gradient(135deg, #4e54c8, #8f94fb)' }}>
                <h1 className="display-4 font-weight-bold mb-3 text-white">Welcome to My E-Learning Platform and Portfolio</h1>
                <p className="lead mb-3 text-white">I hope this site provides you inspiration and an oppurtunity to learn!</p>
                <nav>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="/courses">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Main content section */}
            <main className="container my-5">
                <section id="wip" className="mb-5 p-4 border rounded-lg shadow-lg bg-white">
                    <h2 className="h3 font-weight-bold mb-3">Important Read! Construction Zone ahead :)</h2>
                    <p>This is a work in progress. More will be added very very soon. For now click the 'courses' link above to see what the future holds! </p>
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
