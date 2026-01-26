import React from "react";

const Java8: React.FC = () => (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ fontSize: "42px", marginBottom: "30px", color: "#1e40af", textAlign: "center" }}>
      Java 8 Features
    </h1>

    <h2 style={{ fontSize: "28px", marginBottom: "12px", color: "#2563eb" }}>1. Lambda Expressions</h2>
    <pre><code>{`List<Integer> nums = Arrays.asList(1,2,3,4);
nums.forEach(n -> System.out.println(n));`}</code></pre>

    <h2 style={{ fontSize: "28px", marginTop: "25px", marginBottom: "12px", color: "#2563eb" }}>2. Streams</h2>
    <pre><code>{`List<String> names = Arrays.asList("Altynai","John");
names.stream()
     .filter(n -> n.startsWith("A"))
     .forEach(System.out::println);`}</code></pre>
  </div>
);

export default Java8;
