import React from "react";

const Strings: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Java Strings
    </h1>

    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What is a String?</h2>
    <p>Sequence of characters stored in <code>String</code> objects.</p>

    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Common Operations</h2>
    <ul>
      <li>Concatenation: <code>+</code></li>
      <li>Length: <code>str.length()</code></li>
      <li>Substring: <code>str.substring(0,3)</code></li>
      <li>Comparison: <code>str.equals("Hello")</code></li>
      <li>Upper/Lower case: <code>str.toUpperCase()</code>, <code>str.toLowerCase()</code></li>
    </ul>
  </div>
);

export default Strings;
