import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Weather = ({ Cityname, countryName, climate, temperature, tempFeel, humidity, windSpeed }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${require('../Asset/weatherImage.jpg')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginLeft: '25%',
  };

  return (
    <>
      <div className='Card'>
        <div className='weather card w-50 p-4 text-light' style={backgroundImageStyle}>
          <h3 className="mb-4">Weather-Forecasting</h3>
          <p className="mb-2">City Name: {Cityname}</p>
          <p className="mb-2">Country Name: {countryName}</p>
          <p className="mb-2">Climate: {climate}</p>
          <p className="mb-2">Temperature: {temperature}&deg;C</p>
          <p className="mb-2">Temp Feel: {tempFeel}&deg;C</p>
          <p className="mb-2">Humidity: {humidity}%</p>
          <p className="mb-2">Wind Speed: {windSpeed} m/s</p>
        </div>
      </div>
    </>
  );
};

export default Weather;