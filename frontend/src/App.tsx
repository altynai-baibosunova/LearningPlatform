import React from "react";

/* ---------- TYPES ---------- */
type Course = {
  id: number;
  title: string;
  description: string;
  classes: string[];
};

/* ---------- DATA ---------- */
const courses: Course[] = [
  {
    id: 1,
    title: "Java Fundamental",
    description: "Learn Java basics, OOP, collections, and exceptions",
    classes: [
      "Introduction to Java",
      "Variables & Data Types",
      "OOP (Encapsulation, Inheritance)",
      "Collections Framework",
      "Exception Handling",
    ],
  },
  {
    id: 2,
    title: "Python Fundamental",
    description: "Learn Python syntax, data structures, and scripting",
    classes: [
      "Python Basics",
      "Lists & Dictionaries",
      "Functions",
      "Loops & Conditions",
      "File Handling",
    ],
  },
  {
    id: 3,
    title: "JavaScript Fundamental",
    description: "Learn JavaScript basics, ES6, and frontend logic",
    classes: [
      "JavaScript Basics",
      "Variables (var, let, const)",
      "Functions & Arrow Functions",
      "Promises & Async/Await",
      "DOM Manipulation",
    ],
  },
];

/* ---------- COMPONENT ---------- */
const App: React.FC = () => {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>📚 LearnSphere</h1>
      <p>Select a course to view its classes</p>

      <div style={{ display: "flex", gap: "20px" }}>
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              width: "280px",
            }}
          >
            <h3>{course.title}</h3>
            <p>{course.description}</p>

            <h4>Classes:</h4>
            <ul>
              {course.classes.map((lesson, index) => (
                <li key={index}>{lesson}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
