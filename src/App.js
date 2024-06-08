
import { React, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocation, faClock, faDroplet, faWind, faFlag } from '@fortawesome/free-solid-svg-icons';
import airper from './png/icons8-atmospheric-pressure-64.png'
import Patchylightdrizzle from './Video/Patchy light drizzle.mp4'
import Wow from "wowjs";
import "animate.css";
import './App.css'


function App() {

  const [apiData, setApiData] = useState(null)
  const [location, setLocation] = useState("")


  var search;



  const api = () => fetch(`https://api.weatherapi.com/v1/current.json?key=775607beac01499d9b9130530240205&q=${search}&aqi=no`)
    .then((res) => {
      res.json()
        .then((result) => {
          setApiData(result)
        })
    })



  useEffect(() => {
    const wow = new Wow.WOW();
    wow.init();
    api();
    getBackgroundVideoSource("Sunny");

  }, [])

  if (!location) {
    search = "pune"
  }

  else {
    search = location
  }

  const enter = (event) => {
    if (event.key === "Enter") {
      api();
      getBackgroundVideoSource();
      getBackgroundVideoSource(apiData.current.condition.text)
      console.log(getBackgroundVideoSource(apiData.current.condition.text));
    }
  }

  const click = () => {
    api();
    getBackgroundVideoSource(apiData.current.condition.text)
    console.log(getBackgroundVideoSource(apiData.current.condition.text));
  }


  const weatherConditionVideos = {
    'Sunny': "https://cdn.pixabay.com/video/2021/03/03/66810-520427372_tiny.mp4",
    'Clear': "https://cdn.pixabay.com/video/2021/03/03/66810-520427372_tiny.mp4",
    'Patchy rain nearby': Patchylightdrizzle,
    'Rainy': "https://cdn.pixabay.com/video/2019/10/24/28236-368501609_tiny.mp4",
    'Partly cloudy': "xxx"
  };


  const getBackgroundVideoSource = (conditionText) => {
    return weatherConditionVideos[conditionText] || 'https://cdn.pixabay.com/video/2019/10/24/28236-368501609_tiny.mp4';
  };


  return (


    <div className=' '>
      <div className='main wow swing' data-wow-duration="1s" data-wow-delay="0s">

        <div className='video-background'>
          {apiData && (
            <video autoPlay loop muted>
              <source src={getBackgroundVideoSource(apiData.current.condition.text)} type='video/mp4' />
            </video>
          )}
        </div>

        <div className='d-flex flex-column bg-transparent justify-content-center align-items-center mt-4'>
          <div className='d-flex search  align-items-center mb-3 rounded-5 Wow bounce' >

            <input type="text" className='rounded-5 py-2 text-capitalize fs-3 bg-transparent ms-4 '
              style={{ outline: "none", border: "0", marginLeft: '1rem' }}
              onChange={(e) => setLocation(e.target.value)} value={location}
              onKeyDown={enter}
              placeholder='City Name'
            />



            <FontAwesomeIcon icon={faSearch}
              className='fasearch fs-2 mt-1 ' role="button"
              onClick={click}
            />


          </div>

          {
            apiData && (

              <>

                <div className='card card1  m-2 mb-5 rounded-5 -5 wow animate__backInDown' data-wow-duration="1s" data-wow-delay="0s" data-wow-offset="0" >

                  <div className="card-header">
                    <div className='d-flex align-items-center ms-2 '>

                      <FontAwesomeIcon icon={faLocation} className='fs-2' />
                      <h4 className='mt-2 ms-4 '>{apiData.location.name}, {apiData.location.region}, {apiData.location.country}</h4>

                    </div>

                  </div>

                  <div className='card-body  row' >
                    <div className='col-6'>
                      <h1 className='ms-2 mt-5 cell '> {apiData.current.temp_c}°</h1>
                      {/* <h3 className='me-2'>F : {apiData.current.temp_f}</h3> */}
                    </div>

                    <div className='col-6 '>
                      <img src={apiData.current.condition.icon} alt="Weather Icon" className='ms-4 h-50 w-50 ' style={{ marginTop: "-1rem", marginBottom: "-2rem" }} />
                      <h2 className='ms-4 mt-5' style={{ marginBottom: "-1rem" }}> {apiData.current.condition.text}</h2>
                    </div>
                  </div>

                  <div className="card-footer ms-2">
                    <div className='d-flex align-items-center '>
                      <FontAwesomeIcon icon={faClock} className='fs-2' />
                      <h4 className='mt-2 ms-4 '>{apiData.location.localtime} </h4>
                    </div>
                  </div>


                </div>

                <div className='container'>
                  <div className='row'>

                    <div className='col-sm-6 col-lg-3 mt-2 mb-3 '>
                      <div className="card rounded-5  wow animate__backInLeft" data-wow-duration="1s" data-wow-delay="0s" data-wow-offset="0" >
                        <div className="card-header text-center">
                          <h4 className="wow animate__backInLeft " data-wow-duration="1.3s" >Humidity</h4>
                        </div>

                        <div className='card-body d-flex justify-content-between align-items-center wow animate__backInLeft ' data-wow-duration="1.5s" data-wow-delay="0s" data-wow-offset="0">
                          <FontAwesomeIcon icon={faDroplet} className='fs-2' />
                          <h2>{apiData.current.humidity}%</h2>
                        </div>
                      </div>
                    </div>

                    <div className='col-sm-6 col-lg-3 mt-2 mb-3 '>
                      <div className="card rounded-5  wow animate__backInLeft" data-wow-duration="1s" data-wow-delay="0s" data-wow-offset="0" >
                        <div className="card-header text-center">
                          <h4 className="wow animate__backInLeft " data-wow-duration="1.3s" >Wind</h4>
                        </div>

                        <div className='card-body d-flex justify-content-between align-items-center wow animate__backInLeft ' data-wow-duration="1.5s" data-wow-delay="0s" data-wow-offset="0">
                          <FontAwesomeIcon icon={faWind} className='fs-2' />
                          <h2>{apiData.current.wind_kph} kph</h2>
                        </div>
                      </div>
                    </div>

                    <div className='col-sm-6 col-lg-3 mt-2 mb-3 '>
                      <div className="card rounded-5  wow animate__backInRight" data-wow-duration="1s" data-wow-delay="0s" data-wow-offset="0" >
                        <div className="card-header text-center">
                          <h4 className="wow animate__backInLeft " data-wow-duration="1.3s" >Wind Direction</h4>

                        </div>

                        <div className='card-body d-flex justify-content-between align-items-center wow animate__backInLeft ' data-wow-duration="1.5s" data-wow-delay="0s" data-wow-offset="0">
                          <FontAwesomeIcon icon={faFlag} className='fs-2' />
                          <h2>{apiData.current.wind_dir}</h2>
                        </div>
                      </div>
                    </div>

                    <div className='col-sm-6 col-lg-3 mt-2 mb-3 '>
                      <div className="card rounded-5  wow animate__backInRight" data-wow-duration="1s" data-wow-delay="0s" data-wow-offset="0" >
                        <div className="card-header text-center">
                          <h4 className="wow animate__backInLeft " data-wow-duration="1.3s" >Air Pressure</h4>
                        </div>

                        <div className='card-body d-flex justify-content-between align-items-center'>
                          <img className='fs-1' style={{ height: "40px", width: "40px", color: "white" }} src={airper} alt="" />

                          <h2>{apiData.current.pressure_mb}mb</h2>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </>

            )
          }


        </div>
      </div>
    </div>
  )
}

export default App
