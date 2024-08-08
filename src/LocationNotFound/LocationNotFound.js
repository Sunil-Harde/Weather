import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function LocationNotFound({ notFound, setNotFound }) {

    return (
        <>
            {
                notFound === true && (
                    <div className='error d-flex container-fluid  position-absolute z-1 text-capitalize bg-dark rounded-4 shadow-lg px-4 p-4 text-danger' data-aos-anchor-placement="center-center" data-aos="fade-down" data-aos-duration="800">
                        <h2> <span>Location</span> Not Exist </h2>
                        <FontAwesomeIcon icon={faTimes} className='position-absolute faTimes' onClick={() => setNotFound(false)} />
                    </div>
                )
            }
        </>
    )
}

export default LocationNotFound