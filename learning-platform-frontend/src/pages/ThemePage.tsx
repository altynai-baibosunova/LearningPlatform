// src/pages/ThemePage.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { themes, Theme } from "./themesContent";

const ThemePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const themeIndex = Number(id) - 1;
  const theme: Theme | undefined = themes[themeIndex];

  if (!theme) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Theme Not Found</h1>
        <Link to="/java" className="text-blue-500 underline">
          Back to Java Course
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{theme.title}</h1>

      {theme.content.map((line: string, i: number) => {
        // Simple code detection
        const isCodeBlock = line.startsWith("public") || line.startsWith("int") || line.startsWith("class") || line.startsWith("static") || line.startsWith("System") || line.startsWith("for") || line.startsWith("try") || line.startsWith("import");

        // Key points
        const isKeyPoint = line.startsWith("✅");

        return (
          <p
            key={i}
            className={`mb-3 whitespace-pre-line ${
              isCodeBlock ? "bg-gray-100 font-mono p-3 rounded" : ""
            } ${isKeyPoint ? "text-green-600 font-semibold flex items-center gap-2" : ""}`}
          >
            {line}
          </p>
        );
      })}

      <Link
        to="/java"
        className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Back to Java Course
      </Link>
    </div>
  );
};

export default ThemePage;
