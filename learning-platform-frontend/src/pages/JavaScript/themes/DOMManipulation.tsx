// src/pages/JavaScript/themes/DOMManipulation.tsx
import React from "react";

const DOMManipulation: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      DOM Manipulation
    </h1>

    {/* 1. What is the DOM */}
    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What is the DOM</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>DOM stands for Document Object Model.</li>
      <li>It represents the HTML structure as a tree of objects.</li>
      <li>JavaScript can interact with these objects to modify content, style, or structure.</li>
    </ul>

    {/* 2. Selecting Elements */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Selecting Elements</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><code>document.getElementById()</code> - selects an element by ID</li>
      <li><code>document.getElementsByClassName()</code> - selects elements by class</li>
      <li><code>document.getElementsByTagName()</code> - selects elements by tag</li>
      <li><code>document.querySelector()</code> - selects first element matching a CSS selector</li>
      <li><code>document.querySelectorAll()</code> - selects all elements matching a CSS selector</li>
    </ul>

    {/* 3. Modifying Elements */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. Modifying Elements</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Change content with <code>element.textContent</code> or <code>element.innerHTML</code></li>
      <li>Change attributes with <code>element.setAttribute()</code></li>
      <li>Change styles with <code>element.style.property</code></li>
    </ul>

    {/* 4. Adding and Removing Elements */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>4. Adding and Removing Elements</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Create new elements with <code>document.createElement()</code></li>
      <li>Add elements to the DOM with <code>parent.appendChild()</code></li>
      <li>Remove elements with <code>parent.removeChild()</code> or <code>element.remove()</code></li>
    </ul>

    {/* 5. Traversing the DOM */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>5. Traversing the DOM</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Access children with <code>element.children</code></li>
      <li>Access parent with <code>element.parentNode</code></li>
      <li>Access siblings with <code>element.nextElementSibling</code> or <code>element.previousElementSibling</code></li>
    </ul>

    {/* 6. Classes and Attributes */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>6. Classes and Attributes</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Add/remove classes with <code>element.classList.add()</code> / <code>element.classList.remove()</code></li>
      <li>Check for a class with <code>element.classList.contains()</code></li>
      <li>Toggle class with <code>element.classList.toggle()</code></li>
    </ul>
  </div>
);

export default DOMManipulation;


// import React from "react";
//
// const WhatIsJavaScript: React.FC = () => {
//   return (
//     <div style={{ padding: "24px" }}>
//       <h2>What is JavaScript?</h2>
//       <p>
//         JavaScript is a versatile, high-level programming language primarily used
//         to make web pages interactive. It can run in the browser and on the server.
//       </p>
//     </div>
//   );
// };
//
// export default WhatIsJavaScript;
