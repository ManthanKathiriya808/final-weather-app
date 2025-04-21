import React from 'react'
import FetchApi from '../hooks/FetchApi'

const MoreData = ({cityName}) => {

    const {data} = FetchApi(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=488ca0aacf053e37a926e67f110b2367`)
    console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default MoreData

