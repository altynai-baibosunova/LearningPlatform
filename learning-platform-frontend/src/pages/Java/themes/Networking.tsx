import React from "react";

const Networking: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Java Networking
    </h1>

    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. Sockets</h2>
    <p>Java allows communication over TCP/IP using Sockets.</p>

    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Example</h2>
    <pre><code>{`Socket s = new Socket("localhost", 5000);
OutputStream out = s.getOutputStream();`}</code></pre>
  </div>
);

export default Networking;
