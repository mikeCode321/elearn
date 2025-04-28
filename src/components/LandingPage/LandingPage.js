import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './LandingPage.css';  // Import the custom CSS file

const LandingPage = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });  // Smooth scroll to section
        }
    };

    return (
        <div>
            <header class="main-header">
                <div class="logo-container">
                    <h1 class="logo">OpenELearn</h1>
                </div>

                <div class="hp-motivation-message-container">
                    <h2 class="hp-motivation-message">Learn. Apply. Succeed.</h2>
                </div>
            </header>

            <main class="main-content">
                <section class="dive-in-container">
                    <div>
                        <h2 className="h3 font-weight-bold mb-3">Welcome to OpenELearn</h2>
                        <p>Explore our courses and resources designed to enhance your learning experience.</p>
                    </div>
                    <div class="dive-in">
                        <Link className="nav-link" to="/courses">Dive In</Link>                    
                    </div>
                </section>
            </main>

            <footer class="main-footer">
                <p>&copy; 2025 OpenELearning Platform. All rights reserved.</p>
                <p>Created By: Maikl Awad</p>
            </footer>
        </div>
    );
}

export default LandingPage;
