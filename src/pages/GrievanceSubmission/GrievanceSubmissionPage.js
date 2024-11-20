import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GrievanceSubmissionPage.css";

const GrievanceSubmissionPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const grievances = JSON.parse(localStorage.getItem("grievances")) || [];
      grievances.push({
        ...formData,
        status: "Pending",
        date: new Date().toLocaleString(),
      });
      localStorage.setItem("grievances", JSON.stringify(grievances));

      setLoading(false);
      alert("Grievance submitted successfully!");
      setFormData({ name: "", email: "", subject: "", description: "" });
      navigate("/View");
    }, 2000);
  };

  return (
    <div className="grievance-submission-page">
      <h2>Submit Your Grievance</h2>
      <p className="intro-text">
        If you have a problem that needs our superhero's attention, please fill out the form below. Together, we can make a difference!
      </p>
      <form onSubmit={handleSubmit} className="grievance-form">
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Describe your grievance"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? <div className="loader"></div> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default GrievanceSubmissionPage;
