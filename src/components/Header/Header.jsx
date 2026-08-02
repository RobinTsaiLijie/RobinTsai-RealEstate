import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'appraisal'];
      const headerHeight = 80;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerHeight && rect.bottom > headerHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = section.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/images/PageLogoNEW.png`} alt="Real Estate Logo" />
            <div className="logo-text">
              <h1 className="name">Robin Tsai</h1>
            </div>
          </div>
          
          <ul className="nav-menu">
            <li>
              <a 
                href="#home" 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className={activeSection === 'services' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'services')}
              >
                My Services
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                Financial Calculation
              </a>
            </li>
            <li>
              <a 
                href="#appraisal" 
                className={activeSection === 'appraisal' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'appraisal')}
              >
                Appraisal
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;