// src/pages/Python/PythonThemePage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { pythonThemes } from "./pythonThemesContent";
import Navbar from "../../components/Navbar";

const PythonThemePage: React.FC = () => {
  const { themeId } = useParams<{ themeId: string }>();
  const theme = pythonThemes.find((t) => t.id === themeId);

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

export default PythonThemePage;


// // src/pages/Python/PythonThemePage.tsx
// import React from "react";
// import { useParams } from "react-router-dom";
// import { pythonThemes } from "./pythonThemesContent";
// import Navbar from "../../components/Navbar";
//
// const PythonThemePage: React.FC = () => {
//   const { themeId } = useParams<{ themeId: string }>();
//   const theme = pythonThemes.find((t) => t.id === themeId);
//
//   if (!theme) {
//     return (
//       <div>
//         <Navbar />
//         <div style={{ textAlign: "center", padding: "40px" }}>
//           <h2 style={{ color: "#dc2626" }}>Lesson not found</h2>
//           <p>The lesson you are looking for does not exist.</p>
//         </div>
//       </div>
//     );
//   }
//
//   return (
//     <div>
//       <Navbar />
//       {theme.content}
//     </div>
//   );
// };
//
// export default PythonThemePage;


// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { pythonThemes, PythonTheme } from "./pythonThemesContent";
//
// const PythonThemePage: React.FC = () => {
//   const { themeId } = useParams<{ themeId: string }>();
//   const theme = pythonThemes.find((t: PythonTheme) => t.id === themeId);
//
//   if (!theme) {
//     return <div>Theme not found</div>;
//   }
//
//   return (
//     <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
//       <h1 style={{ fontSize: "42px", marginBottom: "32px", color: "#1e40af" }}>{theme.title}</h1>
//       <div>{theme.content}</div>
//       <Link to="/python" style={{ display: "inline-block", marginTop: "20px", color: "#1e40af", fontWeight: "bold" }}>
//         Back to all themes
//       </Link>
//     </div>
//   );
// };
//
// export default PythonThemePage;


// import React from "react";
//
// export default function Python() {
//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>Python Fundamentals</h1>
//
//       <iframe
//         width="600"
//         height="350"
//         src="https://www.youtube.com/embed/_uQrJ0TkZlc"
//         title="Python Full Course"
//         allowFullScreen
//       />
//
//       <p style={{ marginTop: "1rem" }}>
//         <a href="/docs/python-notes.pdf" target="_blank" rel="noreferrer">
//           Download Python Notes
//         </a>
//       </p>
//     </div>
//   );
// }
