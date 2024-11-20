import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ViewGrievancesPage.css";

const ViewGrievancesPage = () => {
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    const storedGrievances = JSON.parse(localStorage.getItem("grievances")) || [];
    setGrievances(storedGrievances);
  }, []);

  return (
    <div className="view-grievances-page">
      <h2>Submitted Grievances</h2>
      {grievances.length === 0 ? (
        <p>No grievances submitted yet!</p>
      ) : (
        <ul>
          {grievances.map((grievance, index) => (
            <li key={index}>
              <h3>{grievance.subject}</h3>
              <p><strong>Name:</strong> {grievance.name}</p>
              <p><strong>Email:</strong> {grievance.email}</p>
              <p><strong>Description:</strong> {grievance.description}</p>
              <p><strong>Status:</strong> {grievance.status}</p>
              <p><strong>Date:</strong> {grievance.date}</p>
            </li>
          ))}
        </ul>
      )}
      <Link to="/submit">Submit Another Grievance</Link>
    </div>
  );
};

export default ViewGrievancesPage;
