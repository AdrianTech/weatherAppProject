import React from "react";
import { DataContext } from "../store/dataContext";

const DetailsPageOne = () => {
    const { city, setPageHandle } = React.useContext(DataContext);
    const { timezone, sys, weather } = city;
    const { pressure, humidity } = city.main;
    const time = new Date().getTimezoneOffset() * 60 + timezone;
    const setSunrise = sys.sunrise + time;
    const setSunset = sys.sunset + time;
    const suriseTime = new Date(setSunrise * 1000).toLocaleTimeString('en-US');
    const sunsetTime = new Date(setSunset * 1000).toLocaleTimeString('en-US');
    return (
        <>
            <li>
                <span>Weather description</span>
                <span style={{fontSize: weather[0].description.length > 17 ? 14 : 17 }}>{weather[0].description}</span>
            </li>
            <li>
                <span>Air pressure</span>
                <span>{pressure} hPa</span>
            </li>
            <li>
                <span>Humidity</span>
                <span>{humidity} %</span>
            </li>
            <li>
                <span>Sunrise</span>
                <span>{suriseTime}</span>
            </li>
            <li>
                <span>Sunset</span>
                <span>{sunsetTime}</span>
            </li>
            <button className="btn-page" onClick={() => setPageHandle('next')}>Next Page</button>
        </>
    )
}
export default DetailsPageOne;