// src/pages/Python/PythonMainPage.tsx
import { Link } from "react-router-dom";
import { pythonThemes } from "./pythonThemesContent";
import { useEffect, useState } from "react";

const PythonMainPage = () => {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("python-progress");
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  const markCompleted = (id: string) => {
    const updated = [...new Set([...completed, id])];
    setCompleted(updated);
    localStorage.setItem("python-progress", JSON.stringify(updated));
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      {/* Page Title */}
      <h1 style={{ fontSize: "42px", marginBottom: "10px", color: "#1e40af", textAlign: "center" }}>
        Python Course
      </h1>
      <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "30px" }}>
        Track your learning progress 🚀
      </p>

      {/* Progress Info */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <strong>
          Progress: {completed.length} / {pythonThemes.length} lessons completed
        </strong>
      </div>

      {/* Lessons Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
        {pythonThemes.map((theme) => {
          const isDone = completed.includes(theme.id);

          return (
            <div
              key={theme.id}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                position: "relative",
              }}
            >
              {/* Badge */}
              <span
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: isDone ? "#16a34a" : "#f59e0b",
                  color: "white",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  fontSize: "12px",
                }}
              >
                {isDone ? "Completed" : "New"}
              </span>

              {/* Lesson Title */}
              <h3 style={{ fontSize: "20px", marginBottom: "8px", color: "#2563eb" }}>
                {theme.title}
              </h3>

              {/* Start Lesson Link */}
              <Link
                to={`/python/${theme.id}`}
                onClick={() => markCompleted(theme.id)}
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  color: "#1e40af",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Start Lesson →
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PythonMainPage;


