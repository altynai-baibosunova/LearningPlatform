import React from "react";

const InputOutput: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Python Input and Output
    </h1>

    {/* 1. Printing Output */}
    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. Printing Output</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Use <code>print()</code> to display text, variables, or results.</li>
      <li>Supports multiple arguments separated by commas.</li>
      <li>Can format strings using f-strings, <code>str.format()</code>, or %-formatting.</li>
    </ul>

    {/* 2. Taking Input */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Taking Input</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Use <code>input()</code> to get user input as a string.</li>
      <li>Convert input to other types using <code>int()</code>, <code>float()</code>, etc.</li>
      <li>Prompt the user with a message: <code>input("Enter your name: ")</code></li>
    </ul>

    {/* 3. File I/O */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. File Input/Output</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Open files using <code>open("filename", "mode")</code> where mode can be <code>"r"</code>, <code>"w"</code>, <code>"a"</code></li>
      <li>Read using <code>read()</code>, <code>readline()</code>, or <code>readlines()</code></li>
      <li>Write using <code>write()</code> or <code>writelines()</code></li>
      <li>Close files using <code>close()</code> or with <code>with</code> statement</li>
    </ul>

    {/* 4. Example */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>4. Example</h2>
    <pre style={{ background: "#f3f4f6", padding: "15px", borderRadius: "5px", overflowX: "auto" }}>
{`# Printing
name = "Alice"
age = 25
print(f"{name} is {age} years old")  # Output: Alice is 25 years old

# Input
user_input = input("Enter a number: ")
num = int(user_input)
print("Double:", num*2)

# File I/O
with open("example.txt", "w") as file:
    file.write("Hello, Python!")
`}
    </pre>
  </div>
);

export default InputOutput;
