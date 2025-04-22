
import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import FetchApi from './hooks/FetchApi'
import Location from './components/Location'
import MoreData from './components/MoreData'


function App() {


  const [cityName,setCityName] = useState("bhavnagar")


 




  return (
    <>
    {/* main */}
        <div className='flex justify-evenly items-end gap-3'>

          {/* left  */}
            <div>

                    {/* nav */}
                <div>
                     <Input cityName={cityName}  setCityName={setCityName}/>
                </div>

                {/* location */}

                <div >
                    <Location cityName={cityName}/>
                </div>

             
            </div>
            
            {/* rigth */}
            <div>
              <MoreData cityName={cityName}/>
            </div>
        </div>
    </> 
  )
}

export default App
