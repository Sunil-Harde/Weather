import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LocationNotFound from './LocationNotFound/LocationNotFound';
import WeatherConditionVideos from './Video/Videos';
import Video from './Video/ShowVideo';
import Card from './Card/Card';
import "aos/dist/aos.css";
import AOS from "aos";
import './App.css';



function App() {
  const [apiData, setApiData] = useState(null);
  const [location, setLocation] = useState('');
  const [videoSource, setVideoSource] = useState('');
  const [videoKey, setVideoKey] = useState(0);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
    });
    fetchWeather();
  }, []);

  const fetchWeather = () => {
    let searchLocation = location || 'pune'; // Default location if none specified
    fetch(`https://api.weatherapi.com/v1/current.json?key=775607beac01499d9b9130530240205&q=${searchLocation}&aqi=no`)
      .then((res) => {
        if (!res.ok) {
          throw new setNotFound(true)
        }
        return res.json();
      })
      .then((result) => {
        setApiData(result);
        updateVideoSource(result.current.condition.text);
      })
      .catch((error) => {
        // alert('Error fetching weather:', error);
      });
  };

  const updateVideoSource = (conditionText) => {
    const videoUrl = WeatherConditionVideos[conditionText] || 'https://cdn.pixabay.com/video/2023/10/26/186588-878455871_tiny.mp4';
    setVideoSource(videoUrl);
    setVideoKey(videoKey + 1);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchWeather();
    }
  };

  const handleClick = () => {
    fetchWeather();
  };


  notFound && (
    setTimeout(() => {
      setNotFound(false);
    }, 5000)
  )

  return (
    <div className=''>
      <div className='main'>
        <Video videoSource={videoSource} videoKey={videoKey} />

        <div className='d-flex flex-column bg-transparent justify-content-center align-items-center mt-2'>
          <div className='d-flex search align-items-center mb-3 rounded-5'>
            <input
              type='text'
              className='rounded-5 py-2 text-capitalize fs-3 bg-transparent text-light ms-4'
              style={{ outline: 'none', border: '0', marginLeft: '1rem' }}
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              onKeyDown={handleKeyPress}
              placeholder='City Name'
            />
            <FontAwesomeIcon icon={faSearch} className='fasearch fs-2 mt-1' role='button' onClick={handleClick} />
          </div>

          <LocationNotFound notFound={notFound} setNotFound={setNotFound} />

          <Card apiData={apiData} />

        </div>
      </div>
    </div>
  );
}

export default App;
