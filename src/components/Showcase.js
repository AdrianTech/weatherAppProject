import React from "react";
import { DataContext } from "../store/dataContext";
import { ternaryFunction } from "../utils/helpers";

const Showcase = () => {
  const { city: { name, main, weather, sys, timezone }, currentLanguage: lang } = React.useContext(DataContext);
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const dateFormat = ternaryFunction({ defaultValue: 'pl', passValue: lang, firstValue: 'eu-PL', secondValue: 'en-US' })
  const time = new Date().getTimezoneOffset() * 60 + timezone;
  const getLocalTime = new Date((new Date().getTime() + time * 1000));
  const formatLocalCityTime = getLocalTime.toLocaleTimeString(dateFormat);
  const day = getLocalTime.toLocaleDateString('eu');
  return (
    <div className="showcase">
      <div className="topInfo">
        <h4>
          {day}  <span style={{ margin: '0 5px' }}>|</span>  {formatLocalCityTime}
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
