import React from "react";
import { DataContext } from "../store/dataContext";

const Showcase = () => {
  const { city } = React.useContext(DataContext);
  const { name, main, weather, sys } = city;
  const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  return (
    <div className="showcase">
      <div className="topInfo">
        <h4>
          {date}, {time}
        </h4>
      </div>
      <img src={icon} alt="weather icon" />
      <div className="bottomInfo">
        <h3>
          {name}, {sys.country}
        </h3>
        <h3>{main.temp.toFixed(1)} &#8451;</h3>
      </div>
    </div>
  );
};
export default Showcase;
