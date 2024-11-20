import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <img src="/images/mainwall2.jpg" alt="Guardian the Superhero" className="about-image" />
        <div className="about-content">
          <h1>About Guardian</h1>
          <p>
            Guardian emerged from the shadows to become the beacon of hope in tumultuous times. With unparalleled strength, unwavering dedication, and a heart full of compassion, Guardian commits to addressing the grievances of the common people. Whether it's combating injustice, mediating conflicts, or uplifting communities, Guardian is always ready to serve.
          </p>
          <p>
            Our mission is to provide a platform where every voice matters. By logging your grievances, you empower Guardian to act, ensuring that no concern goes unnoticed and no plea for help is ignored.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
