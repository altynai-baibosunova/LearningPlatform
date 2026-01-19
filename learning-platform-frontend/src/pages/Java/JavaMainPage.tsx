// src/pages/Java/JavaMainPage.tsx
import { Link } from "react-router-dom";
import { javaThemes } from "./javaThemesContent";
import Navbar from "../../components/Navbar";

const JavaMainPage = () => {
  return (
    <>
      <Navbar />
      <h1>Java Courses</h1>
      <ul>
        {javaThemes.map((theme) => (
          <li key={theme.id}>
            <Link to={`/java/theme/${theme.id}`}>{theme.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default JavaMainPage;
