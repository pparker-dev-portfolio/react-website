import React from "react";
import "../App.css";
import { NavBar } from "./NavBar";
import labelImage from "../img/UI-Elements.png";
import largeGraphic from "../img/Lander-Graphic.png";  // Uncomment the import statement
import { LandingPageGraphic } from "./LandingPageGraphic";

export const LandingPage = () => {
  return (
    <>
      <NavBar/>
      <div className="pt-16 p-4 flex flex-col md:flex-row justify-center items-center">  
        
        {/* Existing Content: Label and Buttons */}
        <div className="flex flex-col items-center mb-16 md:mb-0 md:mr-16">
          <img
            src={labelImage}
            alt="Descriptive alt text"
            className="w-11/12 md:w-full max-w-lg mb-4"
          />
          <p className="text-center mb-4">
            This is a small text description under the Landing Page Label.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600">
              Button 1
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600">
              Button 2
            </button>
          </div>
        </div>

        {/* New Content: Large Graphic */}
        <div className="ml-0 md:ml-4">
          <LandingPageGraphic></LandingPageGraphic>
        </div>
      </div>
    </>
  );
};
