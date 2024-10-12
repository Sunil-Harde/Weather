import React from 'react'

function Video(props) {

    return (
        <div className='video-background'>
            {props.videoSource && (
                <video key={props.videoKey} autoPlay loop muted>
                    <source src={props.videoSource} type='video/mp4' />
                </video>
            )}
        </div>
    )
}

export default Video