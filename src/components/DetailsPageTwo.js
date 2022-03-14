import { DataContext } from "../store/dataContext";
import React from "react";
const DetailsPageTwo = () => {
    const { city, setPageHandle } = React.useContext(DataContext);
    const { wind, visibility, clouds, dt, timezone } = city;
    const time = new Date().getTimezoneOffset() * 60 + timezone;
    const setLocalTime = new Date((dt + time) * 1000).toLocaleTimeString();
    return (
        <>  
            <li>
                <span>Local Time</span>
                <span>{setLocalTime}</span>
            </li>
            <li>
                <span>Wind speed</span>
                <span>{wind.speed.toFixed(1)} m/s</span>
            </li>
            <li>
                <span>Feels like</span>
                <span>{city.main.feels_like.toFixed(1)} &#8451;</span>
            </li>
            <li>
                <span>Cloudiness</span>
                <span>{clouds.all} %</span>
            </li>
            <li>
                <span>Visibility</span>
                <span>{visibility} meters</span>
            </li>
            <button className="btn-page" onClick={() => setPageHandle('back')}>Previous Page</button>
        </>
    )
}

export default DetailsPageTwo;