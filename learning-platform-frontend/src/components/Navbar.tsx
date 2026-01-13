// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/java" className="hover:underline">
            Java
          </Link>
        </li>
        <li>
          <Link to="/python" className="hover:underline">
            Python
          </Link>
        </li>
        <li>
          <Link to="/javascript" className="hover:underline">
            JavaScript
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
