import React from "react";
import { Link } from "react-router-dom";

const JavaScriptMainPage: React.FC = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1>JavaScript Learning Path</h1>
      <p>Select a theme to start learning JavaScript:</p>
      <ul>
        <li><Link to="themes/Theme1_Introduction">Introduction</Link></li>
        <li><Link to="themes/Theme2_Basics">Basics</Link></li>
        <li><Link to="themes/Theme3_ControlFlow">Control Flow</Link></li>
        <li><Link to="themes/Theme4_Functions">Functions</Link></li>
        <li><Link to="themes/Theme5_ArraysObjects">Arrays & Objects</Link></li>
        <li><Link to="themes/Theme6_DOM">DOM</Link></li>
        <li><Link to="themes/Theme7_Async">Async Programming</Link></li>
      </ul>
    </div>
  );
};

export default JavaScriptMainPage;
