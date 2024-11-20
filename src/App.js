import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import GrievanceSubmissionPage from "./pages/GrievanceSubmission/GrievanceSubmissionPage";
import "./App.css";
import ViewGrievancesPage from "./pages/ViewGrievance/ViewGrievancesPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/submit" element={<GrievanceSubmissionPage />} />
          <Route path="/View" element={<ViewGrievancesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
