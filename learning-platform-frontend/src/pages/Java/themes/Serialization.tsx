import React from "react";

const Serialization: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Java Serialization
    </h1>

    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What is Serialization?</h2>
    <p>Converting an object into a byte stream to save it or send it over a network.</p>

    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Example</h2>
    <pre><code>{`class Employee implements Serializable {
  int id;
  String name;
}`}</code></pre>
  </div>
);

export default Serialization;
