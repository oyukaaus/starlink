import React from 'react'
import video from './assets/starlink.mp4'

const Landing = () => {
    return (
        <div className='landing'>
            <video src={video} autoPlay muted loop></video>
            {/* <iframe width="100%" height="1000" src="https://www.youtube.com/embed/k8OxL4twwrU?si=z5OpKsxaRrOa8fX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            <div className='overlay'></div>
            <div className='content'>
                <h1>WELCOME TO STARTLINK NOMAD</h1>
                <p>Easy, Compact, All-in-One Connectivity Solution. Accessible, Portable, and Powerful.</p>
                <button>BUY DEVICES</button>
            </div>

        </div>
    )
}

export default Landing