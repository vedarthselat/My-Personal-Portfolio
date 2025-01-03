import React, { useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const firstText = document.querySelector(".hero-content h2:first-child");
    const secondText = document.querySelector("#name");

    // Typewriter effect logic
    const typeWriter = (element, text, delay, callback) => {
      let index = 0;
      const interval = setInterval(() => {
        element.textContent = text.slice(0, index + 1);
        index++;
        if (index === text.length) {
          clearInterval(interval);
          if (callback) callback(); // Trigger next animation
        }
      }, delay);
    };

    // First animate "Hi, my name is"
    typeWriter(firstText, "Hi, my name is", 100, () => {
      // Then animate "Vedarth Selat"
      typeWriter(secondText, "Vedarth Selat", 100);
    });
  }, []);

  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2></h2> {/* Empty initially for typewriter effect */}
        <h2 id="name"></h2> {/* Empty initially for typewriter effect */}
        <p className="subtitle">Welcome to my website!</p>
        <p>
          Passionate Web Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="flexing">
            <div className="tech-icon">
              <img src="./assets/images/img01.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/c-sharp.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/java.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/pytorch.png" alt="" />
            </div>
          </div>
          <img className="mainimg "src="./assets/images/me.jpeg" alt="" />
        </div>

        <div className="icons">
          <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/php.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/nodejs.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
