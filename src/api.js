import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => { 
        
        setWeatherData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log("weatherData",weatherData)

  return (
    <>
    {weatherData?.map(item => (    
    <div>
      <h1>New</h1>
      <p>id: {item.id}</p>     
      <p>title: {item.title}</p>
      <p>body: {item.body}</p>     
    </div>
    ))
}
  </>
  )

}
export default Weather;
