import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const courses = [
  { name: "Java Course", className: "java-course", path: "/java" },
  { name: "Python Course", className: "python-course", path: "/python" },
  { name: "JavaScript Course", className: "js-course", path: "/javascript" },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h1 className="navbar-title">Learning Platform</h1>
      <div className="navbar-subtitle">
        Select a course to start learning:
      </div>

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
    </div>
  );
};

export default Navbar;
