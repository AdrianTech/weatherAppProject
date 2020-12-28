import React from "react";
import { DataContext } from "../store/dataContext";
const Details = () => {
  const { city } = React.useContext(DataContext);
  const { timezone, sys, wind } = city;
  const { pressure, humidity } = city.main;
  const time = new Date().getTimezoneOffset() * 60 + timezone;
  const setSunrise = sys.sunrise + time;
  const setSunset = sys.sunset + time;
  const suriseTime = new Date(setSunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(setSunset * 1000).toLocaleTimeString();
  return (
    <section className="details">
      <ul>
        <li>
          <span>Air pressure</span>
          <span>{pressure} hPa</span>
        </li>
        <li>
          <span>Humidity</span>
          <span>{humidity} %</span>
        </li>
        <li>
          <span>Wind speed</span>
          <span>{wind.speed.toFixed(1)} m/s</span>
        </li>
        <li>
          <span>Sunrise</span>
          <span>{suriseTime}</span>
        </li>
        <li>
          <span>Sunset</span>
          <span>{sunsetTime}</span>
        </li>
      </ul>
    </section>
  );
};
export default Details;
