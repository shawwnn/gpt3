import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond are imagination</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi ipsam suscipit vitae adipisci magnam consectetur sapiente laborum doloremque, quis ut recusandae libero, iste similique.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility