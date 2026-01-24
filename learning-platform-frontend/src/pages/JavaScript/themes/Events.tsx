// src/pages/JavaScript/themes/Events.tsx
import React from "react";

const Events: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      JavaScript Events
    </h1>

    {/* 1. What is an Event */}
    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What is an Event</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>An event is an action or occurrence in the browser, e.g., clicks, mouse moves, or key presses.</li>
    </ul>

    {/* 2. Event Types */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Event Types</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Mouse events: click, dblclick, mouseover</li>
      <li>Keyboard events: keydown, keyup, keypress</li>
      <li>Form events: submit, change, focus, blur</li>
    </ul>

    {/* 3. Adding Event Listeners */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. Adding Event Listeners</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><code>{`element.onclick = function() { console.log("Clicked"); };`}</code></li>
      <li><code>{`element.addEventListener("click", function() { console.log("Clicked"); });`}</code></li>
      <li>Multiple listeners can be attached using addEventListener.</li>
    </ul>
  </div>
);

export default Events;

// import React from "react";
//
// const WhereIsJavaScriptUsed: React.FC = () => (
//   <div style={{ padding: "24px" }}>
//     <h2>Where is JavaScript Used?</h2>
//     <p>Web development, mobile apps, desktop apps, server-side development, and even game development.</p>
//   </div>
// );
//
// export default WhereIsJavaScriptUsed;
