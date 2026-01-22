import React from "react";

const Functions: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Python Functions
    </h1>

    {/* 1. What are Functions */}
    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What are Functions</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Functions are reusable blocks of code that perform a specific task.</li>
      <li>They help avoid repetition and improve code readability.</li>
      <li>Defined using the <code>def</code> keyword.</li>
    </ul>

    {/* 2. Function Syntax */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Function Syntax</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><code>def function_name(parameters):</code> followed by an indented block of code</li>
      <li>Optional <code>return</code> statement to send a result back</li>
    </ul>

    {/* 3. Arguments */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. Arguments</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Positional arguments</li>
      <li>Keyword arguments</li>
      <li>Default arguments</li>
      <li>Variable-length arguments using <code>*args</code> and <code>**kwargs</code></li>
    </ul>

    {/* 4. Lambda Functions */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>4. Lambda Functions</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Anonymous, single-line functions</li>
      <li>Defined using <code>lambda parameters: expression</code></li>
      <li>Useful for small operations like sorting or mapping</li>
    </ul>

    {/* 5. Scope */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>5. Scope</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Local scope: variables inside a function</li>
      <li>Global scope: variables outside any function</li>
      <li>Use <code>global</code> keyword to modify global variables inside a function</li>
    </ul>

    {/* 6. Example */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>6. Example</h2>
    <pre style={{ background: "#f3f4f6", padding: "15px", borderRadius: "5px", overflowX: "auto" }}>
{`def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # Output: Hello, Alice!

square = lambda x: x**2
print(square(5))  # Output: 25`}
    </pre>
  </div>
);

export default Functions;
