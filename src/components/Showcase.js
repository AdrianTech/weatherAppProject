import React from "react";
import { ActionsContext } from "../store/actionsContext";
import { DataContext } from "../store/dataContext";
import { convertTemperature, getTimezoneOffset, ternaryFunction } from "../utils/helpers";

const Showcase = () => {
  const { city: { name, main, weather, sys, timezone }, currentLanguage: lang } = React.useContext(DataContext);
  const { tempUnit, setTemp } = React.useContext(ActionsContext);

  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const dateFormat = ternaryFunction({ defaultValue: 'pl', passValue: lang, firstValue: 'eu-PL', secondValue: 'en-US' })
  const getLocalTime = new Date((new Date().getTime() + getTimezoneOffset(timezone) * 1000));
  const formatLocalCityTime = getLocalTime.toLocaleTimeString(dateFormat);
  const day = getLocalTime.toLocaleDateString('de-DE', { dateStyle: 'short' });

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
        <button className="btn-temp" onClick={() => setTemp(!tempUnit)}> {convertTemperature(tempUnit, main.temp)}</button>
      </div>
    </div>
  );
};
export default Showcase;
