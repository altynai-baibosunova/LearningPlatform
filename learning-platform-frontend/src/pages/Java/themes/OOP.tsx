import React from "react";

const OOP: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Object-Oriented Programming
    </h1>

    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What is OOP</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>OOP is a programming paradigm based on objects.</li>
      <li>Objects represent real-world entities.</li>
      <li>Each object has state and behavior.</li>
    </ul>

    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Class and Object</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Class is a blueprint for creating objects.</li>
      <li>Object is an instance of a class.</li>
      <li>Created using the <code>new</code> keyword.</li>
    </ul>

    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. Four Pillars of OOP</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>Encapsulation:</strong> Hiding data.</li>
      <li><strong>Inheritance:</strong> One class extends another.</li>
      <li><strong>Polymorphism:</strong> One method, many forms.</li>
      <li><strong>Abstraction:</strong> Hiding implementation.</li>
    </ul>
  </div>
);

export default OOP;