// // src/pages/Python/PythonMainPage.tsx
// import { Link } from "react-router-dom";
// import { pythonThemes } from "./pythonThemesContent";
// import { useEffect, useState } from "react";
// import Navbar from "../../components/Navbar";
//
// const PythonMainPage = () => {
//   const [completed, setCompleted] = useState<string[]>([]);
//
//   useEffect(() => {
//     const saved = localStorage.getItem("python-progress");
//     if (saved) setCompleted(JSON.parse(saved));
//   }, []);
//
//   const markCompleted = (id: string) => {
//     const updated = [...new Set([...completed, id])];
//     setCompleted(updated);
//     localStorage.setItem("python-progress", JSON.stringify(updated));
//   };
//
//   return (
//     <div>
//       <Navbar />
//       <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px", fontFamily: "Arial, sans-serif" }}>
//         {/* Page Title */}
//         <h1 style={{ fontSize: "42px", marginBottom: "10px", color: "#1e40af", textAlign: "center" }}>
//           Python Course
//         </h1>
//         <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "30px" }}>
//           Track your learning progress 🚀
//         </p>
//
//         {/* Progress Info */}
//         <div style={{ textAlign: "center", marginBottom: "30px" }}>
//           <strong>
//             Progress: {completed.length} / {pythonThemes.length} lessons completed
//           </strong>
//         </div>
//
//         {/* Lessons Grid */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
//           {pythonThemes.map((theme) => {
//             const isDone = completed.includes(theme.id);
//
//             return (
//               <div
//                 key={theme.id}
//                 style={{
//                   background: "white",
//                   borderRadius: "12px",
//                   padding: "20px",
//                   boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
//                   position: "relative",
//                 }}
//               >
//                 {/* Badge */}
//                 <span
//                   style={{
//                     position: "absolute",
//                     top: "12px",
//                     right: "12px",
//                     background: isDone ? "#16a34a" : "#f59e0b",
//                     color: "white",
//                     padding: "4px 10px",
//                     borderRadius: "999px",
//                     fontSize: "12px",
//                   }}
//                 >
//                   {isDone ? "Completed" : "New"}
//                 </span>
//
//                 {/* Lesson Title */}
//                 <h3 style={{ fontSize: "20px", marginBottom: "8px", color: "#2563eb" }}>
//                   {theme.title}
//                 </h3>
//
//                 {/* Start Lesson Link */}
//                 <Link
//                   to={`/python/${theme.id}`}
//                   onClick={() => markCompleted(theme.id)}
//                   style={{
//                     display: "inline-block",
//                     marginTop: "10px",
//                     color: "#1e40af",
//                     fontWeight: "bold",
//                     textDecoration: "none",
//                   }}
//                 >
//                   Start Lesson →
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default PythonMainPage;
//
//
// // // src/pages/Python/PythonMainPage.tsx
// // import { Link } from "react-router-dom";
// // import { pythonThemes } from "./pythonThemesContent";
// // import { useEffect, useState } from "react";
// // import Navbar from "../../components/Navbar";
// //
// // const PythonMainPage = () => {
// //   const [completed, setCompleted] = useState<string[]>([]);
// //
// //   useEffect(() => {
// //     const saved = localStorage.getItem("python-progress");
// //     if (saved) setCompleted(JSON.parse(saved));
// //   }, []);
// //
// //   const markCompleted = (id: string) => {
// //     const updated = [...new Set([...completed, id])];
// //     setCompleted(updated);
// //     localStorage.setItem("python-progress", JSON.stringify(updated));
// //   };
// //
// //   return (
// //     <div>
// //       <Navbar />
// //       <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px", fontFamily: "Arial, sans-serif" }}>
// //         <h1 style={{ fontSize: "42px", marginBottom: "10px", color: "#1e40af", textAlign: "center" }}>
// //           Python Course
// //         </h1>
// //         <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "30px" }}>
// //           Track your learning progress 🚀
// //         </p>
// //
// //         <div style={{ textAlign: "center", marginBottom: "30px" }}>
// //           <strong>
// //             Progress: {completed.length} / {pythonThemes.length} lessons completed
// //           </strong>
// //         </div>
// //
// //         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
// //           {pythonThemes.map((theme) => {
// //             const isDone = completed.includes(theme.id);
// //
// //             return (
// //               <div
// //                 key={theme.id}
// //                 style={{
// //                   background: "white",
// //                   borderRadius: "12px",
// //                   padding: "20px",
// //                   boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
// //                   position: "relative",
// //                 }}
// //               >
// //                 {/* Badge */}
// //                 <span
// //                   style={{
// //                     position: "absolute",
// //                     top: "12px",
// //                     right: "12px",
// //                     background: isDone ? "#16a34a" : "#f59e0b",
// //                     color: "white",
// //                     padding: "4px 10px",
// //                     borderRadius: "999px",
// //                     fontSize: "12px",
// //                   }}
// //                 >
// //                   {isDone ? "Completed" : "New"}
// //                 </span>
// //
// //                 <h3 style={{ fontSize: "20px", marginBottom: "8px", color: "#2563eb" }}>
// //                   {theme.title}
// //                 </h3>
// //
// //                 <Link
// //                   to={`/python/${theme.id}`}
// //                   onClick={() => markCompleted(theme.id)}
// //                   style={{
// //                     display: "inline-block",
// //                     marginTop: "10px",
// //                     color: "#1e40af",
// //                     fontWeight: "bold",
// //                     textDecoration: "none",
// //                   }}
// //                 >
// //                   Start Lesson →
// //                 </Link>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// //
// // export default PythonMainPage;
// //
// //
// //
// // // // src/pages/Python/PythonMainPage.tsx
// // // import { Link } from "react-router-dom";
// // // import { pythonThemes } from "./pythonThemesContent";
// // // import { useEffect, useState } from "react";
// // // import Navbar from "../../components/Navbar";
// // //
// // // const PythonMainPage = () => {
// // //   const [completed, setCompleted] = useState<string[]>([]);
// // //
// // //   useEffect(() => {
// // //     const saved = localStorage.getItem("python-progress");
// // //     if (saved) setCompleted(JSON.parse(saved));
// // //   }, []);
// // //
// // //   const markCompleted = (id: string) => {
// // //     const updated = [...new Set([...completed, id])];
// // //     setCompleted(updated);
// // //     localStorage.setItem("python-progress", JSON.stringify(updated));
// // //   };
// // //
// // //   return (
// // //     <div>
// // //       <Navbar />
// // //       <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px", fontFamily: "Arial, sans-serif" }}>
// // //         <h1 style={{ fontSize: "42px", marginBottom: "10px", color: "#1e40af", textAlign: "center" }}>
// // //           Python Course
// // //         </h1>
// // //         <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "30px" }}>
// // //           Track your learning progress 🚀
// // //         </p>
// // //
// // //         <div style={{ textAlign: "center", marginBottom: "30px" }}>
// // //           <strong>
// // //             Progress: {completed.length} / {pythonThemes.length} lessons completed
// // //           </strong>
// // //         </div>
// // //
// // //         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
// // //           {pythonThemes.map((theme) => {
// // //             const isDone = completed.includes(theme.id);
// // //
// // //             return (
// // //               <div
// // //                 key={theme.id}
// // //                 style={{
// // //                   background: "white",
// // //                   borderRadius: "12px",
// // //                   padding: "20px",
// // //                   boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
// // //                   position: "relative",
// // //                 }}
// // //               >
// // //                 <span
// // //                   style={{
// // //                     position: "absolute",
// // //                     top: "12px",
// // //                     right: "12px",
// // //                     background: isDone ? "#16a34a" : "#f59e0b",
// // //                     color: "white",
// // //                     padding: "4px 10px",
// // //                     borderRadius: "999px",
// // //                     fontSize: "12px",
// // //                   }}
// // //                 >
// // //                   {isDone ? "Completed" : "New"}
// // //                 </span>
// // //
// // //                 <h3 style={{ fontSize: "20px", marginBottom: "8px", color: "#2563eb" }}>
// // //                   {theme.title}
// // //                 </h3>
// // //
// // //                 <Link
// // //                   to={`/python/${theme.id}`}
// // //                   onClick={() => markCompleted(theme.id)}
// // //                   style={{
// // //                     display: "inline-block",
// // //                     marginTop: "10px",
// // //                     color: "#1e40af",
// // //                     fontWeight: "bold",
// // //                     textDecoration: "none",
// // //                   }}
// // //                 >
// // //                   Start Lesson →
// // //                 </Link>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // //
// // // export default PythonMainPage;
// // //
// // // // // src/pages/Python/PythonThemePage.tsx
// // // // import React from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import { pythonThemes } from "./pythonThemesContent";
// // // // import Navbar from "../../components/Navbar";
// // // //
// // // // const PythonThemePage: React.FC = () => {
// // // //   const { themeId } = useParams<{ themeId: string }>();
// // // //   const theme = pythonThemes.find((t) => t.id === themeId);
// // // //
// // // //   if (!theme) {
// // // //     return (
// // // //       <div>
// // // //         <Navbar />
// // // //         <div style={{ textAlign: "center", padding: "40px" }}>
// // // //           <h2 style={{ color: "#dc2626" }}>Lesson not found</h2>
// // // //           <p>The lesson you are looking for does not exist.</p>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }
// // // //
// // // //   return (
// // // //     <div>
// // // //       <Navbar />
// // // //       {theme.content}
// // // //     </div>
// // // //   );
// // // // };
// // // //
// // // // export default PythonThemePage;
// // //
// // //
// // // // import { Link } from "react-router-dom";
// // // // import { pythonThemes } from "./pythonThemesContent";
// // // // import { useEffect, useState } from "react";
// // // //
// // // // const PythonMainPage = () => {
// // // //   const [completed, setCompleted] = useState<string[]>([]);
// // // //
// // // //   useEffect(() => {
// // // //     const saved = localStorage.getItem("python-progress");
// // // //     if (saved) setCompleted(JSON.parse(saved));
// // // //   }, []);
// // // //
// // // //   const markCompleted = (id: string) => {
// // // //     const updated = [...new Set([...completed, id])];
// // // //     setCompleted(updated);
// // // //     localStorage.setItem("python-progress", JSON.stringify(updated));
// // // //   };
// // // //
// // // //   return (
// // // //     <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px", fontFamily: "Arial, sans-serif" }}>
// // // //       <h1 style={{ fontSize: "42px", marginBottom: "10px", color: "#1e40af", textAlign: "center" }}>
// // // //         Python Course
// // // //       </h1>
// // // //       <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "30px" }}>
// // // //         Track your learning progress 🚀
// // // //       </p>
// // // //
// // // //       <div style={{ textAlign: "center", marginBottom: "30px" }}>
// // // //         <strong>
// // // //           Progress: {completed.length} / {pythonThemes.length} lessons completed
// // // //         </strong>
// // // //       </div>
// // // //
// // // //       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
// // // //         {pythonThemes.map((theme) => {
// // // //           const isDone = completed.includes(theme.id);
// // // //
// // // //           return (
// // // //             <div
// // // //               key={theme.id}
// // // //               style={{
// // // //                 background: "white",
// // // //                 borderRadius: "12px",
// // // //                 padding: "20px",
// // // //                 boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
// // // //                 position: "relative",
// // // //               }}
// // // //             >
// // // //               {/* Badge */}
// // // //               <span
// // // //                 style={{
// // // //                   position: "absolute",
// // // //                   top: "12px",
// // // //                   right: "12px",
// // // //                   background: isDone ? "#16a34a" : "#f59e0b",
// // // //                   color: "white",
// // // //                   padding: "4px 10px",
// // // //                   borderRadius: "999px",
// // // //                   fontSize: "12px",
// // // //                 }}
// // // //               >
// // // //                 {isDone ? "Completed" : "New"}
// // // //               </span>
// // // //
// // // //               <h3 style={{ fontSize: "20px", marginBottom: "8px", color: "#2563eb" }}>
// // // //                 {theme.title}
// // // //               </h3>
// // // //
// // // //               <Link
// // // //                 to={`/python/${theme.id}`}
// // // //                 onClick={() => markCompleted(theme.id)}
// // // //                 style={{
// // // //                   display: "inline-block",
// // // //                   marginTop: "10px",
// // // //                   color: "#1e40af",
// // // //                   fontWeight: "bold",
// // // //                   textDecoration: "none",
// // // //                 }}
// // // //               >
// // // //                 Start Lesson →
// // // //               </Link>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };
// // // //
// // // // export default PythonMainPage;
// // // //
// // // //
// // // // // // src/pages/Python/PythonMainPage.tsx
// // // // // import React from "react";
// // // // // import Navbar from "../../components/Navbar";
// // // // //
// // // // // const PythonMainPage: React.FC = () => {
// // // // //   return (
// // // // //     <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
// // // // //       <Navbar />
// // // // //       <h1 style={{ fontSize: "32px", color: "#1a237e" }}>Python Course</h1>
// // // // //       <p>Select a Python lesson to start learning.</p>
// // // // //     </div>
// // // // //   );
// // // // // };
// // // // //
// // // // // export default PythonMainPage;
