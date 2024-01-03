const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

export const getCityUrl = path => `https://api.weatherbit.io/v2.0/current?city=${path}&key=${API_KEY}`
export const getCurrentCityUrl = (lat,lon) => `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${API_KEY}
`
