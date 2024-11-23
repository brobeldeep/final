


import React, { useState } from "react";
import Flow from "./Flow";
import Banner from "./Banner";

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2 px-4">
        <span>OutReach is now in General Availability</span>
        <a className="text-white underline ml-2" href="#">
          Read the Blog →
        </a>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center py-4 px-6 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <span className="ml-2 text-xl font-semibold">OutReach</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a className="text-gray-700 hover:text-black transition" href="#">
            Platform
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Pricing
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Case Studies
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Blog
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Docs
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="border border-gray-700 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition">
            Sign in
          </button>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Book a demo
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-100 shadow-lg p-4">
          <a className="block py-2 text-gray-700 hover:text-black" href="#">
            Platform
          </a>
          <a className="block py-2 text-gray-700 hover:text-black" href="#">
            Pricing
          </a>
          <a className="block py-2 text-gray-700 hover:text-black" href="#">
            Case Studies
          </a>
          <a className="block py-2 text-gray-700 hover:text-black" href="#">
            Blog
          </a>
          <a className="block py-2 text-gray-700 hover:text-black" href="#">
            Docs
          </a>
          <div className="mt-4">
            <button className="block w-full border border-gray-700 text-gray-700 px-4 py-2 rounded mb-2 hover:bg-gray-100 transition">
              Sign in
            </button>
            <button className="block w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              Book a demo
            </button>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="text-center py-12 px-6 md:py-20 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your AI product needs evals
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-8">
          The LLM evals platform for enterprises. OutReach gives you the tools
          that top teams use to ship and scale AI with confidence.
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-4">
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Book a demo
          </button>
          <button className="border border-gray-700 text-gray-700 px-6 py-3 rounded hover:bg-gray-100 transition">
            Try now
          </button>
        </div>
      </main>

      <Flow />
<Banner/>
      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold">OutReach</h2>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="hover:text-gray-400 transition">
              Platform
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Blog
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Docs
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-6 md:mt-0 flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm text-gray-400">
          © 2024 OutReach. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;



