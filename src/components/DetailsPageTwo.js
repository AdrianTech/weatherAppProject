import { DataContext } from "../store/dataContext";
import React from "react";
import useTranslations from "../hooks/useTranslations/useTranslations";
import { convertTemperature, getTimezoneOffset, ternaryFunction } from "../utils/helpers";
import { ActionsContext } from "../store/actionsContext";
const DetailsPageTwo = () => {
    const { city: { clouds, timezone, sys, main: { feels_like } }, currentLanguage: lang } = React.useContext(DataContext);
    const { tempUnit } = React.useContext(ActionsContext);
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
                <span>{convertTemperature(tempUnit, feels_like)}</span>
            </li>
            <li>
                <span>{t('Zachmurzenie')}</span>
                <span>{clouds.all} %</span>
            </li>
        </>
    )
}

export default DetailsPageTwo;