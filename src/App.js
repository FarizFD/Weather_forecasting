import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Weather from './Component/Weather';

function App() {
  const KEY = '6f7cf50b95b6d2453ca75626e05609b9';
  const [weather, setWeather] = useState(null);
  const [cityInput, setCityInput] = useState('');

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${KEY}`
      );
      const data = response.data;
      setWeather(data);
      toast.dismiss(); // Dismiss any existing toasts
    } catch (error) {
      console.error(error);
      setWeather(null);
      toast.error('City not found. Please enter a valid city name.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <div className='justify-content-center align-item-center input-group w-50 mt-5 bg-info ' style={{ marginLeft: '25%' }}>
        <input
          type="text"
          className='form-control'
          placeholder="Search the City Name"
          onChange={(e) => setCityInput(e.target.value)}
        />
        <button className='btn btn-warning'
          type="button" onClick={fetchWeatherData}>
          Search
        </button>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {weather === null ? (
        <p style={{ marginLeft: '40%' }} className='mt-3 display-6'>Weather Tracker</p>
      ) : weather.list.length > 0 ? (
        <Weather
          Cityname={weather.city.name}
          countryName={weather.city.country}
          climate={weather.list[0].weather[0]?.description}
          temperature={weather.list[0].main?.temp}
          tempFeel={weather.list[0].main?.feels_like}
          humidity={weather.list[0].main?.humidity}
          windSpeed={weather.list[0].wind?.speed}
        />
      ) : null}
    </div>
  );
}

export default App;