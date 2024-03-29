import React from 'react';
import useFetch from '../../hooks/useFetch';
import { DataContext } from '../../store/dataContext';
import { API, forecastOptions } from '../../utils/config';
import { getItem, ternaryFunction } from '../../utils/helpers';
import HourlyWeatherForecast from './HourlyWeatherForecast';
import useTranslations from '../../hooks/useTranslations/useTranslations';
import ForecastItemSkeleton from '../skeletons/ForecastItemSkeleton';
import { ActionsContext } from '../../store/actionsContext';

const config = {
    method: 'get',
    url: "",
}

export default function Forecast() {
    const { city: weather_city } = React.useContext(DataContext);
    const { tempUnit, setTemp } = React.useContext(ActionsContext);
    const [defaultHours, setDefaultHours] = React.useState('12');
    const { t } = useTranslations();
    const forecastCity = ternaryFunction({ defaultValue: weather_city.name, passValue: weather_city.name, firstValue: weather_city.name, secondValue: getItem('city') });
    config.url = `${API.linkForecast}${forecastCity}${API.settings}${getItem('lang')}`;
    const { forecastData } = useFetch(config);
    const { list, city } = forecastData;
    let [hours, select] = [];

    const onChangeSelect = ({ target: { value } }) => setDefaultHours(value);

    if (list) {
        hours = list.map(city => city.dt_txt.slice(11, 13) === defaultHours && <HourlyWeatherForecast key={city.dt} list={city} city={forecastData.city} tempUnit={tempUnit} />);
        select = forecastOptions.map(({ value, name }) => <option key={value} value={value}>{t(name)}</option>)
    } else {
        hours = <ForecastItemSkeleton />
    }

    return (
        <section className='details grid forecast'>
            <div className="forecastHeader">
                <button onClick={() => setTemp(!tempUnit)} className='btn-temp btn-temp__m'>
                    {t('Zmień na')} {tempUnit ? <>&#8451;</> : <>&#8457;</>}</button>
                <h2>{city && city.name}</h2>
                <form className='form-forecast'>
                    <div className="select"><select onChange={(e) => onChangeSelect(e)}>
                        {select}
                    </select></div>
                </form>
            </div>
            <ul>
                {hours}
            </ul>
        </section>
    )
}