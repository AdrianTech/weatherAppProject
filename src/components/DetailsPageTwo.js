import { DataContext } from "../store/dataContext";
import React from "react";
import useTranslations from "../hooks/useTranslations/useTranslations";
import { getTimezoneOffset, ternaryFunction } from "../utils/helpers";
const DetailsPageTwo = () => {
    const { city: { clouds, timezone, sys, main: { feels_like } }, currentLanguage: lang } = React.useContext(DataContext);
    const { t } = useTranslations();
    const dateFormat = ternaryFunction({ defaultValue: 'pl', passValue: lang, firstValue: 'eu-PL', secondValue: 'en-US' })
    const suriseTime = new Date((sys.sunrise + getTimezoneOffset(timezone)) * 1000).toLocaleTimeString(dateFormat);
    const sunsetTime = new Date((sys.sunset + getTimezoneOffset(timezone)) * 1000).toLocaleTimeString(dateFormat);
    return (
        <>
            <li>
                <span>{t('Wschód słońca')} </span>
                <span>{suriseTime}</span>
            </li>
            <li>
                <span>{t('Zachód słońca')} </span>
                <span>{sunsetTime}</span>
            </li>
            <li>
                <span className="mobile-smaller">{t('Temp. odczuwalna')} </span>
                <span>{feels_like.toFixed(1)} &#8451;</span>
            </li>
            <li>
                <span>{t('Zachmurzenie')}</span>
                <span>{clouds.all} %</span>
            </li>
        </>
    )
}

export default DetailsPageTwo;