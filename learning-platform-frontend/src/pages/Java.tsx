// src/pages/Java.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { themes, Theme } from "./themesContent";

const Java: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Java Course</h1>
      {themes.map((theme: Theme, index: number) => (
        <button
          key={index}
          className="block w-full text-left p-4 mb-2 border rounded hover:bg-gray-100"
          onClick={() => navigate(`/java/theme/${index + 1}`)}
        >
          {theme.title}
        </button>
      ))}
    </div>
  );
};

export default Java;
