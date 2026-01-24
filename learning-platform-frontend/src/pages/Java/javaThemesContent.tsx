import React, { ReactNode } from "react";

// Import all theme components
import Intro from "./themes/Intro";
import JavaVariables from "./themes/JavaVariables";
import Methods from "./themes/Methods";
import Strings from "./themes/Strings";
import Arrays from "./themes/Arrays";
import OOP from "./themes/OOP";
import Interfaces from "./themes/Interfaces";
import Exceptions from "./themes/Exceptions";
import Collections from "./themes/Collections";
import Generics from "./themes/Generics";
import Loops from "./themes/Loops";
import Java8 from "./themes/Java8";
import JDBC from "./themes/JDBC";
import Multithreading from "./themes/Multithreading";
import Serialization from "./themes/Serialization";
import Networking from "./themes/Networking";
import Swing from "./themes/Swing";

export type JavaTheme = {
  id: string;
  title: string;
  content: ReactNode;
};

export const javaThemes: JavaTheme[] = [
  { id: "java-intro", title: "Introduction to Java", content: <Intro /> },
  { id: "java-variables", title: "Variables", content: <JavaVariables /> },
  { id: "java-methods", title: "Methods", content: <Methods /> },
  { id: "java-strings", title: "Strings", content: <Strings /> },
  { id: "java-arrays", title: "Arrays", content: <Arrays /> },
  { id: "java-oop", title: "Object-Oriented Programming", content: <OOP /> },
  { id: "java-interfaces", title: "Interfaces & Abstract Classes", content: <Interfaces /> },
  { id: "java-exceptions", title: "Exception Handling", content: <Exceptions /> },
  { id: "java-collections", title: "Collections Framework", content: <Collections /> },
  { id: "java-generics", title: "Generics", content: <Generics /> },
  { id: "java-loops", title: "Loops", content: <Loops /> },
  { id: "java-java8", title: "Java 8 Features (Streams & Lambdas)", content: <Java8 /> },
  { id: "java-jdbc", title: "JDBC (Database Connectivity)", content: <JDBC /> },
  { id: "java-multithreading", title: "Multithreading", content: <Multithreading /> },
  { id: "java-serialization", title: "Serialization", content: <Serialization /> },
  { id: "java-networking", title: "Networking", content: <Networking /> },
  { id: "java-gui-swing", title: "Java GUI (Swing Basics)", content: <Swing /> },
];



// import { ReactNode } from "react";
// import Intro from "./themes/Intro";
// import OOP from "./themes/OOP";
// import Collections from "./themes/Collections";
// import Exceptions from "./themes/Exceptions";
//
// export type JavaTheme = {
//   id: string;
//   title: string;
//   content: ReactNode;
// };
//
// export const javaThemes: JavaTheme[] = [
//   {
//     id: "java-introduction",
//     title: "Introduction to Java",
//     content: <Intro />,
//   },
//   {
//     id: "oop",
//     title: "Object-Oriented Programming",
//     content: <OOP />,
//   },
//   {
//     id: "collections",
//     title: "Java Collections Framework",
//     content: <Collections />,
//   },
//   {
//     id: "exceptions",
//     title: "Exception Handling",
//     content: <Exceptions />,
//   },
// ];
