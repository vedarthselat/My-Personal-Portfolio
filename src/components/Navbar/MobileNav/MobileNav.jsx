import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  
  const handleScroll = (sectionId) => {
    if(isOpen) toggleMenu();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h2>PORTFOLIO</h2>

          <ul>
            <li>
              <a onClick={() => handleScroll("hero")} className="menu-item">
                Home
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("skills")} className="menu-item">
                Skills
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("work-exp")} className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a onClick={() => handleScroll("projects")} className="menu-item">
                Projects
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("awards")} className="menu-item">
                Awards & Achievements
              </a>
            </li>


            <li>
              <a onClick={() => handleScroll("resume")} className="menu-item">
                Resume
              </a>
            </li>


            <li>
              <a onClick={() => handleScroll("contact")} className="menu-item">
                Contact Me
              </a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>-p
      </div>
    </>
  );
};

export default MobileNav;
