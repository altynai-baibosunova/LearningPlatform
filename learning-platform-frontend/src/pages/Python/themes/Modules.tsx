import React from "react";

const Modules: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Python Modules and Packages
    </h1>

    {/* 1. What are Modules */}
    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What are Modules</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Modules are Python files containing functions, classes, or variables.</li>
      <li>They allow code reuse and organization.</li>
      <li>Python has many built-in modules, and you can create your own.</li>
    </ul>

    {/* 2. Importing Modules */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Importing Modules</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><code>import module_name</code></li>
      <li><code>from module_name import function_name</code></li>
      <li><code>import module_name as alias</code></li>
    </ul>

    {/* 3. Packages */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. Packages</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Packages are collections of modules organized in directories with <code>__init__.py</code></li>
      <li>Helps manage large projects</li>
      <li>Import from packages using <code>from package.module import name</code></li>
    </ul>

    {/* 4. Standard Library */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>4. Standard Library</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Python comes with a rich standard library: <code>math, os, sys, datetime</code>, etc.</li>
      <li>Provides ready-made solutions without installing third-party packages</li>
    </ul>

    {/* 5. Example */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>5. Example</h2>
    <pre style={{ background: "#f3f4f6", padding: "15px", borderRadius: "5px", overflowX: "auto" }}>
{`# Using math module
import math
print(math.sqrt(16))  # Output: 4.0

# Custom module usage
# file: greetings.py
# def hello(name):
#     return f"Hello, {name}"

from greetings import hello
print(hello("Alice"))  # Output: Hello, Alice`}
    </pre>
  </div>
);

export default Modules;
