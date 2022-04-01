import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export default function useFetch(config, dependencies = []) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = useCallback(async () => {
        try {
            const { data } = await axios(config);
            setData(data)
            setLoading(false)
        } catch (e) {
        }
    }, [config])
    useEffect(() => {
        fetchData();
    }, [fetchData, ...dependencies])
    return {
        data, loading
    }
}