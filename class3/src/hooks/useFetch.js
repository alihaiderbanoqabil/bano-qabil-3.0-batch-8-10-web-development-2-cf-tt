import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const getData = async (url) => {
        setIsLoading(true);
        try {
            const { data } = await axios(url);
            setData(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData(url);
    }, [url])

    return { isLoading, error, data }
}
