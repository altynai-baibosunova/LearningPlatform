import React from "react";

const Swing: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Java Swing (GUI)
    </h1>

    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. What is Swing?</h2>
    <p>Java Swing is used to create graphical user interfaces (GUIs).</p>

    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Example</h2>
    <pre><code>{`JFrame frame = new JFrame("My Window");
JButton button = new JButton("Click Me");
frame.add(button);
frame.setSize(300, 200);
frame.setVisible(true);`}</code></pre>
  </div>
);

export default Swing;
