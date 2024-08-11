"use client";
import React from "react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-3xl font-bold ml-11">
          WriteLine
        </a>

        <div className="hidden md:flex space-x-4 mr-11">
          <a href="" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="" className="text-gray-300 hover:text-white">
            About
          </a>

          <a
            href=""
            className="bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Hire Me
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex items-center flex-col space-y-4 mt-4">
          <a href="" className="block text-gray-300 hover:text-white">
            Home
          </a>
          <a href="" className="block text-gray-300 hover:text-white">
            About
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
