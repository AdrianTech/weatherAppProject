import React from "react";
import useTranslations from "../hooks/useTranslations/useTranslations";
import { DataContext } from "../store/dataContext";
import { capitalizeFirstLetter } from "../utils/helpers";

const DetailsPageOne = () => {
    const { city: { main: { pressure, humidity }, weather, wind: { speed } } } = React.useContext(DataContext);
    const { t } = useTranslations();
    const desc = capitalizeFirstLetter(weather[0].description);
    return (
        <>
            <li>
                <span>{t('Opis')}</span>
                <span className={desc.length > 15 ? 'smaller-data' : ''}>{desc}</span>
            </li>
            <li>
                <span>{t('Ciśnienie')}</span>
                <span>{pressure} hPa</span>
            </li>
            <li>
                <span>{t('Prędkość wiatru')}</span>
                <span>{speed.toFixed(1)} m/s</span>
            </li>
            <li>
                <span>{t('Wilgotność')} </span>
                <span>{humidity} %</span>
            </li>
        </>
    )
}
export default DetailsPageOne;