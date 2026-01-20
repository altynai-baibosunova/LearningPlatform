import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h2>Welcome to LearnSphere!</h2>
        <p>Choose a course to start learning:</p>
      </div>
    </div>
  );
};

export default HomePage;
