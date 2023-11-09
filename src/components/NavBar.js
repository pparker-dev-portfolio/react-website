import React from "react";
import "../App.css";
import smallLogo from "../img/frame-hero-logo-1-5.png";
import titleLogo from "../img/FRAME-HERO.png";

export const NavBar = () => {
  return (
    <div className="p-4 shadow-md flex justify-between items-center z-50">
      <div className="flex items-center space-x-4">
        <img 
          alt="Frame hero logo" 
          src={smallLogo} 
          className="w-16 h-auto"
        />
        <img 
          alt="Frame HERO" 
          src={titleLogo} 
          className="w-40 h-auto"
        />
      </div>
      <div className="flex items-center space-x-4">
        <a href="/marketplace" className="no-underline hover:text-gray-500">Marketplace</a>
        <a href="/pricing" className="no-underline hover:text-gray-500">Pricing</a>
        <a href="/about" className="no-underline hover:text-gray-500">About Us</a>
        <a href="/support" className="no-underline hover:text-gray-500">Support</a>
        <a 
          href="/login" 
          className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600"
        >
          Log In / Sign Up
        </a>
      </div>
    </div>
  );
};
