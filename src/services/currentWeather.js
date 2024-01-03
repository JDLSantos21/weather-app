import axios from "axios";
import { getCityUrl, getCurrentCityUrl } from "../config"

export const getCityWeather = async city =>{

    const apiUrl = getCityUrl(`${city}`)
    const res = await axios.get(apiUrl);
    const data = res.data.data[0];
    return data;
}

export const getCurrentCityWeather = async (lat,lon) => {
    const apiUrl = getCurrentCityUrl(lat,lon)
    const res = await axios.get(apiUrl)
    const data = res.data.data[0]
    return data
}