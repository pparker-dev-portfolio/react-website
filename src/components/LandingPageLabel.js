import React from "react";
import "../App.css";
import labelImage from "../img/UI-Elements.png";

export const LandingPageLabel = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <img
        src={labelImage}
        alt="Descriptive alt text"
        className="w-full max-w-lg mb-4"
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
  );
};
