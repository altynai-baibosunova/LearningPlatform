import React from "react";

const OOP: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Python Object-Oriented Programming (OOP)
    </h1>

    {/* 1. What is OOP */}
    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What is OOP</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>Definition:</strong> OOP is a programming paradigm based on the concept of "objects", which contain data and methods.</li>
      <li><strong>Purpose:</strong> Helps organize code, promote reuse, and make programs easier to maintain.</li>
      <li><strong>Python Support:</strong> Python fully supports OOP concepts like classes, inheritance, and polymorphism.</li>
    </ul>

    {/* 2. Classes and Objects */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Classes and Objects</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>Class:</strong> A blueprint for creating objects. Defined using <code>class ClassName:</code></li>
      <li><strong>Object:</strong> An instance of a class, created using <code>obj = ClassName()</code></li>
      <li>Classes can contain attributes (variables) and methods (functions).</li>
    </ul>

    {/* 3. Attributes and Methods */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>3. Attributes and Methods</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li><strong>Instance Attributes:</strong> Belong to an object, defined in <code>__init__</code> method</li>
      <li><strong>Class Attributes:</strong> Shared across all instances of a class</li>
      <li><strong>Methods:</strong> Functions inside a class that operate on objects</li>
      <li><strong>Special Methods:</strong> Python provides built-in methods like <code>__str__</code>, <code>__repr__</code>, and <code>__init__</code></li>
    </ul>

    {/* 4. Inheritance */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>4. Inheritance</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Allows a class (child) to inherit attributes and methods from another class (parent)</li>
      <li>Promotes code reuse and simplifies code maintenance</li>
      <li>Syntax: <code>class ChildClass(ParentClass):</code></li>
    </ul>

    {/* 5. Encapsulation */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>5. Encapsulation</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Restrict access to certain components of an object using private (<code>_</code> or <code>__</code>) attributes</li>
      <li>Provides controlled access via getters and setters</li>
    </ul>

    {/* 6. Polymorphism */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>6. Polymorphism</h2>
    <ul style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
      <li>Objects of different classes can be treated as objects of a common superclass</li>
      <li>Methods can be overridden to provide class-specific behavior</li>
      <li>Supports operator overloading and method overloading</li>
    </ul>

    {/* 7. Example */}
    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>7. Example</h2>
    <pre style={{ background: "#f3f4f6", padding: "15px", borderRadius: "5px", overflowX: "auto" }}>
{`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound")

class Dog(Animal):
    def speak(self):
        print(f"{self.name} barks")

dog = Dog("Buddy")
dog.speak()  # Output: Buddy barks`}
    </pre>
  </div>
);

export default OOP;
