
import React from 'react';
import './LandingPage.css'; // Create a separate CSS file for the landing page styles

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header>
                <h1>Welcome to My E-Learning Platform</h1>
                <p>Your journey to learn starts here!</p>
                <nav>
                    <ul>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="courses">
                    <h2>Our Courses</h2>
                    <p>Explore the best courses in tech, design, and more.</p>
                </section>

                <section id="about">
                    <h2>About Us</h2>
                    <p>We offer high-quality e-learning resources to help you grow.</p>
                </section>

                <section id="contact">
                    <h2>Contact Us</h2>
                    <p>If you have any questions, feel free to reach out to us.</p>
                </section>
            </main>

            <footer>
                <p>&copy; 2025 My E-Learning Platform. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
