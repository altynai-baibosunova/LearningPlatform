// src/pages/themesContent.ts

// export type Theme = {
//   title: string;
//   content: string[];
// };

// src/pages/themesContent.ts
export interface Theme {
  title: string;
  content: string[];
}

export const themes: Theme[] = [
  {
    title: "Theme 1: Introduction & Basics",
    content: [
      "What is Java?",
      "Java is an object-oriented programming (OOP) language.",
      "Platform-independent: you can write code once and run it anywhere (JVM handles it).",
      "Used for backend, web apps, Android, enterprise systems.",
      `// Basic Program Structure
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
      "Explanation:\npublic class Main → defines a class named Main.\npublic static void main(String[] args) → entry point of the program.\nSystem.out.println(\"Hello, Java!\") → prints text to console.",
      "✅ Key Points:\nEvery Java program needs at least one class.\nCode execution starts from the main method.",
    ],
  },
  {
    title: "Theme 2: Variables & Data Types",
    content: [
      "Variables: storage for data.",
      `// Primitive types
int age = 20;      // Whole numbers
double pi = 3.14;  // Decimal numbers
char c = 'A';      // Single character
boolean ok = true; // True/false`,
      `// Reference types
String name = "Altynai"; // stores text
int[] nums = {1,2,3};    // array
Car car = new Car();      // object`,
      "✅ Key Points: Primitive types store simple values. Reference types store objects/data structures.",
    ],
  },
  {
    title: "Theme 3: Operators",
    content: [
      `// Arithmetic Operators
int a = 10, b = 3;
System.out.println(a + b); // 13
System.out.println(a - b); // 7
System.out.println(a * b); // 30
System.out.println(a / b); // 3
System.out.println(a % b); // 1 (remainder)`,
      `// Comparison Operators
System.out.println(a == b); // false
System.out.println(a != b); // true
System.out.println(a > b);  // true`,
      `// Logical Operators
boolean x = true, y = false;
System.out.println(x && y); // false
System.out.println(x || y); // true
System.out.println(!x);     // false`,
      "✅ Key Points: Operators perform arithmetic, comparison, or logical operations. Use carefully in conditions and loops.",
    ],
  },
  {
    title: "Theme 4: Control Statements",
    content: [
      `// if-else
int age = 18;
if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}`,
      `// switch-case
int day = 2;
switch(day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    default: System.out.println("Invalid day");
}`,
      "✅ Key Points: Control statements decide which code executes. if-else for conditions, switch for multiple options.",
    ],
  },
  {
    title: "Theme 5: Loops",
    content: [
      `// for loop
for(int i=1; i<=5; i++) {
    System.out.println(i);
}

// while loop
int i = 1;
while(i <= 5) {
    System.out.println(i);
    i++;
}

// do-while loop
i = 1;
do {
    System.out.println(i);
    i++;
} while(i <= 5);

// Enhanced for-each
int[] nums = {1,2,3};
for(int n : nums) {
    System.out.println(n);
}`,
      "✅ Key Points: Loops repeat code multiple times. for → known iteration count, while → unknown count, do-while → executes at least once.",
    ],
  },
  {
    title: "Theme 6: Methods (Functions)",
    content: [
      `// Define a method
static int add(int a, int b) {
    return a + b;
}

// Call a method
int sum = add(5, 3);
System.out.println(sum); // 8

// void method (no return)
static void greet(String name) {
    System.out.println("Hello " + name);
}`,
      "✅ Key Points: Methods organize code into reusable blocks. Can have parameters and return values.",
    ],
  },
  {
    title: "Theme 7: Object-Oriented Programming (OOP)",
    content: [
      `// Class & Object
class Car {
    String model;
    void drive() {
        System.out.println("Driving");
    }
}

Car car = new Car();
car.model = "BMW";
car.drive(); // Driving`,
      `// 4 Pillars of OOP
Encapsulation → private fields + getters/setters
Inheritance → reuse code (extends)
Polymorphism → same method, different behavior
Abstraction → hide implementation (abstract class / interface)`,
      "✅ Key Points: OOP makes code modular, reusable, and maintainable.",
    ],
  },
  {
    title: "Theme 8: Constructors & Arrays",
    content: [
      `// Constructor
class Person {
    String name;
    Person(String n) {
        name = n;
    }
}

Person p = new Person("Altynai");
System.out.println(p.name); // Altynai`,
      `// Arrays
int[] nums = {1, 2, 3};
for(int n : nums) {
    System.out.println(n);
}`,
      "✅ Key Points: Constructor → initialize objects. Arrays → store multiple values of same type.",
    ],
  },
  {
    title: "Theme 9: Exception Handling",
    content: [
      `// try-catch-finally
try {
    int x = 10 / 0;
} catch(ArithmeticException e) {
    System.out.println("Cannot divide by zero");
} finally {
    System.out.println("Execution finished");
}`,
      "✅ Key Points: Exceptions are runtime errors. try → risky code, catch → handle error, finally → always execute. Checked vs Unchecked exceptions.",
    ],
  },
  {
    title: "Theme 10: Collections & Java Memory",
    content: [
      `// Collections
import java.util.*;

List<String> list = new ArrayList<>();
list.add("Java");
list.add("Python");

Set<Integer> set = new HashSet<>();
set.add(1);
set.add(2);

Map<String, Integer> map = new HashMap<>();
map.put("Alice", 25);`,
      `// Memory
Stack: stores method calls and local variables
Heap: stores objects`,
      "✅ Key Points: Collections → manage groups of objects easily. Memory understanding → important for performance.",
    ],
  },
];
