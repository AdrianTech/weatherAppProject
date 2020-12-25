import React from "react";
import { DataContext } from "../store/getData";
const Details = () => {
  const { city } = React.useContext(DataContext);
  console.log(city);
  const { pressure, humidity } = city.main;
  return (
    <section className="details">
      <ul>
        <li>
          <span>Air pressure</span>
          {pressure}
          <span></span>
        </li>
        <li>
          <span>Humidity</span>
          <span>{humidity}</span>
        </li>
        <li>
          <span>Sunrise</span>
          <span>06:07</span>
        </li>
        <li>
          <span>Sunset</span>
          <span>15:38</span>
        </li>
      </ul>
    </section>
  );
};
export default Details;
