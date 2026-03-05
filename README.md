# 🌱 Learn Sphere / Learning_Platform

**Learn Sphere (Learning Platform)** is a full-stack AI-powered learning platform built with **Spring Boot (backend)** and **React (frontend)**.  
It features **robust role-based authentication and authorization**, **JWT-secured sessions**, **persistent conversation history**, and **AI-powered interactive chat** for personalized learning.

---

## 👀 Platform Perspectives

**Admin View:**
- Manage students, courses, and database records
- Monitor enrollments and progress

**Student View:**
- Register and enroll in courses
- Start lessons and track progress
- View completed and ongoing courses

---

## 🚀 Key Features

- Secure user registration and login (JWT authentication)
- Encrypted password storage
- Role-based authentication & authorization (Students, Admins)
- AI-powered chat integration (Gemini API)
- Persistent conversations and session history (PostgreSQL)
- RESTful API design with CORS configured
- Clean architecture with Controller, Service, and Repository layers

---

## 🛠 Architecture & Tech Stack

**Backend:**
- Java 17
- Spring Boot 3
- Spring Security
- Spring Data JPA
- PostgreSQL
- Maven

**Frontend:**
- React 18
- React Router DOM
- Fetch API
- CSS

**Layered Backend Architecture:**
- Controller Layer – Handles HTTP requests & responses
- Service Layer – Business logic & AI integration
- Repository Layer – Data access with Spring Data JPA
- DTO-based request/response mapping
- Stateless authentication with JWT

---

## 🎓 Core Functionality

- Store and retrieve user conversations
- Associate chat sessions with authenticated users
- Continue previous AI conversations
- Maintain clean separation of concerns
- Scalable REST API design  