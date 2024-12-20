import React, { useState } from "react";
import Flow from "./Flow";
import Banner from "./Banner";
import { useNavigate } from "react-router-dom";
import './HomePage.css';


const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Announcement Bar */}


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
            Case Studies
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Blog
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Docs
          </a>
          <a onClick={() => navigate("/login")} className="cursor-pointer text-gray-700 hover:text-black transition">
            Login
          </a>
          <a onClick={() => navigate("/signup")} className="cursor-pointer text-gray-700 hover:text-black transition">
            Signup
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

        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-100 shadow-lg p-4">
          <a className="block py-2 text-gray-700 hover:text-black" href="#">
            Platform
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
   
          </div>
        </nav>
      )}

<main className="main-section">
  <h1 className="main-title">
    <span className="line">Revolutionize Outreach with AI-Powered Cold Emails</span><br />
   
  </h1>
  <p className="main-paragraph">
    Streamline sales outreach with AI-driven, tailored cold emails. Powered by Llama 3.1, LangChain, and ChromaDB, our platform crafts personalized emails to engage clients effectively. Boost efficiency, enhance engagement, and close deals faster with cutting-edge automation.
  </p>
  <div className="button-container">
    <button
      onClick={() => navigate('/chat')}
      className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
    >
      Try now
    </button>
  </div>
</main>








      {/* Features Section */}
      <section className="py-12 px-6 md:py-20 md:px-8 bg-black">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
    Key Features
  </h2>
  <div className="grid gap-8 md:grid-cols-3 text-center">
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">
        AI-Powered Emails
      </h3>
      <p className="text-gray-400">
        Generate personalized cold emails using Llama 3.1 and LangChain for efficient outreach.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">
        Smart Data Integration
      </h3>
      <p className="text-gray-400">
        Leverage ChromaDB to connect job requirements with your portfolio for tailored responses.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">
        Real-Time Insights
      </h3>
      <p className="text-gray-400">
        Automatically scrape job postings to craft dynamic, targeted emails.
      </p>
    </div>
  </div>
</section>



      <Flow />
      <Banner />
      {/* Benefits Section */}
      <section className="py-12 px-6 md:py-20 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Why Choose OutReach?
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Save Time</h3>
            <p className="text-gray-500">
              Automate your email generation process and focus on what matters—building client relationships.
            </p>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Boost Engagement</h3>
            <p className="text-gray-500">
              Deliver tailored, relevant emails that increase client trust and response rates.
            </p>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Cloud Performance</h3>
            <p className="text-gray-500">
              Enjoy fast, reliable inference for your AI models using cloud platforms.
            </p>
          </div>
        </div>
      </section>

 

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
