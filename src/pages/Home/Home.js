import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    navigate("/submit");
  };

  return (
    <div className="home">
      <div className="overlay">
        <div className="hero-content">
          <h1>Welcome to Guardian's Grievance Hub</h1>
          <p>
            In a world where challenges and injustices often go unheard, Guardian stands as your vigilant protector. Log your grievances, and let our hero ensure your voice is heard and your concerns are addressed.
          </p>
          <button className="cta-button" onClick={handleSubmitClick}>
            Submit Your Grievance
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
