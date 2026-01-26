// src/pages/JavaScript/JavaScriptThemePage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { javascriptThemes } from "./javascriptThemesContent";

const JavaScriptThemePage: React.FC = () => {
  const { themeId } = useParams<{ themeId: string }>();
  const theme = javascriptThemes.find((t) => t.id === themeId);

  if (!theme) {
    return (
      <div>
        <Navbar />
        <div style={{ textAlign: "center", padding: "40px" }}>
          <h2 style={{ color: "#dc2626" }}>Lesson not found</h2>
          <p>The lesson you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {theme.content}
    </div>
  );
};

export default JavaScriptThemePage;
