import React from "react";
import "./App.css";
import logo from "./assets/logo.png";

const courses = [
  "Java Fundamental",
  "Python Fundamental",
  "JavaScript Fundamental",
];

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <img src={logo} alt="Logo" style={{ width: "120px" }} />

      <h1>Learning Platform</h1>
      <h2>Courses</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {courses.map((course, index) => (
          <li
            key={index}
            style={{
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          >
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
