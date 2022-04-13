import React from "react";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { DataContext } from "../store/dataContext";

export default function useFetch(config) {
    const { forecastData, setForecastData } = React.useContext(DataContext);
    const [loading, setLoading] = useState(true);
    const fetchData = useCallback(async () => {
        try {
            const { data } = await axios(config);
            setForecastData(data)
            setLoading(false)
        } catch (e) {
        }
    }, [setForecastData, config])
    useEffect(() => {
        fetchData();
    }, [fetchData, config.url, setForecastData])
    return {
        forecastData, loading
    }
}