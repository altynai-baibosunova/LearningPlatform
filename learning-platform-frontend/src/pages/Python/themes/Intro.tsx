import React from "react";

const Intro: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Python Introduction
    </h1>

    {/* 1. What is Python */}
    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What is Python</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>Definition:</strong> Python is a high-level, interpreted, and general-purpose programming language known for its simplicity and readability.</li>
      <li><strong>History:</strong> Created by Guido van Rossum and first released in 1991.</li>
      <li><strong>Popularity:</strong> Widely used in web development, data science, machine learning, automation, scripting, and more.</li>
    </ul>

    {/* 2. Python Features */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Python Features</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Easy to learn and read</li>
      <li>Interpreted language (no compilation needed)</li>
      <li>Dynamic typing</li>
      <li>Object-oriented and functional programming support</li>
      <li>Extensive standard library and third-party packages</li>
      <li>Cross-platform</li>
      <li>Community support and open source</li>
    </ul>

    {/* 3. Python Syntax Basics */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. Python Syntax Basics</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Indentation is used instead of braces</li>
      <li>Comments start with <code>#</code></li>
      <li>Variables are dynamically typed</li>
      <li>Statements end without semicolons (optional)</li>
    </ul>

    {/* 4. Data Types */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>4. Data Types</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Numeric: <code>int, float, complex</code></li>
      <li>Sequence: <code>list, tuple, range</code></li>
      <li>Text: <code>str</code></li>
      <li>Mapping: <code>dict</code></li>
      <li>Set: <code>set, frozenset</code></li>
      <li>Boolean: <code>bool</code></li>
      <li>NoneType: <code>None</code></li>
    </ul>

    {/* 5. Variables */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>5. Variables</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Variables are created when you assign a value</li>
      <li>Dynamic typing allows variable type to change</li>
      <li>Variable naming conventions follow <code>snake_case</code></li>
    </ul>

    {/* 6. Operators */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>6. Operators</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Arithmetic operators: <code>+, -, *, /, %, **, //</code></li>
      <li>Comparison operators: <code>==, !=, &gt;, &lt;, &gt;=, &lt;=</code></li>
      <li>Logical operators: <code>and, or, not</code></li>
      <li>Assignment operators: <code>=, +=, -=, *=, /=</code></li>
    </ul>

    {/* 7. Control Statements */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>7. Control Statements</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Conditional: <code>if, if-else, elif</code></li>
      <li>Loops: <code>for, while</code></li>
      <li>Loop control: <code>break, continue, pass</code></li>
    </ul>

    {/* 8. Functions */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>8. Functions</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Defined using <code>def</code> keyword</li>
      <li>Can accept arguments and return values</li>
      <li>Support for default, keyword, and variable-length arguments</li>
    </ul>

    {/* 9. Modules and Packages */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>9. Modules and Packages</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Modules are Python files with functions, classes, or variables</li>
      <li>Packages are collections of modules organized in directories</li>
      <li>Import modules using <code>import module_name</code></li>
    </ul>

    {/* 10. Input and Output */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>10. Input and Output</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Print output using <code>print()</code></li>
      <li>Take input using <code>input()</code></li>
    </ul>
  </div>
);

export default Intro;


// const Intro: React.FC = () => {
//   return (
//     <div>
//       <h2>Introduction to Python</h2>
//       <p>
//         Python is a high-level, interpreted programming language known for its simplicity
//         and readability. It was created by Guido van Rossum and first released in 1991.
//       </p>
//       <p>
//         Python is widely used in web development, data science, machine learning,
//         automation, and more.
//       </p>
//     </div>
//   );
// };
//
// export default Intro;