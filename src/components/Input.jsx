


const Input = ({cityName,setCityName}) => {


  return (
    <div className='components rounded-xl px-2 '>
    
            <div>
            <input type="text" className='p-3 text-lg  w-[100%]' value={cityName} onChange={(e) => setCityName(e.target.value)}  placeholder="Enter your City"/>
            </div>
     
    </div>
  )
}

export default Input
