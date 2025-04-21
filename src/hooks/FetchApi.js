


import React from 'react'
import { useEffect, useState } from 'react'

const FetchApi = (url) => {
      const [data, setData] = useState("");

      const app =  () =>{
        fetch(url)
        .then((response) => response.json())
        .then((res) =>setData(res))
       
    }
    

    
    useEffect(()=>{
     
        app()
    },[url])


  return {data}
}

export default FetchApi

