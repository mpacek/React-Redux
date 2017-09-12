import axios from 'axios';

const API_KEY = 'd3f6520c68f6b827e995bb23c7944838';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&units=metric&q=${city},pl`
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}