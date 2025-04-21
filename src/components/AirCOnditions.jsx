import React from 'react'

const AirCOnditions = ({data}) => {
  return (
    <div>
          <div>
                    <div className='components rounded-xl p-5'>
                     <h5 className='text-slate-400 font-bold text-center p-1'>AIR CONDITIONS</h5>
                     <div className='mt-5 pt-3 p-10 flex flex-col gap-10'>
                        <div className='flex justify-between'>
                            <div className=' flex flex-grow flex-col gap-2'>
                              <h2 className='text-slate-400 text-2xl font-medium'>🥵 Real Feel</h2>
                              <h1 className='text-3xl'>{data?.main?.feels_like ? (data?.main?.feels_like - 273.15).toFixed(1) : "Loading..."}°</h1>
                            </div>
                            <div className=' flex flex-grow flex-col gap-2'>
                              <h2 className='text-slate-400 text-2xl font-medium'>🎈 Pressure</h2>
                              <h1 className='text-3xl'>{data?.main?.pressure } hPa</h1>
                            </div>
                            <div className=' flex  flex-grow flex-col gap-2'>
                              <h2 className='text-slate-400  text-2xl font-medium'>💧 Humidity</h2>
                              <h1 className='text-3xl'>{data?.main?.humidity }%</h1>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex-grow  flex flex-col gap-2'>
                              <h2 className='text-slate-400 text-2xl font-medium'>🌞 Max Temperature</h2>
                              <h1 className='text-3xl'>{data?.main?.temp_max ? (data?.main?.temp_max - 273.15).toFixed(1) : "Loading..."}°</h1>
                            </div>
                            <div  className='flex-grow  flex flex-col gap-2'>
                              <h2 className='text-slate-400 text-2xl font-medium '>👀 Visibility</h2>
                              <h1 className='text-3xl'>{data?.visibility ? (data.visibility / 1000).toFixed(1) + " km" : "Loading..."}</h1>
                            </div>
                            <div className='flex-grow  flex flex-col gap-2'>
                              <h2 className='text-slate-400 text-2xl font-medium'>🌙 Min Temperature</h2>
                              <h1 className='text-3xl'>{data?.main?.temp_min ? (data?.main?.temp_min - 273.15).toFixed(1) : "Loading..."}°</h1>
                            </div>
                         
                        </div>
                     </div>
                    </div>
                </div>
    </div>
  )
}

export default AirCOnditions
