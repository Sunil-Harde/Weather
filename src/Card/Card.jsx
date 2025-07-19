import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocation, faClock, faDroplet, faWind, faFlag } from '@fortawesome/free-solid-svg-icons';
import airper from '../png/icons8-atmospheric-pressure-64.png';

function Card({apiData}) {
  return (
    <>
        {apiData && (
            <>
              <div className='card card1 m-2 mb-5 mb-md-4 rounded-5' data-aos='fade-down' data-aos-easing='linear'>
                <div className='card-header'>
                  <div className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faLocation} className='fs-2' />
                    <h4 className='mt-2 ms-4'>{apiData.location.name}, {apiData.location.region}, {apiData.location.country}</h4>
                  </div>
                </div>

                <div className='card-body row' data-aos='fade-down' data-aos-easing='linear' data-aos-duration='1200'>
                  <div className='col-6'>
                    <h1 className='ms-2 mt-5 cell'>{apiData.current.temp_c}°</h1>
                  </div>
                  <div className='col-6'>
                    <img src={apiData.current.condition.icon} alt='Weather Icon' className='ms-4 h-50 w-50' style={{ marginTop: '-1rem', marginBottom: '-2rem' }} />
                    <h2 className='ms-4 mt-5' style={{ marginBottom: '-1rem' }}>{apiData.current.condition.text}</h2>
                    <h2 className='ms-4 mt-5' style={{ marginBottom: '-1rem' }}>{apiData.current.condition.text}</h2>
                    <h2 className='ms-4 mt-5' style={{ marginBottom: '-1rem' }}>{apiData.current.condition.text}</h2>
                  </div>
                </div>

                <div className='card-footer'>
                  <div className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faClock} className='fs-2' />
                    <h4 className='mt-2 ms-4'>{apiData.location.localtime}</h4>
                    <h4 className='mt-2 ms-4'>{apiData.location.localtime}</h4>
                  </div>
                </div>
              </div>

              <div className='container'>
                <div className='row'>
                  <div className='col-sm-6 col-lg-3  mb-3 '>
                    <div className="card rounded-5" data-aos="fade-right" data-aos-duration="1500">
                      <div className="card-header text-center" data-aos="fade-right" data-aos-easing="" data-aos-duration="1700">
                        <h4>Humidity</h4>
                      </div>

                      <div className='card-body d-flex justify-content-between align-items-center'  >
                        <FontAwesomeIcon icon={faDroplet} className='fs-2' data-aos="fade-right" data-aos-duration="1700" />
                        <h2 data-aos="" data-aos-duration="">{apiData.current.humidity}%</h2>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-3 mt-2 mb-3 '>
                    <div className="card rounded-5  " data-aos="fade-right" data-aos-duration="1200" data-aos-delay="50">
                      <div className="card-header text-center">
                        <h4 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1200">Wind</h4>
                      </div>

                      <div className='card-body d-flex justify-content-between align-items-center'>
                        <FontAwesomeIcon icon={faWind} className='fs-2' data-aos="fade-right" data-aos-duration="1200" />
                        <h2>{apiData.current.wind_kph} kph</h2>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-3 mt-2 mb-3 '>
                    <div className="card rounded-5  " data-aos="fade-left" data-aos-duration="1000" >
                      <div className="card-header text-center" data-aos="fade-left" data-aos-duration="1200">
                        <h4>Wind Direction</h4>
                      </div>

                      <div className='card-body d-flex justify-content-between align-items-center'>
                        <FontAwesomeIcon icon={faFlag} className='fs-2' data-aos="fade-left" data-aos-duration="1200" />
                        <h2>{apiData.current.wind_dir}</h2>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-3 mt-2 mb-3 '>
                    <div className="card rounded-5  " data-aos="fade-left" data-aos-duration="1500">
                      <div className="card-header text-center" >
                        <h4 data-aos="fade-left" data-aos-duration="1500">Air Pressure</h4>
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
          )}
    </>
  )
}

export default Card