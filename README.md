#  Learning Platform Project
# Learning Platform

A full-stack training project built with Spring Boot (backend) and React (frontend).
The app supports user authentication, AI-powered chat, and persistent conversation history.
BloomMind is a full-stack AI-powered learning platform designed to support interactive education experiences with persistent conversation history and secure user authentication.

🚀 Features
The system provides scalable backend architecture with JWT-based security, structured data persistence, and AI-assisted chat functionality.

User registration & login (JWT authentication)
---

Secure password hashing
##  Key Features

AI chat using Gemini API
- Secure user registration and authentication (JWT-based)
- Encrypted password storage
- AI-powered chat integration (Gemini API)
- Persistent conversations and message history (PostgreSQL)
- Role-based request handling with Spring Security
- RESTful API design
- CORS configuration for frontend-backend communication

Persistent chat sessions and messages (PostgreSQL)
---

CORS configuration for frontend–backend communication
##  Architecture

🛠 Tech Stack
The backend follows a layered architecture pattern:

Backend: Java 17, Spring Boot 3, Spring Security, JPA, PostgreSQL, Maven
Frontend: React 18, React Router DOM, Fetch API, CSS
- Controller Layer – Handles HTTP requests and responses
- Service Layer – Business logic and AI integration
- Repository Layer – Data access using Spring Data JPA
- DTO-based request/response mapping
- Stateless authentication with JWT

📌 Functionality
---

Store user conversations in PostgreSQL
##  Tech Stack

Associate chats with authenticated users
### Backend
- Java 17
- Spring Boot 3
- Spring Security
- Spring Data JPA
- PostgreSQL
- Maven

Retrieve previous sessions and continue messaging
### Frontend
- React 18
- React Router DOM
- Fetch API
- CSS

Clean architecture with controllers, services, repositories
---

##  Core Functionality
- Store and retrieve user conversations
- Associate chat sessions with authenticated users
- Continue previous AI conversations
- Maintain clean separation of concerns
- Scalable REST API design
