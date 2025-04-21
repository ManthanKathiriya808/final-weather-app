import React from 'react'
import AirCOnditions from './AirCOnditions';
import FetchApi from '../hooks/FetchApi';

const Location = ({cityName}) => {

    const {data} = FetchApi(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f27f657ceeac10c4def5151bb67622d3`)
    
  const weatherIcons = {
    Clear: "☀️",
    "Few Clouds": "🌤️",
    Clouds: "☁️",
    Rain: "🌧️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Smoke: "🌫️",
    Haze: "🌫️",
    Fog: "🌫️",
    Dust: "🌫️",
    Sand: "🌫️",
    Ash: "🌫️",
    Squall: "🌫️",
    Tornado: "🌪️"
  };

  const currentCondition = data?.weather?.[0]?.main;
  const emoji = weatherIcons[currentCondition] || "🌫️"; // fallback

  return (
    <>
            <div>
      <div className="px-5 pt-5 mx-12">
        <div className="grid text-start p-6 grid-flow-col grid-rows-2 gap-3">
          {/* City Name and Sunrise/Sunset */}
          <div className="col-span-2 flex flex-col gap-3">
            <h1 className="text-5xl font-bold">
              {data.name} 🏙️
            </h1>
            <div className="text-slate-400">
              <h2>Sunrise 🌅: {data?.sys?.sunrise ? new Date(data.sys.sunrise * 1000).toLocaleTimeString() : "Loading..."}</h2>
              <h2>Sunset 🌇: {data?.sys?.sunset ? new Date(data.sys.sunset * 1000).toLocaleTimeString() : "Loading..."}</h2>
            </div>
          </div>

          {/* Temperature */}
          <div className="col-span-2 text-5xl font-bold flex items-center">
            🌡️ {data?.main?.temp ? (data.main.temp - 273.15).toFixed(1) : "Loading..."}°
          </div>

          {/* Weather Icon */}
          <div className="row-span-2 text-[100px] items-center flex justify-center animate-bounce">
         
            {emoji}
            {data?.weather?.[0]?.main && <h2>{data.weather[0].main}</h2>}
          </div>
        </div>
      </div>
    </div>



    <AirCOnditions data={data}/>
    </>
  );
};

export default Location;



// https://api.openweathermap.org/data/2.5/forecast?q=london&appid=488ca0aacf053e37a926e67f110b2367

