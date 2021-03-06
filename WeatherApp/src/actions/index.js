import axios from 'axios';

const API_KEY = "20bba0e2f68be1db73a79a7b6096ced7";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url =`${ROOT_URL}&q=${city},pl`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
