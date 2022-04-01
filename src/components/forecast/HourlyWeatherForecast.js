import React from "react";
import useTranslations from "../../hooks/useTranslations/useTranslations";
import { Items } from "../../styledComponents/forecast.styled";
import { days } from "../../utils/config";
import { capitalizeFirstLetter } from "../../utils/helpers";
import 'react-loading-skeleton/dist/skeleton.css'

export default function HourlyWeatherForecast({ list: { main: { temp }, wind: { speed }, weather, dt_txt } }) {
    const { t } = useTranslations();
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    const desc = capitalizeFirstLetter(weather[0].description);
    return (
        <Items>
            <strong><span>{t(days[new Date(dt_txt).getDay()])}</span></strong>
            <div className="item"><span>Temp: {temp.toFixed(1)} &#8451; | {t('Wiatr')}: {speed.toFixed(1)} m/s</span></div>
            <span>{desc}</span>
            <img src={icon} alt="weather icon" />
        </Items>
    )
}