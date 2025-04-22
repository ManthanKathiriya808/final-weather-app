// import React, { useEffect } from 'react'
import FetchApi from '../hooks/FetchApi'

const MoreData = ({cityName}) => {

    const {data} = FetchApi(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=488ca0aacf053e37a926e67f110b2367`)
    
const dailyData = data?.list?.filter((ele) => ele.dt_txt.includes("12:00:00"))
console.log(dailyData)

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

const currentCondition = dailyData?.map((ele)=> ele.weather[0].main)
// console.log(currentCondition)
const emoji = weatherIcons[currentCondition] || "🌫️"; // fallback

    
    return (
      <>
        <div className='components rounded-xl p-2  py-5'>
              <div>

              <h5 className='text-slate-400 font-bold text-center p-1'>5-DAY FORECAST</h5>
              <div className='flex flex-col    px-3 gap-4'>

              {
                dailyData ? (
                    
                  dailyData?.map((ele)=> (
                    <div  key={ele.dt_txt}>
                      <div className='flex items-center gap-3    p-5'>
                    <h6 className=' flex-grow text-sm  text-slate-400'>{new Date(ele.dt_txt).toDateString()}</h6>
                    <div className='flex   gap-1'>{weatherIcons[ele.weather[0].main]}<p>{ele.weather[0].main }</p></div>
                  <div className=' flex-grow gap-1 flex flex-col text-sm'>
                  <h3 className='flex  '>🌞{(ele.main.temp_max -273.15).toFixed(1)}   </h3>
                  <h5 className='flex text-slate-400'>🌙{ (ele.main.temp_min -273.15).toFixed(1)}  </h5>
                  </div>
                  </div>
                    <hr className='text-slate-400' />
                    </div>
                  ))
                )
                :
                <p className='text-3xl'>Loading forecast data...</p>
              }

              </div>
              
              </div>
        </div>
      </>
  )
}

export default MoreData

