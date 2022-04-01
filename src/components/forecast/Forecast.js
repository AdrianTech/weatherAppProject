import React from 'react';
import useFetch from '../../hooks/useFetch';
import { DataContext } from '../../store/dataContext';
import { API, forecastOptions } from '../../utils/config';
import { getItem, ternaryFunction } from '../../utils/helpers';
import HourlyWeatherForecast from './HourlyWeatherForecast';
import useTranslations from '../../hooks/useTranslations/useTranslations';
import ForecastItemSkeleton from '../skeletons/ForecastItemSkeleton';
import ForecastItemSelect from '../skeletons/ForecastSelectSkeleton'
const config = {
    method: 'get',
    url: "",
    headers: {
        Domain: "weatheraproject.netlify.app"
    }
}

export default function Forecast() {
    const { city: weather_city } = React.useContext(DataContext);
    const [defaultHours, setDefaultHours] = React.useState('12');
    const { t } = useTranslations();
    const forecastCity = ternaryFunction({defaultValue: weather_city.name, passValue: weather_city.name, firstValue: weather_city.name, secondValue: getItem('city')});
    config.url = `${API.linkForecast}${forecastCity}${API.settings}${getItem('lang')}`;
    const { data, loading } = useFetch(config, [weather_city.name]);
    const { list, city } = data;
    let [hours, select] = [];

    const onChangeSelect = ({ target: { value } }) => setDefaultHours(value);

    if (list) {
        hours = list.map(city => city.dt_txt.slice(11, 13) === defaultHours && <HourlyWeatherForecast key={city.dt} list={city} city={data.city} />);
        select = forecastOptions.map(({ value, name }) => <option key={value} value={value}>{t(name)}</option>)
    } else {
        hours = <ForecastItemSkeleton />
    }

    return (
        <section className='details grid forecast'>
            <h2>{city && city.name}</h2>
            <form className='form-forecast'>
                {!loading ? <div className="select"><select onChange={(e) => onChangeSelect(e)}>
                    {select}
                </select></div>: <ForecastItemSelect/>
                }
            </form>
            <ul>
                {hours}
            </ul>
        </section>
    )
}