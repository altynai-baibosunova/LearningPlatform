// src/pages/Python/pythonThemesContent.tsx
import { ReactNode } from "react";
import Intro from "./themes/Intro";
import DataTypes from "./themes/DataTypes";
import Exceptions from "./themes/Exceptions";
import Functions from "./themes/Functions";
import Modules from "./themes/Modules";
import InputOutput from "./themes/InputOutput";
import ControlStatements from "./themes/ControlStatements";

export type PythonTheme = {
  id: string;
  title: string;
  content: ReactNode;
};

export const pythonThemes: PythonTheme[] = [
  { id: "python-introduction", title: "Introduction", content: <Intro /> },
  { id: "data-types", title: "Data Types", content: <DataTypes /> },
  { id: "exceptions", title: "Exceptions", content: <Exceptions /> },
  { id: "functions", title: "Functions", content: <Functions /> },
  { id: "modules", title: "Modules and Packages", content: <Modules /> },
  { id: "input-output", title: "Input and Output", content: <InputOutput /> },
  { id: "control-statements", title: "Control Statements", content: <ControlStatements /> },
];


// // src/pages/Python/pythonThemesContent.tsx
// import { ReactNode } from "react";
// import Intro from "./themes/Intro";
// import DataTypes from "./themes/DataTypes";
// import Exceptions from "./themes/Exceptions";
// import Functions from "./themes/Functions";
// import Modules from "./themes/Modules";
// import InputOutput from "./themes/InputOutput";
// import ControlStatements from "./themes/ControlStatements";
//
// export type PythonTheme = {
//   id: string;
//   title: string;
//   content: ReactNode;
// };
//
// export const pythonThemes: PythonTheme[] = [
//   { id: "python-introduction", title: "Introduction", content: <Intro /> },
//   { id: "data-types", title: "Data Types", content: <DataTypes /> },
//   { id: "exceptions", title: "Exceptions", content: <Exceptions /> },
//   { id: "functions", title: "Functions", content: <Functions /> },
//   { id: "modules", title: "Modules and Packages", content: <Modules /> },
//   { id: "input-output", title: "Input and Output", content: <InputOutput /> },
//   { id: "control-statements", title: "Control Statements", content: <ControlStatements /> },
// ];
//
//
// // import { ReactNode } from "react";
// // import Intro from "./themes/Intro";
// // import DataTypes from "./themes/DataTypes";
// // import OOP from "./themes/OOP";
// // import Exceptions from "./themes/Exceptions";
// //
// // export type PythonTheme = {
// //   id: string;
// //   title: string;
// //   content: ReactNode;
// // };
// //
// // export const pythonThemes: PythonTheme[] = [
// //   {
// //     id: "python-introduction",
// //     title: "Introduction to Python",
// //     content: <Intro />,
// //   },
// //   {
// //     id: "data-types",
// //     title: "Python Data Types",
// //     content: <DataTypes />,
// //   },
// //   {
// //     id: "oop",
// //     title: "Object-Oriented Programming in Python",
// //     content: <OOP />,
// //   },
// //   {
// //     id: "exceptions",
// //     title: "Exception Handling in Python",
// //     content: <Exceptions />,
// //   },
// // ];
// //
// //
// //
// //
// // // import React from "react";
// // //
// // // export default function WhatIsPythonPage() {
// // //   return (
// // //     <div style={{ padding: "2rem" }}>
// // //       <h1>What is Python?</h1>
// // //
// // //       <p>
// // //         Python is one of the most popular programming languages in the world.
// // //       </p>
// // //
// // //       <p>
// // //         It is easy to learn, has clean syntax, and is widely used in:
// // //       </p>
// // //
// // //       <ul>
// // //         <li>Web Development</li>
// // //         <li>Data Science</li>
// // //         <li>Automation</li>
// // //         <li>Artificial Intelligence</li>
// // //       </ul>
// // //
// // //       <p>
// // //         Python is known for its readability, which makes code easier to write
// // //         and maintain.
// // //       </p>
// // //     </div>
// // //   );
// // // }
