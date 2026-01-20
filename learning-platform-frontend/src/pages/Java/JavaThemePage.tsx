// src/pages/Java/JavaThemePage.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
// Correct relative path: javaThemesContent.ts is in the same folder
import { javaThemes, JavaTheme } from "./javaThemesContent";
// Navbar is in src/components
import Navbar from "../../components/Navbar";
// CSS module for styling
import styles from "./JavaThemePage.module.css";

const JavaThemePage: React.FC = () => {
  // useParams returns string | undefined for each param
  const { themeId } = useParams<{ themeId: string }>();

  // Handle case where themeId is undefined
  if (!themeId) return <p>Invalid lesson ID</p>;

  // Find the theme by ID
  const theme = javaThemes.find((t: JavaTheme) => t.id === themeId);

  if (!theme) return <p>Lesson not found</p>;

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.card}>
        <h1 className={styles.title}>{theme.title}</h1>
        <div className={styles.content}>{theme.content}</div>
        <Link to="/java" className={styles.backLink}>
          Back to Java Lessons
        </Link>
      </div>
    </div>
  );
};

export default JavaThemePage;
