// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import JavaMainPage from "./pages/Java/Java";
import Theme1Page from "./pages/Java/ITheme1_IntroductionBasics/Theme1Page";
import JavaScriptPage from "./pages/JavaScript";
import PythonPage from "./pages/Python";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/java" element={<JavaMainPage />} />
        <Route path="/java/theme1" element={<Theme1Page />} />
        <Route path="/javascript" element={<JavaScriptPage />} />
        <Route path="/python" element={<PythonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
