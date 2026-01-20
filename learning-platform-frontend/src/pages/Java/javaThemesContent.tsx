// src/pages/Java/javaThemesContent.ts

// Define the TypeScript interface for a Java theme/lesson
export interface JavaTheme {
  id: string;       // unique ID used in URL
  title: string;    // lesson title
  content: string;  // lesson content (can be text, HTML, or JSX string)
}

// Sample lessons array
export const javaThemes: JavaTheme[] = [
  {
    id: "1",
    title: "Introduction to Java",
    content: "Java is a high-level, class-based, object-oriented programming language..."
  },
  {
    id: "2",
    title: "Object-Oriented Programming",
    content: "OOP in Java allows you to create classes and objects, encapsulation, inheritance, and polymorphism..."
  },
  {
    id: "3",
    title: "Java Collections Framework",
    content: "Collections in Java include List, Set, Map, and Queue. They help manage groups of objects efficiently..."
  },
  {
    id: "4",
    title: "Exception Handling",
    content: "Java provides try, catch, finally blocks and custom exceptions for robust error handling..."
  }
];
