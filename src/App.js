import { React, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocation, faClock, faDroplet, faWind, faFlag } from '@fortawesome/free-solid-svg-icons';



function App() {

  const [apiData, setApiData] = useState(null)
  const [location, setLocation] = useState("")


  var search;

  if (!location) {
    search = "pune"

    fetch(`https://api.weatherapi.com/v1/current.json?key=775607beac01499d9b9130530240205&q=${search}&aqi=no`)

      .then((Response) => {
        Response.json()

          .then((result) => {
            setApiData(result)
          })

      })

  }

  else {
    search = location
  }


  const enter = (event) => {

    if (event.key === "Enter" || !location) {

      fetch(`https://api.weatherapi.com/v1/current.json?key=775607beac01499d9b9130530240205&q=${search}&aqi=no`)

        .then((Response) => {
          Response.json()

            .then((result) => {
              setApiData(result)
            })

        })

    }
  }


  const click = () => {

    fetch(`https://api.weatherapi.com/v1/current.json?key=775607beac01499d9b9130530240205&q=${search}&aqi=no`)

      .then((Response) => {
        Response.json()

          .then((result) => {
            setApiData(result)
          })

      })
  }




  console.log(apiData);

  console.log(location);



  return (
    <div className='hii mt-5 mt-md-0'>

      <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <div className='d-flex justify-content-center align-items-center mb-3'>


          <input type="text" className='rounded-pill p-1 ms-5 text-center text-capitalize fs-3'
            onChange={(e) => setLocation(e.target.value)} value={location}
            onKeyDown={enter}
            placeholder='Enter City Name'
          />



          <FontAwesomeIcon icon={faSearch}
            className='fs-1 ms-2 pe-auto cur mt-1 btn' role="button" style={{ marginLeft: "435px" }}
            onClick={click}
          />


        </div>

        {
          apiData && (

            <>

              <div className='card  m-2' style={{ background: "skyblue" }}>

                <div className="card-header">
                  <div className='d-flex align-items-center '>

                    <FontAwesomeIcon icon={faLocation} className='fs-4' />
                    {/* <FontAwesomeIcon icon="fa-regular fa-clock" />                   */}
                    <h4 className='mt-2 ms-4 '>{apiData.location.name}, {apiData.location.region}, {apiData.location.country}</h4>

                  </div>

                </div>

                <div className='card-body ' >
                  <div className='d-flex align-items-center justify-content-between '>

                    <h3 className='ms-2'> C : {apiData.current.temp_c}°</h3>
                    <h3 className='me-2'>F : {apiData.current.temp_f}</h3>
                  </div>

                  <div className='d-flex align-items-center justify-content-between '>
                    <img src={apiData.current.condition.icon} alt="Weather Icon" className='ms-3' />
                    <h5 className='me-4 mt-2'> {apiData.current.condition.text}</h5>
                  </div>
                </div>

                <div className="card-footer">
                  <div className='d-flex align-items-center '>
                    <FontAwesomeIcon icon={faClock} className='fs-4' />
                    <h4 className='mt-2 ms-4 '>{apiData.location.localtime} </h4>
                  </div>
                </div>


              </div>

              <div className='container'>
                <div className='row'>

                  <div className='col-sm-6 col-lg-3 mt-2 mb-3 '>
                    <div className="card rounded bg-transparent" style={{ background: "#0000032" }}>
                      <div className="card-header text-center">
                        <h4>Humidity</h4>
                      </div>

                      <div className='card-body d-flex justify-content-between align-items-center'>
                        <FontAwesomeIcon icon={faDroplet} />
                        <h2>{apiData.current.humidity}%</h2>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-3 mt-2 mb-3 '>
                    <div className="card rounded bg-transparent" style={{ background: "#0000032" }}>
                      <div className="card-header text-center">
                        <h4>Wind</h4>
                      </div>

                      <div className='card-body d-flex justify-content-between align-items-center'>
                        <FontAwesomeIcon icon={faWind} />
                        <h2>{apiData.current.wind_kph} kph</h2>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-3 mt-2 mb-3 '>
                    <div className="card rounded bg-transparent" style={{ background: "#0000032" }}>
                      <div className="card-header text-center">
                        <h4>Wind Direction</h4>
                      </div>

                      <div className='card-body d-flex justify-content-between align-items-center'>
                        <FontAwesomeIcon icon={faFlag} />
                        <h2>{apiData.current.wind_dir}</h2>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-3 mt-2 mb-3 '>
                    <div className="card rounded bg-transparent" style={{ background: "#0000032" }}>
                      <div className="card-header text-center">
                        <h4>Air Pressure</h4>
                      </div>

                      <div className='card-body d-flex justify-content-between align-items-center'>
                      <img className='fs-1' style={{height:"50px",width:"40px"}} src="https://static.thenounproject.com/png/3257259-200.png" alt="" />

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
  )
}

export default App