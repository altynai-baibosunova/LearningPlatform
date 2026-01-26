const Intro = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Java Introduction
    </h1>

    {/* 1. What is Java */}
    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What is Java</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>Definition of Java:</strong> Java is a platform-independent programming language used to create applications that can run on any device with a JVM.</li>
      <li><strong>History of Java:</strong> Java was created by James Gosling at Sun Microsystems in 1995.</li>
      <li><strong>Why Java is popular:</strong> It is robust, secure, portable, and widely used in enterprise, web, and mobile applications.</li>
    </ul>

    {/* 2. Java Features */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Java Features</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Platform independence (Write Once, Run Anywhere)</li>
      <li>High-level language</li>
      <li>Secure</li>
      <li>Robust</li>
      <li>Multithreaded</li>
      <li>Portable</li>
      <li>High performance</li>
    </ul>

    {/* 3. Java Architecture */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. Java Architecture</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>JDK (Java Development Kit)</li>
      <li>JRE (Java Runtime Environment)</li>
      <li>JVM (Java Virtual Machine)</li>
      <li>How Java code is compiled and executed</li>
    </ul>

    {/* 4. Java Program Structure */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>4. Java Program Structure</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Class structure</li>
      <li><code>main()</code> method</li>
      <li>Statements</li>
      <li>Comments</li>
      <li>Compilation & execution process</li>
    </ul>

    {/* 5. Basic Syntax Rules */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>5. Basic Syntax Rules</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Case sensitivity</li>
      <li>Class naming rules</li>
      <li>Method naming rules</li>
      <li>File naming rules</li>
      <li>Semicolons and braces</li>
    </ul>

    {/* 6. Variables */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>6. Variables</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>What is a variable</li>
      <li>Declaring variables</li>
      <li>Initializing variables</li>
      <li>Variable naming conventions</li>
    </ul>

    {/* 7. Data Types */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>7. Data Types</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Primitive data types: <code>int, double, float, char, boolean, byte, short, long</code></li>
      <li>Type casting (implicit & explicit)</li>
    </ul>

    {/* 8. Operators */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>8. Operators</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Arithmetic operators</li>
      <li>Relational operators</li>
      <li>Logical operators</li>
      <li>Assignment operators</li>
      <li>Unary operators</li>
    </ul>

    {/* 9. Input and Output */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>9. Input and Output</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><code>System.out.print()</code></li>
      <li><code>System.out.println()</code></li>
      <li>Using <code>Scanner</code> for user input</li>
    </ul>

    {/* 10. Control Statements */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>10. Control Statements</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Conditional statements: <code>if, if-else, switch</code></li>
      <li>Looping statements: <code>for, while, do-while</code></li>
      <li><code>break</code> and <code>continue</code></li>
    </ul>

    {/* 11. Arrays */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>11. Arrays</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>What is an array</li>
      <li>One-dimensional arrays</li>
      <li>Declaring and initializing arrays</li>
      <li>Accessing array elements</li>
    </ul>

    {/* 12. Keywords */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>12. Keywords</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Java reserved keywords</li>
      <li>Purpose of keywords</li>
    </ul>

    {/* 13. Command Line Arguments */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>13. Command Line Arguments</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Passing values to <code>main()</code></li>
      <li>Accessing arguments</li>
    </ul>
  </div>
);

export default Intro;
