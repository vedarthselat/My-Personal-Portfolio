import React, { useEffect } from "react";
import "./SkillsInfoCard.css";

const SkillsInfoCard = ({ heading, skills }) => {
  useEffect(() => {
    const syncAnimations = () => {
      const currentTime = performance.now() / 1000; // Current time in seconds
      const animationDuration = 7; // Match the CSS animation duration (7 seconds)
      const offset = currentTime % animationDuration; // Calculate elapsed time in the cycle

      // Set the shared animation offset as a CSS variable
      document.documentElement.style.setProperty(
        "--animation-offset",
        `-${offset}s`
      );
    };

    syncAnimations(); // Run synchronization on component mount
  }, []); // Run only once when the component is mounted

  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>

      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <p>{item.skill}</p>
              <p className="percentage">{item.percentage}</p>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress"
                style={{ width: item.percentage }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
