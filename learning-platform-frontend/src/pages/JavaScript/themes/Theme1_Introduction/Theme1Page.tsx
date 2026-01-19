import React from "react";
import { Link } from "react-router-dom";

const Theme1Page: React.FC = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1>Theme 1: Introduction to JavaScript</h1>
      <ul>
        <li><Link to="materials/WhatIsJavaScript">What is JavaScript?</Link></li>
        <li><Link to="materials/HistoryOfJavaScript">History of JavaScript</Link></li>
        <li><Link to="materials/WhereIsJavaScriptUsed">Where is JavaScript Used?</Link></li>
        <li><Link to="materials/JavaScriptVsHTMLCSS">JavaScript vs HTML & CSS</Link></li>
      </ul>
    </div>
  );
};

export default Theme1Page;
