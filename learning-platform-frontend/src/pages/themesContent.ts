export interface Theme {
  id: string;
  title: string;
  content: string;
}

export const themesContent: Theme[] = [
  {
    id: "theme1",
    title: "Introduction",
    content: "Welcome to the first theme! Here we cover the basics."
  },
  {
    id: "theme2",
    title: "OOP Concepts",
    content: "In this theme, we explore Object-Oriented Programming concepts."
  },
];

// Optional export ensures this file is treated as a module
export {};
