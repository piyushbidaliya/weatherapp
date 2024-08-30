import React from 'react';
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')


 const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid="your api key"`

  const searchlocation = (event)=> {
    if (event.key === 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }



  return (
    <div className="App">
      <div className='search'>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          type='text' 
          placeholder='Enter Location'
          onKeyPress={searchlocation}
        />
      </div>
     <div className='container'>
      <div className='Top'>
        <div className='location'>
          <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp}°F</h1> : null }
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
      </div>
      {data.name !== undefined &&
      <div className= 'Bottom'>
        <div className='feels'>
          {data.main ? <p>{data.main.feels_like}°F</p> : null}
          <p>Feels Like</p>
        </div>
        <div className='humidity'>
          {data.main ? <p>{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className='winds'>
          {data.wind ? <p>{data.wind.speed}mph</p> : null}
          <p>Wind Speed</p>
        </div>
       </div>
       }
     </div>
    </div>
  );
}

export default App;
