import React from "react";
import "./Resume.css";

const Resume = () => {
    return(

    <section id="resume" className="resume-container">
        <h1>Download Resume</h1>
        <div className="resume1">
        <div className="resume">
            <div className="container2">
                <img src="./assets/images/website.png" className="worker" width="300em"/>
                <div className="cont">
                <h2>Download Resume Now!</h2>
                <p>Everything you need to know about me, from my skills and achievements to my professional journey, is right here. For a concise summary of my expertise and experience, download my resume below.</p>
                <button className="download"><a className="res" href="./assets/resume.pdf" download="./assets/resume.pdf">Download Resume <img src="./assets/images/pdf.png" width="25em"/></a></button>
                </div>
            </div>
        </div>
        </div>
  </section>
    );
};

export default Resume;