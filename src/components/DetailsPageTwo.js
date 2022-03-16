import { DataContext } from "../store/dataContext";
import React from "react";
import useTranslations from "../hooks/useTranslations/useTranslations";
import { ActionsContext } from "../store/actionsContext";
const DetailsPageTwo = () => {
    const { city, currentLanguage: lang } = React.useContext(DataContext);
    const { setPageHandle } = React.useContext(ActionsContext);
    const { t } = useTranslations();
    const { clouds, timezone,  sys  } = city;
    const time = new Date().getTimezoneOffset() * 60 + timezone;
    const dateFormat = lang === 'pl' ? 'eu-PL' : 'en-US';
    const suriseTime = new Date((sys.sunrise + time) * 1000).toLocaleTimeString(dateFormat);
    const sunsetTime = new Date((sys.sunset + time) * 1000).toLocaleTimeString(dateFormat);
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
                <span>{t('Temp. odczuwalna')} </span>
                <span>{city.main.feels_like.toFixed(1)} &#8451;</span>
            </li>
            <li>
                <span>{t('Zachmurzenie')}</span>
                <span>{clouds.all} %</span>
            </li>
            <button className="btn-page" onClick={() => setPageHandle('back')}>Previous Page</button>
        </>
    )
}

export default DetailsPageTwo;