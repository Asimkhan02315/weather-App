import { useEffect, useState } from 'react'
import './App.css'
import moment from 'moment';

function App () {

const [city, setCity] = useState('')
const [weatherData, setWeatherData] = useState(null)

const fetchWeatherData = async (city) => {
  const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f1c377548eb5185671a14610451cb57`)
  const data = await response.json()
  setWeatherData(data)
  console.log(data);
}


const handleSubmit = (e) => {
  e.preventDefault()
  fetchWeatherData(city)
}


useEffect(() => {
fetchWeatherData('London')
}, [])

return (
  <div className='App'>
    <h1>Weather App</h1>
    <form onSubmit={handleSubmit}>
      <input type='text' value={city} onChange={(e) => {
        setCity(e.target.value)
      }}/>
      <button type='submit'>Search</button>
    </form>

{weatherData && 

(

  <div>
  <h2>{weatherData.name}, {weatherData.sys.country}</h2>
  <img alt="..."
  
className="icon-small" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdqcdFnCJUYSIrNuyLEqqsiqO5uVTFxKVSX_Fa1I&s/${weatherData.weather[0].icon}.png`} />
  
  <p>Temperature: {Math.round(weatherData.main.temp -273.15)}°C</p>
  <p>Min_Temp: {Math.round(weatherData.main.temp_min -273.15)}°C</p>
  <p>Max_Temp: {Math.round(weatherData.main.temp_max -273.15)}°C</p>
  <p>Description: {weatherData.weather[0].description}</p>
  <p>Humidity: {weatherData.main.humidity}%</p>
  <p>Wind Speed: {weatherData.wind.speed}m/s</p>
  <p>Pressure: {weatherData.main.pressure}hPa</p>
  <p>Visibility: {weatherData.sys.visibility}</p>
  <p>Time Zone: {weatherData.sys.timezone}%</p>
  <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
  <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
  <p>Day: {moment().format('dddd')}</p>
  <p>Date: {moment().format('LL')}</p>
</div>

)

}

  </div>
)
}

export default App



































// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);

//   const fetchWeatherData = async (city) => {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f1c377548eb5185671a14610451cb57`);
//     const data = await response.json();
//     setWeatherData(data);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//    ; fetchWeatherData(city)
//   };

//   useEffect(() => {
//     fetchWeatherData('London');
//   }, []);

//   return (
//     <div className="App">
//       <h1>Weather App</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={city} onChange={(event) => setCity(event.target.value)} placeholder="Enter a city" />
//         <button type="submit">Search</button>
//       </form>
//       {weatherData && (
//         <div>
//           <h2>{weatherData.name}, {weatherData.sys.country}</h2>
//           <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
//           <p>Description: {weatherData.weather[0].description}</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//           <p>Wind Speed: {weatherData.wind.speed} m/s</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;