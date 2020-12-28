import React from "react";
import img from "../assets/weather.png";

const WelcomePage = () => {
  return (
    <div className="welcomePage">
      <img src={img} alt="welcome" />
      <div className="madeBy">
        <p>
          Weather App<span>made by AdrianTech</span>
        </p>
      </div>
    </div>
  );
};
export default WelcomePage;
