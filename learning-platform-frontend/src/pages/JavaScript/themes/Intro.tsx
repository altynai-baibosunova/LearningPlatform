// src/pages/JavaScript/themes/Intro.tsx
import React from "react";

const Intro = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      JavaScript Introduction
    </h1>

    {/* 1. What is JavaScript */}
    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What is JavaScript</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>Definition:</strong> JavaScript is a versatile, high-level programming language primarily used to make web pages interactive.</li>
      <li><strong>Purpose:</strong> Enables dynamic content updates, interactive forms, animations, and handling user events.</li>
      <li><strong>Where it runs:</strong> Runs in browsers, on servers (Node.js), and in many applications.</li>
    </ul>

    {/* 2. History of JavaScript */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. History of JavaScript</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Created by Brendan Eich at Netscape in 1995.</li>
      <li>Initially called Mocha → LiveScript → JavaScript.</li>
      <li>Became standardized as ECMAScript by ECMA International.</li>
    </ul>

    {/* 3. Key Features */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. Key Features</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Lightweight, interpreted language</li>
      <li>Event-driven and functional programming support</li>
      <li>Dynamic typing</li>
      <li>Object-oriented capabilities</li>
      <li>Runs in client and server environments</li>
    </ul>

    {/* 4. JavaScript Use Cases */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>4. JavaScript Use Cases</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Interactive web pages (DOM manipulation)</li>
      <li>Web applications and single-page apps (SPAs)</li>
      <li>Mobile app development (React Native, Ionic)</li>
      <li>Server-side development (Node.js)</li>
      <li>Game development and animations</li>
    </ul>

    {/* 5. JavaScript Engines */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>5. JavaScript Engines</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>V8 (Google Chrome, Node.js)</li>
      <li>SpiderMonkey (Mozilla Firefox)</li>
      <li>JavaScriptCore / Nitro (Safari)</li>
      <li>Chakra (Microsoft Edge Legacy)</li>
    </ul>

    {/* 6. How JavaScript Works */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>6. How JavaScript Works</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>JavaScript code is interpreted or just-in-time compiled by engines.</li>
      <li>Executed line by line in a single-threaded environment (event loop handles async operations).</li>
      <li>Interacts with HTML/CSS through the Document Object Model (DOM).</li>
    </ul>

    {/* 7. Tools for JavaScript Development */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>7. Tools for JavaScript Development</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Code editors: VSCode, Sublime Text, Atom</li>
      <li>Browser developer tools</li>
      <li>Node.js and npm for server-side and package management</li>
      <li>Frameworks & libraries: React, Vue, Angular, jQuery</li>
    </ul>
  </div>
);

export default Intro;
