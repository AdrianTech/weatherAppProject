import React from "react";
import useTranslations from "../hooks/useTranslations/useTranslations";
import { DataContext } from "../store/dataContext";

const DetailsPageOne = () => {
    const { city, setPageHandle } = React.useContext(DataContext);
    const { lang, t} = useTranslations();
    const { weather, wind } = city;
    const { pressure, humidity } = city.main;
    const capitalizeFirstLetter = weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1).toLowerCase();
    return (
        <>
            <li>
                <span>{t('Opis pogody', lang)}</span>
                <span style={{fontSize: capitalizeFirstLetter.length > 15 ? 14 : 17 }}>{capitalizeFirstLetter}</span>
            </li>
            <li>
                <span>{t('Ciśnienie')}</span>
                <span>{pressure} hPa</span>
            </li>
            <li>
                <span>{t('Prędkość wiatru')}</span>
                <span>{wind.speed.toFixed(1)} m/s</span>
            </li>
            <li>
                <span>{t('Wilgotność')} </span>
                <span>{humidity} %</span>
            </li>
            <button className="btn-page" onClick={() => setPageHandle('next')}>Next Page</button>
        </>
    )
}
export default DetailsPageOne;