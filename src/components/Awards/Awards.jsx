import React from "react";
import "./Awards.css";

const Awards = () => {
    return(
    <section id="awards" className="awards-container">
    <h1>Awards & Achievements</h1>
  <div className="grid">
    <section class="sec1">
        <img src="./assets/images/hacktrent.jpeg" width="200em"/>
        <div class="sec1cont">
            <h1>HackTrent Hackathon Winner</h1>
            <p>With over 300+ participants, bagged the 3<sup>rd</sup> position in the general category in Trent University</p>
        </div>
    </section>
    <section class="sec2">
    <img src="./assets/images/TI.png" width="300em"/>
        <div class="sec2cont">
            <h1>Trent International(TI) Scholarship</h1>
            <p>Scholarship for demonstrating strong academic and campus involvement</p>
        </div>
    </section>
    <section class="sec3">
    <img src="./assets/images/DHR.jpeg" width="300em"/>
        <div class="sec3cont">
            <h1>Dean's Honor Roll</h1>
            <p>Recognition for Excellence in Academics</p>
        </div>
    </section>
    <section class="sec4">
    <img src="./assets/images/ican.jpg" width="300em"/>
        <div class="sec5cont">
            <h1>Best Entrepreneur Idea Award</h1>
            <p>Won the Best Entrepreneur Idea Award for the most innovative business idea (+ 12000 INR Cash Price)</p>
        </div>
    </section>
    <section class="sec5">
    <div class="sec5cont">
            <h1>Student of the Year Awards</h1>
            <p>Won the Student of The Year Award twice(and many more awards and medals) for excellence in academics and co-curriculars</p>
        </div>
    <img src="./assets/images/SOTY.jpg" height="400em"/>
        
    </section>
  </div>
  </section>
    );
};

export default Awards;