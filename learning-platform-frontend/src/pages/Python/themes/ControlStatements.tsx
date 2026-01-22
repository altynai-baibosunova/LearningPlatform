import React from "react";

const ControlStatements: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Python Control Statements
    </h1>

    {/* 1. Conditional Statements */}
    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. Conditional Statements</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>if:</strong> Executes code if a condition is True</li>
      <li><strong>if-else:</strong> Executes one block if True, another if False</li>
      <li><strong>elif:</strong> Checks multiple conditions</li>
    </ul>

    {/* 2. Loops */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Loops</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>for loop:</strong> Iterates over a sequence (list, tuple, string, etc.)</li>
      <li><strong>while loop:</strong> Repeats code as long as a condition is True</li>
    </ul>

    {/* 3. Loop Control Statements */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. Loop Control Statements</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>break:</strong> Exits the loop immediately</li>
      <li><strong>continue:</strong> Skips current iteration and continues with next</li>
      <li><strong>pass:</strong> Does nothing, acts as a placeholder</li>
    </ul>

    {/* 4. Example */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>4. Example</h2>
    <pre style={{ background: "#f3f4f6", padding: "15px", borderRadius: "5px", overflowX: "auto" }}>
{`# Conditional
x = 10
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is 5")
else:
    print("x is less than 5")

# Loop
for i in range(3):
    print(i)

# Loop control
for i in range(5):
    if i == 2:
        continue
    elif i == 4:
        break
    print(i)`}
    </pre>
  </div>
);

export default ControlStatements;
