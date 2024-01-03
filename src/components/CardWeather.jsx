import { useEffect, useState } from "react";
import { getCityWeather } from "../services/currentWeather";

const CardWeather = ({ currentWeather, locationWeather }) => {
  let weatherData = {};
  let iconCode = "";
  let iconSrc = "";
  let weatherDescription;
  let weatherSpd;
  let weatherDir;
  let airQuality;
  let airPress;
  let humidity;
  let uv;

  if (Object.keys(currentWeather).length === 0) {
    weatherData = locationWeather;
  } else {
    weatherData = currentWeather;
  }

  if (Object.keys(weatherData).length != 0) {
    iconCode = weatherData.weather.icon;
    iconSrc = `../../public/icons/${iconCode}.png`;
    weatherDescription = weatherData.weather.description;
    weatherDir = weatherData.wind_cdir_full.toUpperCase();
    weatherSpd = weatherData.wind_spd.toFixed(0);
    airQuality = weatherData.aqi;
    airPress = weatherData.pres;
    humidity = weatherData.rh;
    uv = weatherData.uv.toFixed(1);
  }

  console.log(weatherData);

  return (
    <section className="card h-3/5 w-11/12 p-5 transition-all">
      <h2 className="p-0 mb-4 flex flex-col divide-x">
        {weatherData.city_name}, {weatherData.country_code}.
        <svg
          className="w-[20px]"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
            strokeWidth="0"
            fill="red"
          />
        </svg>
      </h2>
      <header className="card-header h-50 rounded flex justify-between">
        <div className="flex items-center justify-center h-[65%] min-h-32 w-[55%] shadow-3xl rounded-md hover:scale-105 transition-transform duration-500 select-none">
          <div className="icon flex flex-col justify-center items-center">
            <img src={iconSrc} alt="weather icon" className="w-20 max-w-20" />
            <p className="text-[13px]">{weatherDescription}</p>
          </div>
          <p className="text-3xl pl-1 md:text-3xl lg:text-4xl max-w-full after:content-['\00b0']">
            {weatherData.temp}
          </p>
          <span>C</span>
        </div>
        <div className="wind w-[40%] shadow-3xl p-2 relative flex flex-col justify-center rounded-md hover:scale-105 transition-transform duration-500 select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-wind absolute top-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="blue"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
            <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
            <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
          </svg>
          <p className="mt-3 max-sm:text-[13px]">{weatherDir}</p>
          <p>{weatherSpd} km/h</p>
        </div>
      </header>
      <main className="w-full py-5">
        <div className="max-sm:h-72 gap-5 grid grid-cols-2 grid-rows-2 relative select-none">
          <article className="w-full h-full min-h-32 shadow-3xl p-2 rounded-md hover:scale-105 transition-transform duration-500">
            <header className="h-1/5 relative flex justify-center">
              <svg
                className="absolute left-2 top-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="blue"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14.468 10a4 4 0 1 0 -5.466 5.46" />
                <path d="M2 12h1" />
                <path d="M11 3v1" />
                <path d="M11 20v1" />
                <path d="M4.6 5.6l.7 .7" />
                <path d="M17.4 5.6l-.7 .7" />
                <path d="M5.3 17.7l-.7 .7" />
                <path d="M15 13h5a2 2 0 1 0 0 -4" />
                <path d="M12 16h5.714l.253 0a2 2 0 0 1 2.033 2a2 2 0 0 1 -2 2h-.286" />
              </svg>
              <p className="text-gray-600">Air Quality</p>
            </header>
            <main className="w-full h-4/5 flex justify-center items-center text-5xl">
              <p>{airQuality}</p>
            </main>
          </article>
          <article className="w-full h-full shadow-3xl p-2 rounded-md hover:scale-105 transition-transform duration-500">
            <header className="relative flex justify-center">
              <svg
                className="absolute left-2 top-0 rotate-90"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="blue"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 12l-10 0" />
                <path d="M14 12l-4 4" />
                <path d="M14 12l-4 -4" />
                <path d="M20 4l0 16" />
              </svg>
              <p className="text-gray-600">Pressure</p>
            </header>
            <main className="w-full h-4/5 flex justify-center items-center text-5xl font">
              <p>{airPress}</p>
            </main>
          </article>
          <article className="w-full h-full shadow-3xl p-2 rounded-md hover:scale-105 transition-transform duration-500">
            <header className="flex justify-center relative">
              <svg
                className="absolute left-2 top-0"
                width="24"
                height="24"
                viewBox="0 0 26 26"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M13.905 2.923l.098 .135l4.92 7.306a7.566 7.566 0 0 1 1.043 3.167l.024 .326c.007 .047 .01 .094 .01 .143l-.002 .06c.056 2.3 -.944 4.582 -2.87 6.14c-2.969 2.402 -7.286 2.402 -10.255 0c-1.904 -1.54 -2.904 -3.787 -2.865 -6.071a1.052 1.052 0 0 1 .013 -.333a7.66 7.66 0 0 1 .913 -3.176l.172 -.302l4.893 -7.26c.185 -.275 .426 -.509 .709 -.686c1.055 -.66 2.446 -.413 3.197 .55zm-2.06 1.107l-.077 .038l-.041 .03l-.037 .036l-.033 .042l-4.863 7.214a5.607 5.607 0 0 0 -.651 1.61h11.723a5.444 5.444 0 0 0 -.49 -1.313l-.141 -.251l-4.891 -7.261a.428 .428 0 0 0 -.5 -.145z"
                  strokeWidth="0"
                  fill="blue"
                />
              </svg>
              <p className="text-gray-600">Humidity</p>
            </header>
            <main className="w-full h-4/5 flex justify-center items-center text-5xl">
              <p>{humidity}%</p>
            </main>
          </article>
          <article className="w-full h-full shadow-3xl p-2 rounded-md hover:scale-105 transition-transform duration-500">
            <header className="flex justify-center relative">
              <svg
                className="absolute left-2 top-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="blue"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
              </svg>
              <p className="text-gray-600">UV</p>
            </header>
            <main className="w-full h-4/5 flex justify-center items-center text-5xl">
              <p>{uv}</p>
            </main>
          </article>
        </div>
      </main>
      <footer></footer>
    </section>
  );
};

export default CardWeather;
