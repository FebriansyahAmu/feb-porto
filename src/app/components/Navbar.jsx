"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.4,
      }}
    >
      <nav className="p-4 fixed top-0 left-0 right-0 z-10 w-full bg-slate-900">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="#"
            className="flex items-center text-emerald-400 text-3xl font-bold ml-11"
          >
            <Image
              src="/images/writeline.png"
              alt="logo"
              width={50}
              height={50}
              className="mr-2"
            />
            WriteLine
          </a>

          <div className="hidden md:flex space-x-8 mr-11">
            <a href="/" className="text-gray-300 hover:text-emerald-400">
              Home
            </a>
            <a href="/profile" className="text-gray-300 hover:text-emerald-400">
              Profile
            </a>
            <a
              href="/projects"
              className="text-gray-300 hover:text-emerald-400"
            >
              Projects
            </a>
            <a href="/contact" className="text-gray-300 hover:text-emerald-400">
              Contact Me
            </a>

            {/* <a
        href=""
        className="bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Hire Me
      </a> */}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-emerald-400 focus:outline-none"
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
          <div className="md:hidden bg-slate-900 flex items-center flex-col space-y-4 mt-4">
            <a href="/" className="block text-gray-300 hover:text-emerald-400">
              Home
            </a>
            <a
              href="/profile"
              className="block text-gray-300 hover:text-emerald-400"
            >
              Profile
            </a>
            <a
              href="/projects"
              className="text-gray-300 hover:text-emerald-400"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="block text-gray-300 hover:text-emerald-400"
            >
              Contact Me
            </a>
          </div>
        )}
      </nav>
    </motion.div>
  );
}

export default Navbar;
