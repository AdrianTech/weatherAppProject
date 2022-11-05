import React from "react";
import useTranslations from "../../hooks/useTranslations/useTranslations";
import { Items } from "../../styledComponents/forecast.styled";
import { days } from "../../utils/config";
import { capitalizeFirstLetter, convertTemperature } from "../../utils/helpers";
import 'react-loading-skeleton/dist/skeleton.css'

export default function HourlyWeatherForecast({ list: { main: { temp }, wind: { speed }, weather, dt_txt }, tempUnit }) {
    const { t } = useTranslations();
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    const desc = capitalizeFirstLetter(weather[0].description);
    return (
        <Items>
            <strong><span>{t(days[new Date(dt_txt).getDay()])}</span></strong>
            <img src={icon} alt="weather icon" />
            <div className="item"><span>Temp: {convertTemperature(tempUnit, temp)} | {t('Wiatr')}: {speed.toFixed(1)} m/s</span></div>
            <span>{desc}</span>
        </Items>
    )
}