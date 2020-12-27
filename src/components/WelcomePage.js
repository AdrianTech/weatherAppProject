import React from "react";
import img from "../assets/weather.png";

const WelcomePage = () => {
  return (
    <div className="welcomePage">
      <img src={img} alt="welcome" />
      <h3>Weather App</h3>
      <span>Made by AdrianTech</span>
    </div>
  );
};
export default WelcomePage;
