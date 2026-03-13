//import React, { useState } from "react";
//import SectionsPanel from "./components/SectionsPanel";
//import LectureNotes from "./components/LectureNotes";
//import Conversations from "./components/Conversations";
//import AIAssistant from "./components/AIAssistant";
//import sectionsData from "./data/sectionsData";
//import "./App.css";
//
//function App() {
//
//  const [selectedSection, setSelectedSection] = useState(null);
//
//  return (
//    <div className="app-container">
//
//      <SectionsPanel
//        sections={sectionsData}
//        onSelect={setSelectedSection}
//      />
//
//      <LectureNotes selectedSection={selectedSection} />
//
//      <Conversations />
//
//      <AIAssistant selectedSection={selectedSection} />
//
//    </div>
//  );
//}
//
//export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Chat from "./components/Chat.jsx";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      {/*  background color */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f8f6f3",
        }}
      >
        <Routes>
          {/* Registration page */}
          <Route path="/register" element={<Register />} />

          {/* Login page */}
          <Route path="/login" element={<Login />} />

          {/* Default route — redirect to login or register */}
            <Route path="/" element={<Login />} />

          {/* Chat page (only for authorized users) */}
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
