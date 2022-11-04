import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
// import '../../index.css'


const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, blanditiis distinctio repellendus esse a quam repudiandae vel nisi, vitae, eos illum dolorem doloribus eligendi similique asperiores eveniet harum quae non.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in the last 24 hours.</p>
        </div>

        
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default Header