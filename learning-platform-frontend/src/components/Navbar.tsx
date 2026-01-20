// src/components/Navbar.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

// Courses with className for styling buttons
const courses = [
  { name: "Java Course", className: "java-course", path: "/java" },
  { name: "Python Course", className: "python-course", path: "/python" },
  { name: "JavaScript Course", className: "js-course", path: "/javascript" },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Learning Platform</h1>
      <p className="navbar-subtitle">Select a course to start learning:</p>

      <div className="course-buttons">
        {courses.map((course) => (
          <button
            key={course.name}
            className={`course-button ${course.className}`}
            onClick={() => navigate(course.path)}
          >
            {course.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
