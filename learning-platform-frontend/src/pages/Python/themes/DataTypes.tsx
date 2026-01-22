import React from "react";

const DataTypes: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Python Data Types
    </h1>

    {/* 1. What are Data Types */}
    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What are Data Types</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Data types define the kind of value a variable holds.</li>
      <li>Python is dynamically typed, so variables can change type at runtime.</li>
      <li>Understanding data types is crucial for operations and memory usage.</li>
    </ul>

    {/* 2. Numeric Types */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Numeric Types</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>int:</strong> Integer numbers, e.g., <code>10, -5</code></li>
      <li><strong>float:</strong> Floating-point numbers, e.g., <code>3.14, -0.5</code></li>
      <li><strong>complex:</strong> Complex numbers with real and imaginary parts, e.g., <code>2 + 3j</code></li>
    </ul>

    {/* 3. Sequence Types */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. Sequence Types</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>list:</strong> Ordered, mutable collection, e.g., <code>[1, 2, 3]</code></li>
      <li><strong>tuple:</strong> Ordered, immutable collection, e.g., <code>(1, 2, 3)</code></li>
      <li><strong>range:</strong> Represents a sequence of numbers, e.g., <code>range(5)</code></li>
    </ul>

    {/* 4. Text Type */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>4. Text Type</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>str:</strong> String of characters, e.g., <code>"Hello, Python"</code></li>
    </ul>

    {/* 5. Mapping Type */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>5. Mapping Type</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>dict:</strong> Key-value pairs, e.g., <code>{"{ 'name': 'Alice', 'age': 25 }"}</code></li>
    </ul>

    {/* 6. Set Types */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>6. Set Types</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>set:</strong> Unordered collection of unique items, e.g., <code>{`{1, 2, 3}`}</code></li>
      <li><strong>frozenset:</strong> Immutable version of set</li>
    </ul>

    {/* 7. Boolean and None */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>7. Boolean and None</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>bool:</strong> True or False values</li>
      <li><strong>NoneType:</strong> Represents the absence of a value, <code>None</code></li>
    </ul>

    {/* 8. Example */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>8. Example</h2>
    <pre style={{ background: "#f3f4f6", padding: "15px", borderRadius: "5px", overflowX: "auto" }}>
{`x = 10          # int
y = 3.14        # float
name = "Alice"  # str
is_active = True  # bool
numbers = [1, 2, 3]  # list
person = {'age': 25, 'name': 'Bob'}  # dict
unique = {1, 2, 3}  # set
nothing = None    # NoneType`}
    </pre>
  </div>
);

export default DataTypes;
