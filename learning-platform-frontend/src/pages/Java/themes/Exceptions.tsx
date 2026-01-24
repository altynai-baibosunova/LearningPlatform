import React from "react";

const Exceptions: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Exception Handling
    </h1>

    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What is an Exception?</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>An event that disrupts program execution.</li>
      <li>Occurs at runtime.</li>
    </ul>

    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Types</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Checked</li>
      <li>Unchecked</li>
      <li>Errors</li>
    </ul>
  </div>
);

export default Exceptions;
