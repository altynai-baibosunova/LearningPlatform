// src/pages/JavaScript/themes/Arrays.tsx
import React from "react";

const Arrays: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      JavaScript Arrays
    </h1>

    {/* 1. What is an Array */}
    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What is an Array</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>An array is a special variable that can hold multiple values in a single variable.</li>
      <li>Arrays are zero-indexed, meaning the first element is at index 0.</li>
      <li>They can store elements of any type: numbers, strings, objects, or even other arrays.</li>
    </ul>

    {/* 2. Creating Arrays */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Creating Arrays</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Using array literal: <code>let fruits = ["Apple", "Banana", "Cherry"];</code></li>
      <li>Using constructor: <code>let numbers = new Array(1, 2, 3);</code></li>
    </ul>

    {/* 3. Accessing Array Elements */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. Accessing Array Elements</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Access element by index: <code>fruits[0] // "Apple"</code></li>
      <li>Change element: <code>fruits[1] = "Mango";</code></li>
      <li>Array length: <code>fruits.length</code></li>
    </ul>

    {/* 4. Common Array Methods */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>4. Common Array Methods</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><code>push()</code> – add element at the end</li>
      <li><code>pop()</code> – remove last element</li>
      <li><code>shift()</code> – remove first element</li>
      <li><code>unshift()</code> – add element at the beginning</li>
      <li><code>slice()</code> – extract a portion of the array</li>
      <li><code>splice()</code> – remove or replace elements</li>
      <li><code>forEach(), map(), filter(), reduce()</code> – array iteration and manipulation</li>
    </ul>

    {/* 5. Multidimensional Arrays */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>5. Multidimensional Arrays</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Arrays can contain other arrays as elements</li>
      <li>Example: <code>let matrix = [[1,2], [3,4]];</code></li>
      <li>Access element: <code>matrix[1][0] // 3</code></li>
    </ul>
  </div>
);

export default Arrays;
