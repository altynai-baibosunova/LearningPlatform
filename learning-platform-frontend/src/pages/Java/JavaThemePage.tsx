import React from "react";
import { useParams } from "react-router-dom";
import { javaThemes } from "./javaThemesContent";

const JavaThemePage: React.FC = () => {
  const { themeId } = useParams<{ themeId: string }>();
  const theme = javaThemes.find(t => t.id === themeId);

  if (!theme) return <div>Theme not found</div>;

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "36px", color: "#1e40af", marginBottom: "20px", textAlign: "center" }}>
        {theme.title}
      </h1>
      {theme.content} {/* ✅ This renders the correct theme component */}
    </div>
  );
};

export default JavaThemePage;
