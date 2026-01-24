// src/pages/JavaScript/themes/Variables.tsx
import React from "react";

const Variables: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      JavaScript Variables
    </h1>

    {/* 1. What is a Variable */}
    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What is a Variable</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>A variable is a container for storing data values.</li>
      <li>It can hold different types of data such as numbers, strings, or objects.</li>
      <li>Variables allow you to reuse values in your program.</li>
    </ul>

    {/* 2. Declaring Variables */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Declaring Variables</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><code>var</code>: function-scoped, can be redeclared, older style</li>
      <li><code>let</code>: block-scoped, cannot be redeclared in the same scope</li>
      <li><code>const</code>: block-scoped, cannot be reassigned, used for constants</li>
    </ul>

    {/* 3. Variable Naming Rules */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. Variable Naming Rules</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Names must start with a letter, underscore (_), or dollar sign ($)</li>
      <li>Cannot start with a number</li>
      <li>Case-sensitive</li>
      <li>Cannot use reserved keywords like <code>let</code>, <code>var</code>, <code>function</code></li>
    </ul>

    {/* 4. Initializing Variables */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>4. Initializing Variables</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Assign a value to a variable at the time of declaration: <code>let x = 5;</code></li>
      <li>Variables can also be declared first, then assigned later:</li>
      <li><code>let y;</code> <br/> <code>y = 10;</code></li>
    </ul>

    {/* 5. Dynamic Typing */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>5. Dynamic Typing</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>JavaScript is dynamically typed, so a variable can hold different types at different times</li>
      <li>Example:</li>
      <ul>
        <li><code>let a = 10;</code></li>
        <li><code>a = "Hello"; // valid</code></li>
      </ul>
    </ul>

    {/* 6. Scope of Variables */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>6. Scope of Variables</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><code>var</code> has function scope</li>
      <li><code>let</code> and <code>const</code> have block scope</li>
      <li>Scope determines where the variable is accessible in your code</li>
    </ul>

    {/* 7. Constants */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>7. Constants</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Declared using <code>const</code></li>
      <li>Must be initialized at the time of declaration</li>
      <li>Value cannot be reassigned later</li>
      <li>Used for fixed values such as configuration or mathematical constants</li>
    </ul>
  </div>
);

export default Variables;
