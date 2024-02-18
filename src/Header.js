import React from 'react'
import Landing from './Landing'
// import logo from './assets/hawaii-logo.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='left-section'>
        {/* <img src="https://api.starlink.com/public-files/home_a_hero_d.webp"></img> */}
        <div>Roundtrip</div>
        <div>One-way</div>
        <div>Multi-city</div>
      </div>
      {/* <Landing></Landing> */}
      <div className='middle-section'></div>
      <div className='right-section'>
        <div>BUSINESS</div>
        <div>TRIPS</div>
        <div>SIGN-IN</div>
      </div>

    </div>
  )
}

export default Header