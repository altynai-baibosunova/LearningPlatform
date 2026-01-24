// src/pages/JavaScript/themes/Functions.tsx
import React from "react";

const Functions: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      JavaScript Functions
    </h1>

    {/* 1. What is a Function */}
    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What is a Function</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>A function is a reusable block of code that performs a task.</li>
      <li>Can take parameters and return a value.</li>
    </ul>

    {/* 2. Types of Functions */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Types of Functions</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Function Declaration:</li>
      <ul>
        <li><code>{`function greet(name) { return "Hello " + name; }`}</code></li>
      </ul>
      <li>Function Expression:</li>
      <ul>
        <li><code>{`const greet = function(name) { return "Hello " + name; };`}</code></li>
      </ul>
      <li>Arrow Functions (ES6+):</li>
      <ul>
        <li><code>{`const greet = (name) => "Hello " + name;`}</code></li>
      </ul>
    </ul>

    {/* 3. Parameters and Arguments */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. Parameters and Arguments</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Parameters are variables listed in the function definition.</li>
      <li>Arguments are actual values passed to the function.</li>
      <li>Default parameters example: <code>{`function greet(name = "Guest") { return "Hello " + name; }`}</code></li>
    </ul>

    {/* 4. Return Statement */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>4. Return Statement</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Functions can return values using <code>{`return`}</code>.</li>
      <li>Example: <code>{`function sum(a, b) { return a + b; }`}</code></li>
    </ul>

    {/* 5. Function Scope */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>5. Function Scope</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Variables declared inside a function are not accessible outside.</li>
      <li>Example:</li>
      <ul>
        <li><code>{`function test() { let x = 5; }`}</code></li>
        <li><code>{`console.log(x); // Error: x is not defined`}</code></li>
      </ul>
    </ul>

    {/* 6. Immediately Invoked Function Expressions (IIFE) */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>6. IIFE</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>A function that runs immediately after being defined.</li>
      <li>Example: <code>{`(function(){ console.log("Hello"); })();`}</code></li>
      <li>Used to create private scope for variables.</li>
    </ul>
  </div>
);

export default Functions;
